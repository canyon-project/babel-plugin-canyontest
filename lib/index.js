const {template} = require('@babel/core');
const tep = require('./template');
const canyonTemplate = template(tep["templates/canyon.template.js"]);
const writeCanyonToLocalTemplate = template(tep["templates/write-canyon-to-local-template.js"])
const generate = require('@babel/generator').default;

function extractCoverageData(scriptContent) {
  const regex = /var\s+coverageData\s*=\s*({[\s\S]*?});/;
  const match = regex.exec(scriptContent);
  if (match) {
    const objectString = match[1];
    try {
      return new Function('return ' + objectString)();
    } catch (e) {
      console.error('Failed to parse object:', e);
      return null;
    }
  } else {
    return null;
  }
}

function convertConfig(config) {
  let defaultCiField = {
    projectID: 'CI_PROJECT_ID',
    commitSha: 'CI_COMMIT_SHA',
    reporter: 'REPORTER',
    dsn: 'DSN',
    branch: 'CI_COMMIT_BRANCH'
  }
  let data = {}
  for (const ciFieldKey in defaultCiField) {
    data[ciFieldKey] = config[ciFieldKey] || process.env[defaultCiField[ciFieldKey]]
  }
  return {
    ...config,
    ...data
  }
}

module.exports = function ({types: babelTypes}, config) {
  return {
    name: "babel-plugin-canyon",
    visitor: {
      Program: {
        exit(path) {
          const initialCoverageDataForTheCurrentFile = extractCoverageData(generate(path.node).code)
          config = convertConfig(config)
          const __canyon__ = {
            PROJECT_ID: String(config.projectID) || '-',
            DSN: config.dsn || '-',
            REPORTER: config.reporter || '-',
            INSTRUMENT_CWD: config.instrumentCwd || process.cwd(),
            COMMIT_SHA: config.commitSha || '-',
            BRANCH: config.branch || '-',
            REPORT_ID: config.reportID || '-',
            COMPARE_TARGET: config.compareTarget || '-',
            ENV: JSON.stringify(Object.keys(process.env || {}))
          }
          const canyon = canyonTemplate(__canyon__);
          const writeCanyonToLocal = writeCanyonToLocalTemplate({
            JSON: 'JSON'
          })

          // 必须校验数据完整性
          if (initialCoverageDataForTheCurrentFile && __canyon__.DSN.includes('http') && __canyon__.COMMIT_SHA && __canyon__.PROJECT_ID && __canyon__.REPORTER) {
            if (__canyon__.COMMIT_SHA !== '-' && __canyon__.PROJECT_ID !== '-' && __canyon__.REPORTER !== '-') {
              const proxy = (process.env.CI_SERVER_URL || '').includes(atob('Y3RyaXA=')) ? {
                proxy: {
                  protocol: 'http',
                  host: atob('cHJveHlnYXRlMi5jdHJpcGNvcnAuY29t'),
                  port: 8080
                }
              } : {}
              try {
                const axios = require('axios')
                axios.post(__canyon__.DSN.replace('https://','http://'), {
                  coverage: {
                    [initialCoverageDataForTheCurrentFile.path]: initialCoverageDataForTheCurrentFile
                  },
                  commitSha: __canyon__.COMMIT_SHA,
                  branch: __canyon__.BRANCH,
                  projectID: __canyon__.PROJECT_ID,
                  reportID: 'initial_coverage_data',
                  compare_target: __canyon__.COMPARE_TARGET,
                  instrumentCwd: __canyon__.INSTRUMENT_CWD,
                }, {
                  headers: {
                    Authorization: 'Bearer ' + __canyon__.REPORTER,
                  },
                  timeout: 5000,
                  ...proxy
                }).catch(err=>{
                  console.log('Failed to post coverage data:', err)
                })
              } catch (e) {
                console.log('Failed to post coverage data:', e)
              }
            }
          }

          path.node.body.unshift(canyon)
          path.node.body.unshift(writeCanyonToLocal)
        }
      }
    }
  };
};

function cov_59e2ut2i7() {
  var path = "/Users/travzhang/Desktop/babel-plugin-canyontest/features/jian.js";
  var hash = "5dab23bfdc417223537d78436b5031e6defc43af";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/travzhang/Desktop/babel-plugin-canyontest/features/jian.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 3
        }
      },
      "1": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 14
        }
      },
      "2": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 12
        }
      },
      "3": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "add",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 12
          }
        },
        loc: {
          start: {
            line: 1,
            column: 19
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 4,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    provider: "tripgl",
    slug: "auto",
    projectID: "9050",
    sha: "xxxxx",
    branch: "master",
    reporter: "xxxxx",
    compareTarget: "main",
    version: "2.0.50",
    instrumentCwd: "/Users/travzhang/Desktop/babel-plugin-canyontest",
    dsn: "http://localhost:3000",
    buildID: "-",
    buildProvider: "gitlab_runner",
    buildTarget: ""
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_59e2ut2i7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_59e2ut2i7();
function add(a, b) {
  cov_59e2ut2i7().f[0]++;
  cov_59e2ut2i7().s[0]++;
  if (a > b) {
    cov_59e2ut2i7().b[0][0]++;
    cov_59e2ut2i7().s[1]++;
    return a - b;
  } else {
    cov_59e2ut2i7().b[0][1]++;
  }
  cov_59e2ut2i7().s[2]++;
  return a + b;
}
cov_59e2ut2i7().s[3]++;
add(1, 2);
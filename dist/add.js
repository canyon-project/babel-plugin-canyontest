function cov_pyv3wvd1g() {
  var path = "/Users/travzhang/Desktop/babel-plugin-canyontest/features/add.js";
  var hash = "e5e0139b85b5980294ac4a90cf2dfcc53f139885";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/travzhang/Desktop/babel-plugin-canyontest/features/add.js",
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
    inputSourceMap: 1,
    provider: "tripgl",
    slug: "auto",
    projectID: "9050",
    sha: "xxxxx",
    branch: "master",
    reporter: "xxxxx",
    compareTarget: "main",
    version: "2.0.33",
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
    cov_pyv3wvd1g = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_pyv3wvd1g();
function add(a, b) {
  cov_pyv3wvd1g().f[0]++;
  cov_pyv3wvd1g().s[0]++;
  if (a > b) {
    cov_pyv3wvd1g().b[0][0]++;
    cov_pyv3wvd1g().s[1]++;
    return a - b;
  } else {
    cov_pyv3wvd1g().b[0][1]++;
  }
  cov_pyv3wvd1g().s[2]++;
  return a + b;
}
cov_pyv3wvd1g().s[3]++;
add(1, 2);
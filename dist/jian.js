function cov_59e2ut2i7() {
  var path = "/Users/travzhang/Desktop/babel-plugin-canyontest/features/jian.js";
  var hash = "5dab23bfdc417223537d78436b5031e6defc43af";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/travzhang/Desktop/babel-plugin-canyontest/features/jian.js",
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
    version: "2.0.90",
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
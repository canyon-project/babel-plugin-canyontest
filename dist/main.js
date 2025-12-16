"use strict";

function cov_1f9sqblhmo() {
  var path = "/Users/travzhang/Desktop/babel-plugin-canyontest/features/main.js";
  var hash = "3a3c7ef64541f8c0980b0b0a308ade741915bd70";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/travzhang/Desktop/babel-plugin-canyontest/features/main.js",
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "main.js",
      sourceRoot: "",
      sources: ["../features-origin/main.ts"],
      names: [],
      mappings: ";;AAAA,cAAc;AACd,mCAAiC;AACjC,SAAS,eAAe;IACtB,MAAM,SAAS,GAAG,QAAQ,CAAC,aAAa,CAAkB,QAAQ,CAAC,CAAC;IACpE,MAAM,SAAS,GAAG,QAAQ,CAAC,aAAa,CAAoB,MAAM,CAAC,CAAC;IACpE,IAAI,CAAC,SAAS,IAAI,CAAC,SAAS;QAAE,OAAO;IAErC,MAAM,OAAO,GAAG,SAA4B,CAAC;IAC7C,MAAM,WAAW,GAAG,SAA8B,CAAC;IAEnD,SAAS,UAAU;QACjB,MAAM,CAAC,GAAG,QAAQ,CAAC,OAAO,CAAC,SAAS,IAAI,GAAG,EAAE,EAAE,CAAC,CAAC;QACjD,OAAO,MAAM,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACjC,CAAC;IAED,SAAS,UAAU,CAAC,CAAS;QAC3B,OAAO,CAAC,SAAS,GAAG,MAAM,CAAC,CAAC,CAAC,CAAC;IAChC,CAAC;IAED,WAAW,CAAC,gBAAgB,CAAC,OAAO,EAAE,GAAG,EAAE;QACzC,UAAU,CAAC,UAAU,EAAE,GAAG,CAAC,CAAC,CAAC;IAC/B,CAAC,CAAC,CAAC;AACL,CAAC;AAED,kCAAkC;AAClC,MAAM,IAAI;IACR,QAAQ;QACN,OAAO,CAAC,GAAG,CAAC,cAAc,CAAC,CAAC;QAC5B,OAAO,CAAC,GAAG,CAAC,gBAAQ,CAAC,CAAC,CAAC,CAAC;IAC1B,CAAC;CACF;AAED,QAAQ,CAAC,gBAAgB,CAAC,kBAAkB,EAAE,GAAG,EAAE;IACjD,oBAAoB;AACtB,CAAC,CAAC,CAAC;AAEH,SAAS,SAAS;IAChB,IAAI,IAAI,EAAE,CAAC,QAAQ,EAAE,CAAC;IACtB,eAAe,EAAE,CAAC;AACpB,CAAC;AAED,SAAS,EAAE,CAAC"
    },
    inputSourceMap: 1,
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
    cov_1f9sqblhmo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1f9sqblhmo();
cov_1f9sqblhmo().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
// @ts-nocheck
const enums_1 = (cov_1f9sqblhmo().s[1]++, require("./enums"));
function mountCounterApp() {
  cov_1f9sqblhmo().f[0]++;
  const valueNode = (cov_1f9sqblhmo().s[2]++, document.querySelector('#value'));
  const incButton = (cov_1f9sqblhmo().s[3]++, document.querySelector('#btn'));
  cov_1f9sqblhmo().s[4]++;
  if ((cov_1f9sqblhmo().b[1][0]++, !valueNode) || (cov_1f9sqblhmo().b[1][1]++, !incButton)) {
    cov_1f9sqblhmo().b[0][0]++;
    cov_1f9sqblhmo().s[5]++;
    return;
  } else {
    cov_1f9sqblhmo().b[0][1]++;
  }
  const valueEl = (cov_1f9sqblhmo().s[6]++, valueNode);
  const incButtonEl = (cov_1f9sqblhmo().s[7]++, incButton);
  function getCurrent() {
    cov_1f9sqblhmo().f[1]++;
    const n = (cov_1f9sqblhmo().s[8]++, parseInt((cov_1f9sqblhmo().b[2][0]++, valueEl.innerHTML) || (cov_1f9sqblhmo().b[2][1]++, '0'), 10));
    cov_1f9sqblhmo().s[9]++;
    return Number.isNaN(n) ? (cov_1f9sqblhmo().b[3][0]++, 0) : (cov_1f9sqblhmo().b[3][1]++, n);
  }
  function setCurrent(n) {
    cov_1f9sqblhmo().f[2]++;
    cov_1f9sqblhmo().s[10]++;
    valueEl.innerHTML = String(n);
  }
  cov_1f9sqblhmo().s[11]++;
  incButtonEl.addEventListener('click', () => {
    cov_1f9sqblhmo().f[3]++;
    cov_1f9sqblhmo().s[12]++;
    setCurrent(getCurrent() + 1);
  });
}
// Keep original logs from example
class Main {
  sayHello() {
    cov_1f9sqblhmo().f[4]++;
    cov_1f9sqblhmo().s[13]++;
    console.log('Hello World!');
    cov_1f9sqblhmo().s[14]++;
    console.log(enums_1.TestEnum.A);
  }
}
cov_1f9sqblhmo().s[15]++;
document.addEventListener('DOMContentLoaded', () => {
  cov_1f9sqblhmo().f[5]++;
} // no-op placeholder
);
function bootstrap() {
  cov_1f9sqblhmo().f[6]++;
  cov_1f9sqblhmo().s[16]++;
  new Main().sayHello();
  cov_1f9sqblhmo().s[17]++;
  mountCounterApp();
}
cov_1f9sqblhmo().s[18]++;
bootstrap();
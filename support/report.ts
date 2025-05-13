const reporter = require('cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'report.json',
  output: 'report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Project": "Testes Base2",
    "Browser": "Chromium",
    "Executed": "Local"
  }
});

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {
    results.testResults[0].testResults.forEach((item) => {
      if (item.status !== "failed") {
        return;
      }
      const newLine = "%0A";
      const name = results.testResults[0].testFilePath;

      const message = item.failureMessages[0].replace(/\n/g, newLine);
      const [, line, col] = item.failureMessages[0].match(/:([0-9]+):([0-9]+)/);

      console.log(`::error file=${name},line=${line},col=${col}::${message}`);
    });
  }
}

module.exports = MyCustomReporter;

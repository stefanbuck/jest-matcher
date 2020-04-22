class MyCustomReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    onRunComplete(contexts, results) {
        results.testResults[0].testResults.forEach(item => {
       if (item.status !== 'failed') {
            return;
        }
        const newLine = '%0A';
        const name = results.testResults[0].testFilePath;

        if (!item.location) {
          throw new Error('You need to invoked jest with argument --testLocationInResults')
        }

        const line = item.location.line + 1;
        const col = item.location.column;
        const message = item.failureMessages[0].replace(/\n/g, newLine);

        console.log(`::error file=${name},line=${line},col=${col}::${message}`)
      })
    }
  }
  
  module.exports = MyCustomReporter;

  // see https://github.com/facebook/jest/pull/4782

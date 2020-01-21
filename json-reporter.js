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
        const name = 'some.test.js';
        const line = 7;
        const col = 17;
        const message = item.failureMessages[0];
        console.log('')
        console.log(`::error file=${name},line=${line},col=${col}::${message}`)
      })
    }
  }
  
  module.exports = MyCustomReporter;

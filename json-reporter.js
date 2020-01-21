class MyCustomReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    onRunComplete(contexts, results) {
        const name = 'some.test.js';
        const line = 7;
        const col = 17;
        const message = 'will it work or \n fail?';
        console.log('')
        console.log(`::error file=${name},line=${line},col=${col}::${message}`)
        
        const message2 = `foo 
bar`;
        console.log(`::error file=${name},line=${line+1},col=${col}::${message2}`)
    }
  }
  
  module.exports = MyCustomReporter;
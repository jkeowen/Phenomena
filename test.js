const { _getReport, getOpenReports, client } = require('./db/index');

const testFunc = async() =>{
    console.log('sfds')
    // await _getReport(2)
    console.log(await getOpenReports())
}
// console.log('adads')
testFunc();
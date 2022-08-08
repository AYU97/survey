const dataPath = './survey.json' // path to JSON file
const fs = require('fs');


const createSurvey = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getSurvey = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}
const util = {createSurvey,getSurvey,dataPath}
module.exports = util
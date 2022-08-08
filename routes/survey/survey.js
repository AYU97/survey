const express = require("express")
const survey = express.Router();
const fs = require('fs');
const util = require('../../utils')


// create a survey
survey.post('/survey/addSurvey', (req, res) => {

    const existingSurveys = util.getSurvey()
    const newSurveyId = Math.floor(100000 + Math.random() * 900000) // to generate 6 digit random number for ID

    existingSurveys[newSurveyId] = req.body

    util.createSurvey(existingSurveys);
    res.send({
        success: true,
        msg: 'survey created successfully'
    })
})

// Read - get all survey from the json file
survey.get('/survey/list', (req, res) => {
    const surveys = util.getSurvey()
    res.send(surveys)
})

// Update - using Put method to update the survey with answer
survey.put('/survey/answer/:id', (req, res) => {
    const existingSurveys = util.getSurvey()
    fs.readFile(util.dataPath, 'utf8', (err, data) => {
        const surveyId = req.params['id'];

        existingSurveys[surveyId].answer = req.body.answer // this will add an answer key and value
        util.createSurvey(existingSurveys);
        res.send(`survey with id ${surveyId} has been updated with an answer`)
    }, true);
});

module.exports = survey
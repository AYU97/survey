// route.js file
const express = require("express")
const router = express.Router();

const surveyRoute = require('./survey/survey') // import survey route
router.use(surveyRoute) // use survey route
module.exports = router;
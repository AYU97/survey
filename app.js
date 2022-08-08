const express = require("express")
const bodyParser = require("body-parser")

// create our express app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// route
const routes = require('./routes/routes')
app.use('/', routes)

//start server
app.listen(3000, ()=>{ // by default port. Can change the port if required. Can keep that in the .env file
    console.log("server running at port:3000")
}) 
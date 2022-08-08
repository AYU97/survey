This is a basic project with the aim to provide all the required functionalites that were asked. I have made use of JSON file as a datastore for this project. I have already added few sample surveys in the JSON file(survey.json).

By default the PORT used : 3000(hardcoded)


# To install the dependencies

- npm install

# To start the application

- npm run start

# To get all the surveys list
- METHOD : GET
- URL : http://localhost:3000/survey/list

# To add a new survey
- METHOD : POST
- URL : http://localhost:3000/survey/addSurvey

- Request Payload Sample : 

{
    "title": "How did you like the code?",
    "options": ["average", "good", "best"]
}

# To answer a survey
- METHOD : PUT
- URL : http://localhost:3000/survey/answer/:id  


- Request Payload Sample : 

{
    "answer":"best"
   
}

# P.S (`:id` is the ID of the survey)

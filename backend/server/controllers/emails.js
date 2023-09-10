const {response} = require('express');
const {Email} = require('../models/email');

const createEmail = (request, response) => {
    console.log("This console log is from the create email function in the controller:", request.body);
    submittedEmail = new Email()
        submittedEmail.firstName = request.body.firstName
        submittedEmail.lastName = request.body.lastName
        submittedEmail.emailAddress = request.body.emailAddress
        submittedEmail.subject = request.body.subject
        submittedEmail.email = request.body.email
        submittedEmail.save()
            .then(submittedEmailData => {
                console.log("This is the .then of the create email function in the controller saving the data:", submittedEmailData);
                response.json(submittedEmailData)
            })
            .catch(errors => {
                console.log("This is the .catch of the create email function in the controller, meaning saving the data errored:", errors);
                response.json(errors)
            })     
}

// const testFunction = (request, response) => {
//     console.log("This console log is from the test function in the controller.");
//     return response.json("test Function")
// }

module.exports = {createEmail} 


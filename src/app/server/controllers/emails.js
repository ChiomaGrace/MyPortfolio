const {response} = require('express')
const {Email} = require('../models/email')

module.exports = {
    createEmail: (request, response) => {
        console.log("The create email function in the controller receiving the request body", request.body)
        submittedEmail = new Email()
        submittedEmail.name = request.body.name
        submittedEmail.save()
            .then(submittedEmailData => {
                console.log("This is the .then of the create email function in the controller saving the data", submittedEmailData)
                response.json(submittedEmailData)
            })
            .catch(errors => {
                console.log("Errors", errors)
                response.json(errors)
            })

    }
}
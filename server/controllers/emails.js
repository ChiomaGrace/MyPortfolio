const {response} = require('express');
const {Email} = require('../models/email');
// const sharedService = require('../../shared.service')

module.exports = {
    createEmail: (request, response) => {
        console.log("The create email function in the controller receiving the request body", request.body);
        submittedEmail = new Email()
        submittedEmail.name = request.body.name
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
}

    //   var createEmailFunction = async (request, response) => {
    //     try {
    //         console.log(request.body);
    //         var status = await sharedService.emailService(request.body);
    //         console.log(status);
    //         if (status) {
    //             console.log("This means the email was created succssfully.")
    //         } else {
    //             console.log("This means there was an error in creating the email");
    //         }
    //     }
    //     catch(error) {
    //         console.log("Error in the catch:", error);
    //     }
    //   }


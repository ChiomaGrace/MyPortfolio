const express = require('express');
const router = express.Router();
const Emails = require("../controllers/emails")

// module.exports = function(router) {

    router.post('/sendEmail', (request, response) => {
        // response.send("This is the send email function. in routes.js")
        console.log("This console log is coming from the route.js")
        Emails.createEmail(request, response)
    })

    router.get('/test', (request, response) => {
        response.send("This is a test response from routes.js")
        console.log("This console log is coming from the route.js")
    })

    
// }


module.exports = router;
const express = require('express');
const router = express.Router(); //links the route call on the server.js
const emailController = require("../controllers/emails"); //links the email controller which has all the functions

router.post('/sendEmail', emailController.createEmail);

// router.get('/test', (request, response) => {
//     response.send("This is a test response from routes.js")
//     console.log("This console log is coming from the route.js")
// });

module.exports = router; //helps to achieve module programming. Modular programming refers to separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality
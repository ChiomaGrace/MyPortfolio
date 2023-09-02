const Emails = require("../controllers/emails")
const express = require('express');
const router = express.Router();

module.exports = function(router) {

    router.post('/', (request,response)=> {
        console.log("This console log is coming from the route.js", Emails)
        Emails.createAuthor(request, response)
    })
}

module.exports = router;
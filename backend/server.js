const express = require('express'); //a routing and middleware (functions that have access to request/response objects) web framework that has minimal functionality of its own and is essentially a series of middleware function calls. must require('express') to use the package before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is the function that then invokes express
const mongoose = require('mongoose');
const routes = require('./server/config/routes'); //linking the routes file

var myPortfolioDatabase = mongoose.connect(process.env.MONGO_URL, function (error, response) { //process.env.MONGO_URL is the variable created in railway deployment for my service
  if (error) {
    console.log("This error is from the server.js file where mongoose is connecting:", error);
  }
  else {
    console.log("This console log means a successful connection to the database");
    // console.log(response);
  }
});

app.use(express.json()); // middleware that parses incoming requests with JSON payloads (HTTP post, put, patch requests) and is based on body-parser aka so you can see/work with form data

app.use(express.urlencoded()); // middleware that parses incoming requests with URL-ecnoded payloads (HTTP post, put, patch requests) and is based on body-parser aka so you can see/work with form data

app.use('/', routes);  //this invokes the routes.js file

const port = process.env.PORT || 3000; //changed for deployment

app.listen(port, () => { //starts a port and hosts connection
  console.log("Listening on port:", port);
});
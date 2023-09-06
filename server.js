const express = require('express'); //a routing and middleware (functions that have access to request/response objects) web framework that has minimal functionality of its own and is essentially a series of middleware function calls. must require('express') to use the package before attempting to invoke it,otherwise an error 'express is not defined' will occur
const app = express(); //this is the function that then invokes express
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //middleware which provides the ability to parse through incoming data/request bodies 
const port = process.env.NODE_PORT || 3000; //the port the node server will run on
const routes = require('./server/config/routes'); //linking the routes file


// const myPortfolioDbUrl = "mongodb+srv://ChiomaGrace:wakandaforever@myportfoliocluster.98iczyl.mongodb.net/"

// async function connect(){
//   try {
//       await mongoose.connect(myPortfolioDbUrl);
//       console.log("connected to MongoDB");
//   }
//   catch {
//       console.log(error);
//   }
// }

// connect();

var myPortfolioDatabase = mongoose.connect('mongodb+srv://ChiomaGrace:wakandaforever@myportfoliocluster.98iczyl.mongodb.net/', function(error, response) {
  if(error) {
    console.log("This error is from the server.js file where mongoose is connecting:", error);
  }
  else {
    console.log("This console log means a successful connection to" + myPortfolioDatabase, "The response:");
    // console.log(response);
  }
});



app.use(bodyParser.json()); //parses jsondata
app.use(bodyParser.urlencoded({extended: false})); //parses URL encoded data
app.use('/', express.static('dist/my-portfolio')) // this connects/serves static files
// app.use('/sendEmail', routes); Note for whatever reason this outputs a middleware error so use below syntax
app.use('/sendEmail', () => routes);

app.listen(port, () => { //starts a port and hosts connection
  console.log("Listening on port", port);

})
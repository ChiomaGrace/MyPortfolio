// const express = require('express'); //must require('express') before attempting to invoke it,otherwise an error 'express is not defined' will occur
// const app = express(); //this is the function that then invokes express
// const mongoose = require('mongoose'); //must require('mongoose') before attempting to invoke it
// // const PORT = 6969;

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(express.static(__dirname + "/myPortfolio/dist/app")) // this connects stylesheets in static folder

// mongoose.connect('mongodb+srv://ChiomaGrace:wakandaforever@myportfoliocluster.98iczyl.mongodb.net/') 
// //Step 2 of FormData - Confgure serve.js with required variables and link database

// // require('./server/config/routes')(app)
// const routes = require('/Users/chioma.ubogagu.SV-NB-DEV-78/Angular/myPortfolio/src/app/server/config/routes');

// app.use('/sendEmail', routes)


// // // app.listen(PORT, () => {
// // //     console.log("Listening on port")
// // // })

// app.listen(3001, () => {
//     console.log("Listening on port")
// })

// THE BELOW WORKS!

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = process.env.NODE_PORT || 3000;

const root = path.join(__dirname, 'dist', 'my-portfolio');


app.get('*' ,function(req, res) {
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});

app.listen(port);
console.log('Listening on port '+ port);

// THE ABOVE WORKS!

const express = require('express');
const axios = require('axios');
const path = require('path');

var cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const userController = require('./Controller/controllerUser');
const profController = require('./Controller/controllerProfile');
const testController = require('./Controller/controllerTest');

const db = require('../db/db.js');
const model = require('../db');

const {check} = require('express-validator')

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cookieParser());

app.post('/api/login', [
  check("name", "Name should be at least 3 characters").isLength({min: 3}),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password should be at least 6 characters").isLength({min: 6}),
], userController.logIn);
app.get('/api/logout', userController.logOut);
app.post('/api/signup', [
  check("name", "Name should be at least 3 characters").isLength({min: 3}),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password should be at least 6 characters").isLength({min: 6}),
], userController.signUp)
app.get('/api/verifyuser', userController.verifyUser)
app.get('/api/user', userController.getUser)
app.post('/api/user', userController.updateUser)
app.put('/api/forgotpassword', userController.forgotPassword)
app.put('/api/resetpassword', userController.resetPassword)
app.post('/api/cognitivetest', testController.postTest);
app.get('/api/test3Images', testController.getTest);
app.get('/api/test3v2Images', testController.getTestv2);
app.post('/api/test3imagerating', testController.postRating)
app.post('/api/test3v2imagerating', testController.postRatingv2)
app.post('/api/test3imagerating2', testController.postRating2)
app.post('/api/test3v2imagerating2', testController.postRating2v2)
app.post('/api/test3recallimagerating', testController.postRating3)
app.post('/api/test4section1', testController.postTest4Section1)
app.post('/api/test4section1v2', testController.postTest4Section1v2)

app.post('/api/test4recallsection1', testController.postTest4RecallSection1)
app.post('/api/test4section2', testController.postTest4Section2)
app.post('/api/test4section2v2', testController.postTest4Section2v2)

app.post('/api/test4recallsection2', testController.postTest4RecallSection2)
app.post('/api/test4section3', testController.postTest4Section3)
app.post('/api/test4section3v2', testController.postTest4Section3v2)

app.post('/api/test4recallsection3', testController.postTest4RecallSection3)
app.post('/api/test4section4', testController.postTest4Section4)
app.post('/api/test4section4v2', testController.postTest4Section4v2)

app.post('/api/test4section5', testController.postTest4Section5)
app.post('/api/test4section5v2', testController.postTest4Section5v2)

app.post('/api/test4section6', testController.postTest4Section6)
app.post('/api/test4section6v2', testController.postTest4Section6v2)

app.post('/api/test5section2', testController.postTest5Section2)
// app.post('/api/test1completion', testController.postTest1Tracker)








// app.get('/api/resetpassword/:token', (req, res) => {

//   var myRegexp = /(?:\/resetpassword\/:)(.+)/g;
//   var token = myRegexp.exec(req.path)[1];
//   console.log(token)
//   res.json({
//     token: token
//   })
// })
// app.get('/api/profile', profController.getProfile)
// app.post('/api/profile', profController.postProfile)


// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("../client/src/mocks/browser");
//   worker.start();
// }

//  -----------HEROKU DEPLOYMENT-----------
if (process.env.NODE_ENV === 'development') {   //production
  app.get("/mockServiceWorker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/src/mocks/browser.js"));
  });
  // app.get('/login', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../client/src/mocks/browser.js'), function(err) {
  //     const { worker } = require('../client/src/mocks/browser')
  // console.log('HERE..', worker)
  // worker.start()
  //     if (err) {
  //       res.status(550).send(err)
  //     }
  //   })
  // })
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

} else {
  app.get("/", function(req, res) {
    res.send("API is running...")
  })
}
//-----------------------------------------

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})

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
app.get('/api/getuser', userController.getUser)
app.put('/api/forgotpassword', userController.forgotPassword)
app.put('/api/resetpassword', userController.resetPassword)

// app.get('/api/resetpassword/:token', (req, res) => {

//   var myRegexp = /(?:\/resetpassword\/:)(.+)/g;
//   var token = myRegexp.exec(req.path)[1];
//   console.log(token)
//   res.json({
//     token: token
//   })
// })
app.post('/api/cognitivetest', testController.postTest);

app.get('/api/profile', profController.getProfile)
app.post('/api/profile', profController.postProfile)




//  -----------HEROKU DEPLOYMENT-----------
if (process.env.NODE_ENV === 'production') {
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

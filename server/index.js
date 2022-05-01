const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;


const profController = require('./Controller/controllerProfile');
const testController = require('./Controller/controllerTest');

const db = require('../db/db.js');
const model = require('../db');

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// AUTHENTICATE
app.get('/api/profile', profController.getProfile)
app.post('/api/profile', profController.postProfile)

//Cognitive Test
app.get('/api/cognitivetest', testController.getTest);
app.post('/api/cognitivetest', testController.postTest);



// DO NOT REMOVE OR ROUTES WON'T WORK ON REFRESH. KEEP AT BOTTOM.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})

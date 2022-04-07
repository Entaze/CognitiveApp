const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

const controller = require('./Controller/controllerProfile');

const db = require('../db/db.js');
const model = require('../db');

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// AUTHENTICATE
app.get('/api/profile', controller.getProfile)
app.post('/api/profile', controller.postProfile)

app.post('/api/profile', (req, res) => {
  console.log('Reqq :', req.body.name);
  db.postProfile(req, res, (err, data) => {
    res.status(201).send();
  });
});


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

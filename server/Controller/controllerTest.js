const models = require('../Model/modelTest');

module.exports = {
  postTest: (req, res) => {
    // console.log('Contr :', req.body);
    models.postTest(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  getTest: (req, res) => {
    // console.log('Contr get test:', req.query);
    models.getTest(req.query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postRating: (req, res) => {
    // console.log('Contr :', req.body);
    models.postRating(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postRating2: (req, res) => {
    // console.log('Contr :', req.body);
    models.postRating2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
}
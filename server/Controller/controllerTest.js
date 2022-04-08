const model = require('../Model/modelTest');

module.exports = {
  postTest: (req, res) => {
    // console.log('Cognitive test post body controller:', req.body)
    model.postTest(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  },
  getTest: (req, res) => {
    // console.log('here!');
    // console.log('Test Req query :', req.query);
    model.getTest(req.query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
}
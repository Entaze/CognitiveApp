const models = require('../Model/modelTest');

module.exports = {
  postTest: (req, res) => {
    models.postTest(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
}
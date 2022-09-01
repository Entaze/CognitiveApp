const model = require('../Model/modelProfile');

module.exports = {
  getProfile: (req, res) => {
    model.findProfile(req.query.uid, req.query._id, (err, result) => {
      if (err) {
        res.status(418).send(err);
      } else {
        res.send(result);
      }
    })
  },

  postProfile: (req, res) => {
    model.createProfile(req.body, (err, result) => {
      if (err) {
        res.status(418).send(err);
      } else {
        res.status(201).send(result);
      }
    })
  },
}
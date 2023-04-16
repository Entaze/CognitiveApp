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
  getTestv2: (req, res) => {
    // console.log('Contr get test:', req.query);
    models.getTestv2(req.query, (err, result) => {
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
  postRatingv2: (req, res) => {
    models.postRatingv2(req.body, (err, result) => {
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
  postRating2v2: (req, res) => {
    models.postRating2v2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postRating3: (req, res) => {
    // console.log('Contr :', req.body);
    models.postRating3(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section1: (req, res) => {
    models.postTest4Sect1(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section1v2: (req, res) => {
    models.postTest4Sect1v2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4RecallSection1: (req, res) => {
    // console.log('Contr :', req.body);
    models.postTest4RecallSect1(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section2: (req, res) => {
    models.postTest4Sect2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section2v2: (req, res) => {
    models.postTest4Sect2v2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4RecallSection2: (req, res) => {
    models.postTest4RecallSect2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section3: (req, res) => {
    models.postTest4Sect3(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section3v2: (req, res) => {
    models.postTest4Sect3v2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4RecallSection3: (req, res) => {
    models.postTest4RecallSect3(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section4: (req, res) => {
    models.postTest4Sect4(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section4v2: (req, res) => {
    models.postTest4Sect4v2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section5: (req, res) => {
    models.postTest4Sect5(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section5v2: (req, res) => {
    models.postTest4Sect5v2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section6: (req, res) => {
    models.postTest4Sect6(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest4Section6v2: (req, res) => {
    models.postTest4Sect6v2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postTest5Section2: (req, res) => {
    models.postTest5Sect2(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
}
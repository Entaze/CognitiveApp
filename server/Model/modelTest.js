const db = require('../../db/db.js');
const mongoose = require('mongoose');

  // Use unique id as testid to get test from test schema

const getTest = async (params, callback) => {
  try {
    // console.log('Test Params :', params);

    db.Profile.find({ _id: params.id})
    .then((result) => {
      // console.log('Result :', result);
      // console.log('Params result:', result[0]);
      db.CognitiveTest.find({_id: result[0].tests})
      .then((results) => {
        callback(null, results);
      })
    })

  }
  catch (e) {
    console.log('get error', e);
  }
}

const postTest = async (params) => {
  console.log('Cognitive test post body model:', params)
  try {
    db.CognitiveTest.updateOne(
       { _id : params.id },
       { $push : {words: params.word}}
    )
    .catch((err) => {
      console.log('post error with model', err);
    })
  }
  catch (e){
    print(e);
  }
}


module.exports = {
  getTest,
  postTest,
}

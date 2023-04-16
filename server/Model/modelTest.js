const db = require('../../db/db.js');

module.exports = {
  postTest: (body, cb) => {
    let data;
    if (body.ListAEntries_Trial1) {
      data = {ListAEntries_Trial1: body.ListAEntries_Trial1};
    } else if (body.ListAEntries_Trial2) {
      data = {ListAEntries_Trial2: body.ListAEntries_Trial2}
    } else if (body.ListAEntries_Trial3) {
      data = {ListAEntries_Trial3: body.ListAEntries_Trial3}
    } else if (body.ListAEntries_Trial4) {
      data = {ListAEntries_Trial4: body.ListAEntries_Trial4}
    } else if (body.ListAEntries_Trial5) {
      data = {ListAEntries_Trial5: body.ListAEntries_Trial5}
    } else if (body.ListBEntries) {
      data = {ListBEntries: body.ListBEntries}
    } else if (body.ListAEntriesRecall) {
      data = {ListAEntriesRecall: body.ListAEntriesRecall}
    } else if (body.ListAEntriesTest5_Recall) {
      data = {ListAEntriesTest5_Recall: body.ListAEntriesTest5_Recall}
    } else if (body.ListAEntries_Trial1v2) {
      data = {ListAEntries_Trial1v2: body.ListAEntries_Trial1v2};
    } else if (body.ListAEntries_Trial2v2) {
      data = {ListAEntries_Trial2v2: body.ListAEntries_Trial2v2}
    } else if (body.ListAEntries_Trial3v2) {
      data = {ListAEntries_Trial3v2: body.ListAEntries_Trial3v2}
    } else if (body.ListAEntries_Trial4v2) {
      data = {ListAEntries_Trial4v2: body.ListAEntries_Trial4v2}
    } else if (body.ListAEntries_Trial5v2) {
      data = {ListAEntries_Trial5v2: body.ListAEntries_Trial5v2}
    } else if (body.ListBEntriesv2) {
      data = {ListBEntriesv2: body.ListBEntriesv2}
    } else if (body.ListAEntriesRecallv2) {
      data = {ListAEntriesRecallv2: body.ListAEntriesRecallv2}
    } else if (body.ListAEntriesTest5_Recallv2) {
      data = {ListAEntriesTest5_Recallv2: body.ListAEntriesTest5_Recallv2}
    } else if (body.Test2_Entry_1) {
      data = {Test2_Entry_1: body.Test2_Entry_1}
    } else if (body.Test2_Entry_2) {
      data = {Test2_Entry_2: body.Test2_Entry_2}
    } else if (body.Test2_Entry_3) {
      data = {Test2_Entry_3: body.Test2_Entry_3}
    } else if (body.Test2_Entry_4) {
      data = {Test2_Entry_4: body.Test2_Entry_4}
    } else if (body.Test2_Entry_5) {
      data = {Test2_Entry_5: body.Test2_Entry_5}
    } else if (body.Test2_Entry_6) {
      data = {Test2_Entry_6: body.Test2_Entry_6}
    } else if (body.Test2_Entry_7) {
      data = {Test2_Entry_7: body.Test2_Entry_7}
    } else if (body.Test2_Entry_8) {
      data = {Test2_Entry_8: body.Test2_Entry_8}
    } else if (body.Test2_Entry_9) {
      data = {Test2_Entry_9: body.Test2_Entry_9}
    } else if (body.Test2_Entry_10) {
      data = {Test2_Entry_10: body.Test2_Entry_10}
    } else if (body.Test2_Entry_11) {
      data = {Test2_Entry_11: body.Test2_Entry_11}
    } else if (body.Test2_Entry_12) {
      data = {Test2_Entry_12: body.Test2_Entry_12}
    } else if (body.Test2_Entry_1v2) {
      data = {Test2_Entry_1v2: body.Test2_Entry_1v2}
    } else if (body.Test2_Entry_2v2) {
      data = {Test2_Entry_2v2: body.Test2_Entry_2v2}
    } else if (body.Test2_Entry_3v2) {
      data = {Test2_Entry_3v2: body.Test2_Entry_3v2}
    } else if (body.Test2_Entry_4v2) {
      data = {Test2_Entry_4v2: body.Test2_Entry_4v2}
    } else if (body.Test2_Entry_5v2) {
      data = {Test2_Entry_5v2: body.Test2_Entry_5v2}
    } else if (body.Test2_Entry_6v2) {
      data = {Test2_Entry_6v2: body.Test2_Entry_6v2}
    } else if (body.Test2_Entry_7v2) {
      data = {Test2_Entry_7v2: body.Test2_Entry_7v2}
    } else if (body.Test2_Entry_8v2) {
      data = {Test2_Entry_8v2: body.Test2_Entry_8v2}
    } else if (body.Test2_Entry_9v2) {
      data = {Test2_Entry_9v2: body.Test2_Entry_9v2}
    } else if (body.Test2_Entry_10v2) {
      data = {Test2_Entry_10v2: body.Test2_Entry_10v2}
    } else if (body.Test2_Entry_11v2) {
      data = {Test2_Entry_11v2: body.Test2_Entry_11v2}
    } else if (body.Test2_Entry_12v2v2) {
      data = {Test2_Entry_12v2: body.Test2_Entry_12v2}
    } else if (body.Test2Recall_Entry_1) {
      data = {Test2Recall_Entry_1: body.Test2Recall_Entry_1}
    } else if (body.Test2Recall_Entry_2) {
      data = {Test2Recall_Entry_2: body.Test2Recall_Entry_2}
    } else if (body.Test2Recall_Entry_3) {
      data = {Test2Recall_Entry_3: body.Test2Recall_Entry_3}
    }
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    db.CognitiveTest.findOneAndUpdate({_id: body.id}, data, options)
      .then((result) => {
        cb(null, result);
      })
      .catch((err) => {
        cb(err);
      })
  },
  getTest: (body, cb) => {
    // console.log('Model test body :', body)
    db.CognitiveTest.findOne(body)
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  getTestv2: (body, cb) => {
    db.CognitiveTest.findOne(body)
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postRating: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test3Images: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postRatingv2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test3v2Images: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postRating2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test3Images2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postRating2v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test3v2Images2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postRating3: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test3ImagesRecall: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect1: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section1: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect1v2: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section1v2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4RecallSect1: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4RecallSection1: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect2v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section2v2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4RecallSect2: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4RecallSection2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect3: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section3: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect3v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section3v2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4RecallSect3: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4RecallSection3: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect4: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section4: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect4v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section4v2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect5: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section5: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect5v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section5v2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect6: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section6: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4Sect6v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test4Section6v2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest5Sect2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {Test5Section2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  // postTest1Tracker: (body, cb) => {
  //   let data = body.obj;
  //   db.CognitiveTest.findOneAndUpdate(
  //     { _id : body._id },
  //     { $push : {Test1Tracker: data}}
  //  )
  //   .then((result) => {
  //     cb(null, result);
  //   })
  //   .catch((err) => {
  //     cb(err);
  //   })
  // },

}

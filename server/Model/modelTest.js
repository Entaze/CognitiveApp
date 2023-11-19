const db = require('../../db/db.js');

module.exports = {
  postTest: (body, cb) => {
    // console.log('Body :', body)
    let data;
    if (body._01ListAEntries_Trial1) {
      data = {_01ListAEntries_Trial1: body._01ListAEntries_Trial1};
    } else if (body._02ListAEntries_Trial2) {
      data = {_02ListAEntries_Trial2: body._02ListAEntries_Trial2}
    } else if (body._03ListAEntries_Trial3) {
      data = {_03ListAEntries_Trial3: body._03ListAEntries_Trial3}
    } else if (body._04ListAEntries_Trial4) {
      data = {_04ListAEntries_Trial4: body._04ListAEntries_Trial4}
    } else if (body._05ListAEntries_Trial5) {
      data = {_05ListAEntries_Trial5: body._05ListAEntries_Trial5}
    } else if (body._06ListBEntries) {
      data = {_06ListBEntries: body._06ListBEntries}
    } else if (body._07ListAEntriesRecall) {
      data = {_07ListAEntriesRecall: body._07ListAEntriesRecall}
    } else if (body._28ListAEntriesTest5_Recall) {
      data = {_28ListAEntriesTest5_Recall: body._28ListAEntriesTest5_Recall}
    } else if (body._37ListAEntries_Trial1v2) {
      data = {_37ListAEntries_Trial1v2: body._37ListAEntries_Trial1v2};
    } else if (body._38ListAEntries_Trial2v2) {
      data = {_38ListAEntries_Trial2v2: body._38ListAEntries_Trial2v2}
    } else if (body._39ListAEntries_Trial3v2) {
      data = {_39ListAEntries_Trial3v2: body._39ListAEntries_Trial3v2}
    } else if (body._40ListAEntries_Trial4v2) {
      data = {_40ListAEntries_Trial4v2: body._40ListAEntries_Trial4v2}
    } else if (body._41ListAEntries_Trial5v2) {
      data = {_41ListAEntries_Trial5v2: body._41ListAEntries_Trial5v2}
    } else if (body._42ListBEntriesv2) {
      data = {_42ListBEntriesv2: body._42ListBEntriesv2}
    } else if (body._43ListAEntriesRecallv2) {
      data = {_43ListAEntriesRecallv2: body._43ListAEntriesRecallv2}
    } else if (body._64ListAEntriesTest5_Recallv2) {
      data = {_64ListAEntriesTest5_Recallv2: body._64ListAEntriesTest5_Recallv2}
    } else if (body._08Test2_Entry_1) {
      data = {_08Test2_Entry_1: body._08Test2_Entry_1}
    } else if (body._09Test2_Entry_2) {
      data = {_09Test2_Entry_2: body._09Test2_Entry_2}
    } else if (body._10Test2_Entry_3) {
      data = {_10Test2_Entry_3: body._10Test2_Entry_3}
    } else if (body._11Test2_Entry_4) {
      data = {_11Test2_Entry_4: body._11Test2_Entry_4}
    } else if (body._12Test2_Entry_5) {
      data = {_12Test2_Entry_5: body._12Test2_Entry_5}
    } else if (body._13Test2_Entry_6) {
      data = {_13Test2_Entry_6: body._13Test2_Entry_6}
    } else if (body._14Test2_Entry_7) {
      data = {_14Test2_Entry_7: body._14Test2_Entry_7}
    } else if (body._15Test2_Entry_8) {
      data = {_15Test2_Entry_8: body._15Test2_Entry_8}
    } else if (body._16Test2_Entry_9) {
      data = {_16Test2_Entry_9: body._16Test2_Entry_9}
    } else if (body._17Test2_Entry_10) {
      data = {_17Test2_Entry_10: body._17Test2_Entry_10}
    } else if (body._18Test2_Entry_11) {
      data = {_18Test2_Entry_11: body._18Test2_Entry_11}
    } else if (body._19Test2_Entry_12) {
      data = {_19Test2_Entry_12: body._19Test2_Entry_12}
    } else if (body._44Test2_Entry_1v2) {
      data = {_44Test2_Entry_1v2: body._44Test2_Entry_1v2}
    } else if (body._45Test2_Entry_2v2) {
      data = {_45Test2_Entry_2v2: body._45Test2_Entry_2v2}
    } else if (body._46Test2_Entry_3v2) {
      data = {_46Test2_Entry_3v2: body._46Test2_Entry_3v2}
    } else if (body._47Test2_Entry_4v2) {
      data = {_47Test2_Entry_4v2: body._47Test2_Entry_4v2}
    } else if (body._48Test2_Entry_5v2) {
      data = {_48Test2_Entry_5v2: body._48Test2_Entry_5v2}
    } else if (body._49Test2_Entry_6v2) {
      data = {_49Test2_Entry_6v2: body._49Test2_Entry_6v2}
    } else if (body._50Test2_Entry_7v2) {
      data = {_50Test2_Entry_7v2: body._50Test2_Entry_7v2}
    } else if (body._51Test2_Entry_8v2) {
      data = {_51Test2_Entry_8v2: body._51Test2_Entry_8v2}
    } else if (body._52Test2_Entry_9v2) {
      data = {_52Test2_Entry_9v2: body._52Test2_Entry_9v2}
    } else if (body._53Test2_Entry_10v2) {
      data = {_53Test2_Entry_10v2: body._53Test2_Entry_10v2}
    } else if (body._54Test2_Entry_11v2) {
      data = {_54Test2_Entry_11v2: body._54Test2_Entry_11v2}
    } else if (body._55Test2_Entry_12v2) {
      data = {_55Test2_Entry_12v2: body._55Test2_Entry_12v2}
    } else if (body._30Test2Recall_Entry_1) {
      data = {_30Test2Recall_Entry_1: body._30Test2Recall_Entry_1}
    } else if (body._31Test2Recall_Entry_2) {
      data = {_31Test2Recall_Entry_2: body._31Test2Recall_Entry_2}
    } else if (body._32Test2Recall_Entry_3) {
      data = {_32Test2Recall_Entry_3: body._32Test2Recall_Entry_3}
    } else if (body._66Test2Recall_Entry_1v2) {
      data = {_66Test2Recall_Entry_1v2: body._66Test2Recall_Entry_1v2}
    } else if (body._67Test2Recall_Entry_2v2) {
      data = {_67Test2Recall_Entry_2v2: body._67Test2Recall_Entry_2v2}
    } else if (body._68Test2Recall_Entry_3v2) {
      data = {_68Test2Recall_Entry_3v2: body._68Test2Recall_Entry_3v2}
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
      { $push : {_20Test3Images: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postRatingv2: (body, cb) => {
    console.log('Data :', body.obj)
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {_56Test3v2Images: data}}
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
      { $push : {_21Test3Images2: data}}
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
      { $push : {_57Test3v2Images2: data}}
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
      { $push : {_33Test3ImagesRecall: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postRating3v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {_69Test3ImagesRecallv2: data}}
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
      { $push : {_22Test4Section1: data}}
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
      { $push : {_58Test4Section1v2: data}}
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
      { $push : {_34Test4RecallSection1: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4RecallSect1v2: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {_70Test4RecallSection1v2: data}}
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
      { $push : {_23Test4Section2: data}}
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
      { $push : {_59Test4Section2v2: data}}
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
      { $push : {_35Test4RecallSection2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4RecallSect2v2: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {_71Test4RecallSection2v2: data}}
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
      { $push : {_24Test4Section3: data}}
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
      { $push : {_60Test4Section3v2: data}}
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
      { $push : {_36Test4RecallSection3: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest4RecallSect3v2: (body, cb) => {
    // let data = {letter: body.letter, response: body.response };
    let data = body.obj;
    // console.log('data :', data)
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {_72Test4RecallSection3v2: data}}
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
      { $push : {_25Test4Section4: data}}
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
      { $push : {_61Test4Section4v2: data}}
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
      { $push : {_26Test4Section5: data}}
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
      { $push : {_62Test4Section5v2: data}}
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
      { $push : {_27Test4Section6: data}}
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
      { $push : {_63Test4Section6v2: data}}
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
      { $push : {_29Test5Section2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
  postTest5Sect2v2: (body, cb) => {
    let data = body.obj;
    db.CognitiveTest.findOneAndUpdate(
      { _id : body._id },
      { $push : {_65Test5Section2v2: data}}
   )
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    })
  },
}

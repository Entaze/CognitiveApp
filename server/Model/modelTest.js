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
    }

    console.log('Body :', body)

    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    db.CognitiveTest.findOneAndUpdate({_id: body.id}, data, options)
      .then((result) => {
        cb(null, result);
      })
      .catch((err) => {
        cb(err);
      })
  },
}

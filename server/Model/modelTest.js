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
}

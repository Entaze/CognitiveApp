const { Profile } = require('../../db/db.js')

module.exports = {
  findProfile: (uid, _id, cb) => {
    if (uid) {
      Profile.find({uid})
        .then((result) => {
          cb(null, result[0])
        })
        .catch((err) => {
          cb(err);
        })
    }
    if (_id) {
      Profile.find({_id})
      .then((result) => {
        cb(null, result[0])
      })
      .catch((err) => {
        cb(err);
      })
    }
  },

  createProfile: (body, cb) => {
console.log('Body model :', body)


if (!body.test1Completion) {
      // console.log('Here in model 1 : ', body.test1Completion)
      Profile.findOneAndUpdate({uid: body.uid}, body, {upsert: true, new: true})
      .then(result => {
        cb(null, result)
      })
      .catch(err => cb(err));
    } else if (body.test1Completion) {
      //  console.log('Here in model 2 : ', body.test1Completion) ;
      let param = { test1Completion: body.test1Completion };
      Profile.updateOne({id: body.id}, {$set: param})
        .then(result => {
          cb(null, result)
          console.log(result)
        })
        .catch(err => cb(err));
    }
  },
}
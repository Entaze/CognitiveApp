const { Profile } = require('../../db/db.js')

module.exports = {
  findProfile: (uid, _id, cb) => {
    // console.log('Model getprofileAWbody uid :', uid)
    if (uid) {
      Profile.find({uid})
        .then((result) => {
          // console.log('Model get profile :', result);
          cb(null, result[0])
        })
        .catch((err) => {
          // console.log('Model get profile error:', err);
          cb(err);
        })
    }
    if (_id) {
      // console.log('Model getprofileAWbody _id:', _id)
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
    // console.log('Model createprofileAWbody:', body)
    Profile.findOneAndUpdate({uid: body.uid}, body, {upsert: true, new: true})
      .then(result => {
        // console.log('AWcreateprofileresultCL', result)
        cb(null, result)
      })
      .catch(err => cb(err));
  },
}
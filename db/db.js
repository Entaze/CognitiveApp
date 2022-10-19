const mongoose = require('mongoose')
const crypto = require("crypto")
const uuidv1 = require("uuid/v1")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  age: Number,
  gender: {
    type: String,
    enum : ['Female', 'Male', 'Other'],
    default: 'Female'
},
test1Completion: {
  type: Boolean,
  enum: [false, true],
  default: false
},
test2Completion: {
  type: Boolean,
  enum: [false, true],
  default: false
},
test3Completion: {
  type: Boolean,
  enum: [false, true],
  default: false
},
email: {
  type: String,
  trim: true,
  required: true,
  unique: true
},
resetLink : {
  data: String,
  default: ''
},
encry_password: {
  type: String,
  required: true
},
salt: String,
}, {timeStamps: true})

const testSchema = new mongoose.Schema({
  time: Date,
  ListAEntriesRecall: [],
  ListAEntries_Trial1: [],
  ListAEntries_Trial2: [],
  ListAEntries_Trial3: [],
  ListAEntries_Trial4: [],
  ListAEntries_Trial5: [],
  ListBEntries: [],
  Test2_Entry_1: [],
  Test2_Entry_2: [],
  Test2_Entry_3: [],
  Test2_Entry_4: [],
  Test2_Entry_5: [],
  Test2_Entry_6: [],
  Test2_Entry_7: [],
  Test2_Entry_8: [],
  Test2_Entry_9: [],
  Test2_Entry_10: [],
  Test2_Entry_11: [],
  Test2_Entry_12: [],

});

// const profileSchema = new mongoose.Schema({
//   name: String,
//   age: {
//     type: String,
//     enum : ['Youth','Adult', 'Senior'],
//     default: 'Adult'
// },
//   gender: {
//     type: String,
//     enum : ['Female', 'Male', 'Other'],
//     default: 'Female'
// },
// test1Completion: {
//   type: Boolean,
//   enum: [false, true],
//   default: false
// },
// test2Completion: {
//   type: Boolean,
//   enum: [false, true],
//   default: false
// },
//   imgUrl: String,
//   uid: String,
//   userCreated: Date,

//   email: {
//     type: String,
//     trim: true,
//     required: true,
//     unique: true
//   },
//   encry_password: {
//     type: String,
//     required: true
//   },
//   salt: String,
// });

userSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get((password) => {
    return this._password;
  })

userSchema.methods = {
  authenticate: function(plainPassword) {
    return this.securePassword(plainPassword) === this.encry_password;
  },

  securePassword: function(plainPassword) {
    if(!plainPassword) return "";

    try {
      return crypto.createHmac('sha256', this.salt).update(plainPassword).digest('hex');
    } catch (err) {
      return ""
    }
  }
}

const User = mongoose.model('User', userSchema, 'user');
const CognitiveTest = mongoose.model('CognitiveTest', testSchema, 'test');
// const Profile = mongoose.model('Profile', profileSchema, 'profile');

module.exports = { User, CognitiveTest };
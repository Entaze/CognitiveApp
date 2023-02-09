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

const test3SchemaSect1 = new mongoose.Schema({
  Image1: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image2: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image3: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image4: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image5: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image6: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image7: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image8: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image9: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image10: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image11: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image12: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image13: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image14: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image15: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image16: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image17: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image18: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image19: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image20: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image21: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image22: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image23: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image24: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image25: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image26: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image27: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image28: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image29: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image30: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image31: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image32: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image33: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image34: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image35: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image36: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image37: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image38: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image39: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image40: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image41: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image42: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image43: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image44: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image45: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image46: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image47: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image48: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image49: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image50: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image51: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image52: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image53: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image54: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image55: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image56: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image57: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image58: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image59: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image60: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image61: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image62: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image63: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image64: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image65: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image66: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image67: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image68: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image69: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image70: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image71: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image72: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image73: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image74: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image75: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image76: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image77: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image78: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image79: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image80: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image81: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image82: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image83: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image84: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image85: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image86: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image87: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image88: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image89: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image90: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image91: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image92: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image93: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image94: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image95: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image96: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image97: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image98: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image99: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image100: {src: String, NegativePositiveRating: 0, CalmExcitedRating: 0},

},
{timestamps: true}
);

const test3SchemaSect2 = new mongoose.Schema({
  Image1: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image2: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image3: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image4: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image5: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image6: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image7: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image8: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image9: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image10: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image11: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image12: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image13: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image14: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image15: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image16: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image17: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image18: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image19: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image20: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image21: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image22: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image23: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image24: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image25: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image26: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image27: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image28: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image29: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image30: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image31: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image32: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image33: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image34: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image35: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image36: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image37: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image38: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image39: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image40: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image41: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image42: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image43: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image44: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image45: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image46: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image47: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image48: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image49: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image50: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image51: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image52: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image53: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image54: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image55: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image56: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image57: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image58: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image59: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image60: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image61: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image62: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image63: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image64: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image65: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image66: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image67: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image68: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image69: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image70: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image71: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image72: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image73: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image74: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image75: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image76: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image77: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image78: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image79: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image80: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image81: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image82: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image83: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image84: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image85: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image86: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image87: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image88: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image89: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image90: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image91: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image92: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image93: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image94: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image95: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image96: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image97: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image98: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image99: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
  Image100: {src: String, YesNo: Boolean, NegativePositiveRating: 0, CalmExcitedRating: 0},
},
{timestamps: true}
);

const testSchema = new mongoose.Schema({
  time: Date,
  test1Completion: Boolean,
  test2Completion: Boolean,
  test3Completion: Boolean,
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
  Test3Images: [test3SchemaSect1],
  Test3Images2: [test3SchemaSect2],

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
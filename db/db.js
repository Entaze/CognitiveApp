const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  age: {
    type: String,
    enum : ['Youth','Adult', 'Senior'],
    default: 'Adult'
},
  gender: {
    type: String,
    enum : ['Female', 'Male'],
    default: 'Male'
},
  // tests: [],
  imgUrl: String,
  uid: String,
  userCreated: Date,
});

// const messageSchema = new mongoose.Schema({
//   body: String,
//   sender: String
// },
// {timestamps: true}
// );


// const chatSchema = new mongoose.Schema({
//   time: Date,
//   users: [],
//   messages: [messageSchema]
// });

const wordsSchema = new mongoose.Schema({
  body: String,
  userTested: String
}
);

const testSchema = new mongoose.Schema({
  time: Date,
  users: [],
  words: [],
});



const Profile = mongoose.model('Profile', profileSchema, 'profile');
const CognitiveTest = mongoose.model('CognitiveTest', testSchema, 'test');
const TestWords = mongoose.model('TestWords', wordsSchema, 'testwords');
// const Chat = mongoose.model('Chat', chatSchema, 'chat');

module.exports = { Profile, CognitiveTest, TestWords };
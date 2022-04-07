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
  imgUrl: String,
  uid: String,
});




const Profile = mongoose.model('Profile', profileSchema, 'profile');
// const Swipe = mongoose.model('Swipe', swipeSchema, 'swipe');
// const Chat = mongoose.model('Chat', chatSchema, 'chat');

module.exports = { Profile };
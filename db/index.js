const mongoose = require('mongoose');
//Lanch ec2 instance for Mongodb. Point mongoPath to Ec2 mongo schema
// const mongoPath = require('./dbconfig.js');
mongoose.connect('mongodb+srv://moadmin:chewychewy@cluster0.bnaep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true,
  useUnifiedTopology: true});





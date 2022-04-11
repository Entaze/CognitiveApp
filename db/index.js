const mongoose = require('mongoose');
// Lanch ec2 instance for Mongodb.
// I launched Mongo atlas instead instead of AWS for mongodb. Point mongoPath to Ec2 mongo schema
// const mongoPath = require('./dbconfig.js');
// mongoose.connect(mongoPath, {useNewUrlParser: true,
//   useUnifiedTopology: true});

  //Uncomment below and comment both above to use monogdb atlas remote server.
  mongoose.connect('mongodb+srv://moadmin:chewychewy@cluster0.bnaep.mongodb.net/cogniapp?retryWrites=true&w=majority', {useNewUrlParser: true,
  useUnifiedTopology: true});


  // mongoose.connect('mongodb://admin:chewychewy@3.89.88.250:27017/cogniapp', {useNewUrlParser: true,
  // useUnifiedTopology: true});





const mongoose = require('mongoose');
//Lanch ec2 instance for Mongodb. Point mongoPath to Ec2 mongo schema
// const mongoPath = require('./dbconfig.js');
mongoose.connect('mongodb://admin:Thanmolef10305@18.212.159.116:27017/pupper', {useNewUrlParser: true,
  useUnifiedTopology: true});





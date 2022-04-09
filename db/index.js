const mongoose = require('mongoose');
//Lanch ec2 instance for Mongodb. Point mongoPath to Ec2 mongo schema
// const mongoPath = require('./dbconfig.js');
mongoose.connect('mongodb://moadmin:chewychewy@mongodb/cogniapp?directConnection=true', {useNewUrlParser: true,
  useUnifiedTopology: true});





// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserDetails={
  Email: {type:String},
  Phone:{type:Number},
  Password: {type:Schema.Types.Mixed},
  FirstName: {type:String},
  LastName: {type:String},
  DateOfBirth: {type:Schema.Types.Mixed},
  Gender: {type:String},
  Address: [{type:Schema.Types.Mixed}],
  City: {type:String},
  State: {type:String},
  Pin: {type:Number}
}

const UsersData = mongoose.model('usersData', UserDetails)

module.exports = UsersData;
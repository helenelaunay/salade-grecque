const mongoose = require('mongoose');
const db = require('../dataBase/connect')
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }, 
    connexionToken : {
      type: String , 
      require : false
    } 
  });
  const user = db.model('User', UserSchema);
  module.exports = user
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String , maxLength:255},
    description: { type: String, maxLength:600},
    image: {type: String, maxLength:255},
    craetedAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    slug:{type:String,maxLength:255},
    idvideo: {type:String, maxLength:255},
  });

  module.exports = mongoose.model('Course',Course);
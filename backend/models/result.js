const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  full_name: String,
  email: String,
  course_name: String,
  score: String,
  Remark: String
},
{ timestamps: true });

const Result = mongoose.model('Result', ResultSchema);

module.exports=Result;
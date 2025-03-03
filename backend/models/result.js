const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  candidate_name: String,
  email: String,
  course_name: String,
  total_score: Number,
  percentage_score: String,
  Remark: String
},
{ timestamps: true });

const Result = mongoose.model('Result', ResultSchema);

module.exports=Result;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  course_name: String,
  question: String,
  option: [String],
  correct: String
},
{ timestamps: true });

const Question = mongoose.model('Question', QuestionSchema);

module.exports=Question;
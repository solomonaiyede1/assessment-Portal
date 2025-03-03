const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AssessmentSchema = new Schema({
  full_name: String,
  email: String,
  phone: String,
  password: String,
  role: String,
},
{ timestamps: true }
);

const Assessment = mongoose.model('Assessment', AssessmentSchema);

module.exports=Assessment;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  course_name: String,
  date: Date
},
{ timestamps: true });

const Courses = mongoose.model('Course', CourseSchema);

module.exports=Courses;
const express= require('express')
const router= express.Router();
const Assessment= require('../models/register')
const Courses= require('../models/courses')
const Question= require('../models/question')
const Result= require('../models/result')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var morgan = require('morgan');
var bodyParser = require('body-parser')
require('dotenv').config();

const app=express()


router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function(req, res){
    res.render('index');
})

router.get('/register', function(req, res){
    Assessment.find()
    .then(response=> res.json(response))

})


router.post('/register', async function(req, res){
    const { full_name, email, phone, password}= req.body
    if(password.length<8){
        res.json({error: "Password must be longer than 7 characters in length"})
        return false;
    }
    const role ="user"
    const user= await Assessment.findOne({email: email})
    if(user){
        res.json({error: "This email has been used before"})
        return false;
    }

        bcrypt.hash(password, 10, function(err, password){
        if(err){
            console.log("error occured")
        }
        else{
             var assessment= new Assessment({full_name, email, phone, password, role})
            assessment.save();
            res.status(201).json({ message: "You have successfully registered"});
        }
    
    });

})


router.post("/result", async (req, res) => {

    const { full_name, score } = req.body
    
    try{
        const result = new Result({ full_name, score });
        await result.save();
        res.status(201).json({ message: "Score saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  });
  






router.post('/login',  async function(req, res){
    const { email, password } = req.body;
    const user= await Assessment.findOne({email: email})
    console.log(req.body)
    if(!user){
        res.json({message: "Invalid credentials"})
        console.log("Invalid credentials")
    }else{
        const check= await bcrypt.compare(password, user.password)
        if(check){
            req.session.full_name= user.full_name
            req.session.email= user.email
            req.session.role= user.role
            req.session.save()
            res.json({full_name: req.session.full_name, email: req.session.email, role: user.role})
           
        }
        if(!check){
            res.json({message: "Incorrect password"})
            console.log("Incorrect password")
        }
    }

})

router.get("/test", (req, res) => {
    res.json({message: req.session.full_name, email: req.session.email, role: req.session.role})
  });


router.get('/course', function(req, res){
    var course= Courses.find()
    .then(response=> res.json(response))

})


router.post('/course', function(req, res){
    const course = new Courses(req.body);
    course.save();
})

router.get('/question', function(req, res){
    const id= req.params.id
    Question.find().sort({course_name: 1})
    .then(response => res.json(response))
})

router.get('/question/:id?', function(req, res){
    const id= req.params.id
    // const total_question= Question.find({course_id : id})
    Question.find({course_id : id}).sort({course_name: 1})
    .then(response => res.json(response))

})


router.post('/question', function(req, res){
    const { course_name, question, correct, option}= req.body
    const sentence = option;
    const opt = sentence.split(",").map(item => item.trim()); // Trim to remove extra spaces
    quest= new Question({
        course_name: course_name,
        question: question,
        correct: correct,
        option: opt
    });
    quest.save();


})


router.get("/logout", (req, res) => {
  req.session.destroy()
  res.json({message: "You have successfully logged out"})
});






module.exports= router
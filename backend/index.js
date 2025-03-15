const express= require('express')
const path= require('path')
const router= require('./routes/home-route')
const mongoose = require('mongoose');
const cors= require('cors')
const session= require('express-session')

const app= express()

var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true // Allow cookies to be sent
  };
  
app.use(cors(corsOptions));


app.use(
  session({
      secret: 'your_secret_key', // Change this for security
      resave: false,
      saveUninitialized: true,
      cookie: { 
          secure: false, 
          httpOnly: true, 
          maxAge: 1000 * 60 * 60 * 2 // Expires in 2 hours
      } 
  })
);



mongoose.connect('mongodb://127.0.0.1:27017/birotojob')
  // .then(() => console.log('Connected!'))
  // .catch(()=> console.log("not connected"));



app.use(express.static(path.join(__dirname, './public')));
app.set('view engine', 'ejs');

app.use('/', router)


app.listen(3001, function(){
    console.log("App running on port 3001")
})
import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Sidebar from './sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CountdownTimer from './countdown-time';
import { useParams } from 'react-router';

function Assessment() {

  const [result, setResult]= useState([])
  const [checkedCount, setCheckedCount] = useState(0)
  const [total, setTotal] = useState("")
  const [show, setShow] = useState(true)
  var [correctCount, setCorrectCount] = useState(0)
  var [score, setScore]= useState(null)
   // Logout starts here 
   const [user, setUser]= useState(null)
   const [email, setEmail]= useState(null)

   const navigate= useNavigate();
   axios.defaults.withCredentials = true;
   useEffect(()=>{
     axios.get('http://localhost:3001/test')
     .then((response) => {
         if(response.data.message){
             setUser(response.data.message)
             setEmail(response.data.email)
         }else{
             navigate('/')
         }
     })
     .catch(error=> console.log(error))
   }, [])
   // Logout ends here

  
  const param= useParams()
    useEffect(()=>{
      axios.get(`http://localhost:3001/question/${param.id}`)
      .then((response) =>{
        setResult(response.data); setTotal(response.data.total)
      })
      .catch(error=> console.log(error))
    }, [])

    const handlersubmit = (event) => {
      event.preventDefault();
      const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');
  
      setCheckedCount(selectedRadios.length);
  
      // let correctCount = 0;
  
      selectedRadios.forEach((radio) => {
          const questionId = radio.name.split("-")[1]; // Extract question ID from input name
          const selectedAnswer = radio.value;
  
          // Find the corresponding question in result
          const question = result.find(q => q._id === questionId);
          if (question && selectedAnswer === question.correct) {
              correctCount++;
          }
      });
  
      setCorrectCount(correctCount);

      const scoreData = {
        full_name: user,
        email: email,
        score: (correctCount / total_question) * 100,
      };
    
      const response = axios.post("http://localhost:3001/result", scoreData)
      .then(response=> alert(response.data.message))
      . catch(error => alert("there is error submitting your test score"))

  };




    const handler= ()=>{
      setShow(!show)
    }

var total_question
  return (
     <Container fluid>
              <Row style={{paddingTop: "20px", boxShadow: "10px 10px 10px rgba(0,0,0,0.1)", height: "70px"}}>
        <Col md={12}>
            <div className="logo"  style={{float: "left"}}>
                <img src="../logo_biro.jpeg" className="rounded-circle" style={{width: "30px", height: "auto"}} alt="image here" />
                &nbsp;&nbsp;<span style={{fontWeight: 700}}> Assessment Portal</span>
            </div>
            <div className="user" style={{float: "right"}}>
            <Button onClick={handler} className="btn btn-light" id="bar">
            <i className="fa fa-bars" aria-hidden="true" style={{fontSize: "24px"}}></i>
            </Button>
            </div>
        </Col>
      </Row>

          <Row>
          <Col md={2} className="header" >
                { show ? <Sidebar /> : "" }
            </Col>
            <Col md={8} style={{display: "flex", flexDirection: "row", paddingTop: "20px", justifyContent:"space-around"}}><br/><br/>
              <Row>
                <Col md={12}>
                  <div>
                      <h6><b>Instructions: Answer all questions below within the time frame given by your instructions</b></h6>
                      <b>Time: 30mins</b>: Time starts now: <CountdownTimer /><br></br>
                      <b>Total Question(s):</b> {total_question= result.length }<hr></hr>
                    </div>
                    <div>
                      <form onSubmit={handlersubmit}>
                      <ol style={{lineHeight: "2.0"}}>
                      
                          {result.map(res =>
                              <li><b>{res.question}</b>
                              {res.option.map((item, index) => (
                                  <div key={index}>
                                      <input type="radio" name= {`answer-${res._id}`} value={item}  />
                                      {item}
                                  </div>
                              ))}
                              </li>
                            )}
                      </ol>

                      <p>Total questions answered is {checkedCount}</p>
                         <p>Total correct questions answered is {correctCount}</p>
                         <p>Score {score=(correctCount/total_question)*100}%</p>

                      <center>
                          <div className="mx-auto"><Button type="submit" className="btn btn-primary btn-lg">Submit</Button></div>
                          </center>
                      </form>

                    </div>
                </Col>
              </Row>
           
            </Col>
            
        </Row>
    </Container>
  );
}

export default Assessment;

var list={
  textDecoration: "none",
  listStyleType: "none",
  color: "black",
  fontFamily: "Trebuchet MS",
  fontSize: "16px",
  fontWeight: "400"

}

var ulist={
  listStyleType: "none",
  marginTop: "20px"
}
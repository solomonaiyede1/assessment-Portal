import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import  { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar'
import Header from './header'
import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Dashboard() {
  const [show, setShow] = useState(true)
  const [user, setUser]= useState(null)

  const navigate= useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3001/test')
    .then((response) => {
        if(response.data.message){
            setUser(response.data.message)
        }else{
            navigate('/')
        }
    })
    .catch(error=> console.log(error))
  }, [])



  const handler= ()=>{
    setShow(!show)
  }
  return (
        <Container fluid>
              <Row style={{paddingTop: "20px", boxShadow: "10px 10px 10px rgba(0,0,0,0.1)", height: "70px"}}>
        <Col md={12}>
            <div className="logo"  style={{float: "left"}}>
                <img src="logo_biro.jpeg" className="rounded-circle" style={{width: "30px", height: "auto"}} alt="image here" />
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
            <Col md={8} >
                <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", paddingTop: "20px", justifyContent:"space-around"}}>
            <div className='mx-auto alert alert-info' style={{width: "100%", height: "50px", fontSize: "20px", fontFamily: "calibri"}}>
                Welcome {user} to Birotojob Assessment Portal 
                </div>

                <Card className="bg-primary" style={{ width: '18rem', height: '10rem', boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Title style={{fontSize: "30px"}}><a href="/taketest" style={{textDecoration: "none", color: "white"}}>Take Test</a></Card.Title>
                            {/* <Card.Text>
                                Test Taken
                            </Card.Text> */}
                        </Card.Body>
                </Card>

                <Card className="bg-primary" style={{ width: '18rem', height: '10rem', boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Title style={{fontSize: "30px"}}><a href="/resources" style={{textDecoration: "none", color: "white"}}>Assess Resources</a></Card.Title>
                            {/* <Card.Text>
                                Test Scheduled
                            </Card.Text> */}
                        </Card.Body>
                </Card>

                <Card className="bg-primary" style={{ width: '18rem', height: '10rem' , boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Title style={{fontSize: "30px"}}><a href="/help" style={{textDecoration: "none", color: "white"}}>Visit Help Center</a></Card.Title>
                            {/* <Card.Text>
                                Score
                            </Card.Text> */}
                        </Card.Body>
                </Card><br></br><br></br>
                <div className="alert alert-light">
                    <center><h3>Assessment Tips for Portal Dashboard</h3></center>
                    <ol style={{textAlign: "justify", fontSize: "20px"}}>
                        <li>. Review Instructions Carefully
                        📌 Before starting any assessment, read all provided guidelines to understand the structure, time limit, and scoring criteria.</li>
                        <li>. Check Your System Requirements
                            🔹 Ensure your device is compatible with the portal (browser, internet speed, and necessary plugins).
                            🔹 Use a stable internet connection to avoid disruptions.</li>
                        <li>. Manage Your Time Wisely
                        ⏳ Keep an eye on the timer, if applicable.
                        📝 Plan your time per section to ensure you complete all questions before the deadline.</li>
                        <li>. Verify Your Answers Before Submission
                        🔍 Double-check responses, especially in objective and essay-type questions.
                        🔄 If editing is allowed, review your work before submitting.</li>
                        <li>. Follow the Integrity Policy
                        ⚖️ Do not attempt cheating, copying, or using unauthorized materials. Violations may result in disqualification.</li>
                        <li>. Submit Before the Deadline
                        ✅ Make sure you finalize and submit your assessment well before the time expires to avoid last-minute issues.</li>

                    </ol>
                </div>
                </div>
            </Col>

        </Row>
    </Container>
  );
}

export default Dashboard;

var list={
  textDecoration: "none",
  listStyleType: "none",
  fontFamily: "Trebuchet MS",
  fontSize: "16px",
  fontWeight: "400"

}

var ulist={
  listStyleType: "none",
  marginTop: "20px"
}

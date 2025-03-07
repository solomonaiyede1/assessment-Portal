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
                {/* <ul style={{listStyleType: "none"}} id="user">
                    <li><i class="fa fa-bell" ></i> &nbsp;&nbsp;<i class="fa fa-user-circle-o" style={{fontSize: "18px"}}></i></li>
                </ul> */}
            </div>
        </Col>
      </Row>

          <Row>
          <Col md={2} className="header" >
                { show ? <Sidebar /> : "" }
            </Col>
            <Col md={8} style={{display: "flex", flexDirection: "row", paddingTop: "20px", justifyContent:"space-around"}}>
                <p>Welcome  {user} </p>

                <Card style={{ width: '18rem', height: '10rem', boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Title style={{fontSize: "30px", fontWeight: "700"}}>0</Card.Title>
                            <Card.Text>
                                Test Taken
                            </Card.Text>
                        </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: '10rem', boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Title style={{fontSize: "30px", fontWeight: "700"}}>6</Card.Title>
                            <Card.Text>
                                Test Scheduled
                            </Card.Text>
                        </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: '10rem' , boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
                        <Card.Body style={{textAlign: "center"}}>
                            <Card.Title style={{fontSize: "30px", fontWeight: "700"}}>0</Card.Title>
                            <Card.Text>
                                Score
                            </Card.Text>
                        </Card.Body>
                </Card><br></br>
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

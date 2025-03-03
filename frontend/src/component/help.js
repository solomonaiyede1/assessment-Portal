import {Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Sidebar from './sidebar'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Help() {

   // Logout starts here 
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
   // Logout ends here
   
  return (
    <Container fluid>
        <Row style={{paddingTop: "20px", boxShadow: "10px 10px 10px rgba(0,0,0,0.1)", height: "70px"}}>
            <Col md={3}>
            <img src="logo_biro.jpeg" className="rounded-circle" style={{width: "30px", height: "auto"}} alt="image here" />
            &nbsp;&nbsp;<span style={{fontWeight: 700}}>Birotojob Assessment Portal</span>
            </Col>
            <Col md={9}>
            <div style={{fontSize: "18px", float: "right", marginRight: "30px"}}>
              <i class="fa fa-bell" ></i> &nbsp;&nbsp;<i class="fa fa-user-circle-o" style={{fontSize: "18px"}}></i>
            </div>
            </Col>
          </Row>
          <Row>
          <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={8} style={{display: "flex", flexDirection: "row", paddingTop: "20px"}}><br/><br/>
                <Card style={{ width: '100%', boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }} className="mx-auto">
                        <Card.Body >
                            <Card.Title style={{fontSize: "30px", fontWeight: "700"}}>Frequently Asked Question</Card.Title>
                            <Card.Text style={{fontSize: "20px", lineHeight: "1.9", textAlign: 'justify'}}>
                              <h4>Help Menu</h4>
                              <ol>
                                <li>Getting Started:<br></br>
                                Creating an Account
                                Logging In & Out
                                Resetting Your Password
                                Updating Profile Information
                                </li>
                               
                                <li>Navigating the Platform
                                Dashboard Overview
                                Using the Navigation Menu
                                Customizing Your Preferences
                                </li>
                                <li>Managing Your Account
                                Changing Password
                                Setting Up Two-Factor Authentication
                                Deactivating or Deleting Your Account
                                </li>

                                <li>Features & Tools
                                How to Use the Search Function
                                Uploading & Managing Files
                                Notifications & Alerts
                                Keyboard Shortcuts
                                </li>
                                <li>Troubleshooting & FAQs
                                Why Can’t I Log In?
                                Fixing Page Load Issues
                                Resolving Payment Issues
                                Clearing Cache & Cookies
                                </li>
                                <li> Contact Support
                                Live Chat
                                Submit a Ticket
                                Email Support
                                Phone Support
                                </li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Help;

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
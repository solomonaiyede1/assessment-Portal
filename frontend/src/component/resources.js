import {Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Sidebar from './sidebar'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Resources() {

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
            <Col md={8} style={{display: "flex", flexDirection: "row", paddingTop: "20px", justifyContent:"space-around"}}><br/><br/>
                <Card style={{ width: '100%'}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: "30px", fontWeight: "700"}}>Resources and Library</Card.Title>
                            <Card.Text style={{fontSize: "20px", lineHeight: "1.9"}}>
                              <ol>
                                <li>Documentation & Guides
                              User Manual – Learn how to use the platform.
                              Getting Started Guide – A step-by-step introduction.
                              API Documentation – For developers integrating with our services.
                              Best Practices – Tips for maximizing efficiency.</li> 
                              <li> Learning Center
                              Tutorials & How-To Videos – Watch instructional content.
                              Webinars & Live Sessions – Join expert-led discussions.
                              Case Studies – Learn from real-world use cases.
                              Blog & Articles – Stay updated with the latest insights.</li> 
                              <li> Community & Support
                              User Forum – Connect with other users and share experiences.
                              FAQs – Find answers to common questions.
                              Help Center – Browse troubleshooting guides.
                              Contact Support – Get help from our team.</li> 
                              <li> Downloads & Tools
                              Mobile App – Download our iOS and Android app.
                              Software Updates – Get the latest version of our tools.
                              Templates & Resources – Free assets to improve productivity.
                              Browser Extensions – Enhance your experience with add-ons.</li> 
                              <li> Policies & Legal
                              Terms of Service – Review the platform’s rules.
                              Privacy Policy – Understand how your data is used.
                              Security Guidelines – Learn how we protect your information.
                              Compliance & Certifications – View industry compliance details.</li> 
                              </ol>
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Resources;

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
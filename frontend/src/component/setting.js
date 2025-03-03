import {Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Sidebar from './sidebar'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Setting() {
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
                <Card style={{ width: '100%', boxShadow: "10px 10px 10px rgba(0,0,0,0.1)" }}>
                        <Card.Body>
                            <Card.Title style={{fontSize: "30px", fontWeight: "700"}}>Settings Menu</Card.Title>
                            <Card.Text style={{fontSize: "20px", lineHeight: "1.9", textAlign: 'justify'}}>
                            <ol>
                                <li>Account Settings
                                Profile Information – Update your name, email, and profile picture.
                                Change Password – Update or reset your password securely.
                                Two-Factor Authentication (2FA) – Enable/disable 2FA for extra security.
                                Connected Devices – Manage and log out of devices accessing your account.
                                Delete Account – Permanently delete your account.</li>
                                <li>Privacy & Security
                                Privacy Preferences – Control who can see your profile and activity.
                                Data Sharing & Permissions – Manage third-party app access.
                                Session History – View and manage active sessions.
                                Blocked Users – See and manage your blocked users list.</li>
                                <li>Notification Settings
                                Email Notifications – Enable/disable email alerts for updates.
                                Push Notifications – Manage mobile and browser notifications.
                                SMS Alerts – Choose whether to receive SMS notifications.
                                Activity Alerts – Get notified about account logins and changes.</li>
                                <li>Appearance & Customization
                                Dark Mode / Light Mode – Toggle between themes.
                                Language Preferences – Select your preferred language.
                                Font & Text Size – Adjust text visibility for accessibility.
                                Dashboard Layout – Customize how your homepage looks.</li>
                                <li>Payment & Subscription
                                Billing Information – Update your payment methods.
                                Subscription Plans – Upgrade, downgrade, or cancel your subscription.
                                Transaction History – View past purchases and invoices.
                                Auto-Renewal – Enable/disable automatic billing.</li>
                                <li>Integrations & Apps
                                Connected Accounts – Link social media or third-party logins.
                                API Keys & Access Tokens – Manage developer API settings.
                                Webhooks & Notifications – Set up real-time updates for integrations.</li>
                                <li>Help & Support
                                Report an Issue – Submit bugs or technical problems.
                                FAQs & Knowledge Base – Find answers to common questions.
                                Contact Support – Live chat, email, or phone support.</li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Setting;

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
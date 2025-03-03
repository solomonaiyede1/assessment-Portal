import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import '../App.css'

function Header() {
    const click= ()=>{
        alert("Very good");
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
            <Button onClick={click} className="btn btn-light" id="bar">
            <i className="fa fa-bars" aria-hidden="true" style={{fontSize: "24px"}}></i>
            </Button>
                <ul style={{listStyleType: "none"}} id="user">
                    <li><i class="fa fa-bell" ></i> &nbsp;&nbsp;<i class="fa fa-user-circle-o" style={{fontSize: "18px"}}></i></li>
                </ul>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
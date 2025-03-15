import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import Sidebar from './sidebar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Taketest() {

  const [show, setShow] = useState(true)
  const [course, setCourse]= useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001/course')
      .then((response) =>{
        setCourse(response.data); console.log(response.data)
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
          <Col md={2} style={{position: "relative", zIndex: "10"}}>
          { show ? <Sidebar /> : "" }
            </Col>
            <Col md={8}>
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", paddingTop: "20px"}}>
            <div className='alert alert-info' style={{width: "100%", height: "50px", fontSize: "20px", fontFamily: "calibri"}}>
                Select Course Options below: 
                </div>

                      <h6><b>Instructions: Select your course below</b></h6>
                      <b>Note: You are allowed to Select only one course at a time. Clicking course indicate that you start immediately</b><br></br>
                      <span style={{lineHeight: "2.0"}}>
                          {course.map(res =>
                              <p style={{lineHeight: "2.0"}}>
                              <input type="radio" name="{res.course_name}" value="res.course_name" />
                                  {res.course_name}
                                  <Link to={`/assessment/${res._id}`} className="btn btn-link btn-sm">
                                  choose test course and start</Link>
                              </p>
                            )}
                      </span>
                    </div>
                </Col>
              </Row>
    </Container>
  );
}

export default Taketest;

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
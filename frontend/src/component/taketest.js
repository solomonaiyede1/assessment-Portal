import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import Sidebar from './sidebar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Taketest() {

  const [course, setCourse]= useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001/course')
      .then((response) =>{
        setCourse(response.data); console.log(response.data)
      })
      .catch(error=> console.log(error))
    }, [])

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
              <Row>
                <Col md={12}>
                      <h6><b>Instructions: Select your course below</b></h6>
                      <b>Note:</b>: You are allowed to Select only one course at a time. Clicking course indicate that you start immediately<br></br>
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
                </Col>
              </Row>
           
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
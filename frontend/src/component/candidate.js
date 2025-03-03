import {Container, Row, Col, Card, Button, Table, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'

function Candidate() {

      const [result, setResult]= useState([])

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



      useEffect(()=>{
        axios.get('http://localhost:3001/register')
        .then(response => setResult(response.data))
        .catch(error=> console.log(error))
      }, [])

  return(
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

            <Col md={6} style={{paddingTop: "20px"}}><br/>
                  <Alert className='bg-info' style={{color: "white", width: "50vw"}}>View Candidate Information Below</Alert>
                 <Table striped bordered hover>
                    <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Password</th>
                            <th>Role</th>
                          </tr>
                        </thead>
                        <tbody>
                        {result.map((res) => {
                         return <tr>
                          <td>{res._id}</td>
                          <td>{res.full_name}</td>
                          <td>{res.email}</td>
                          <td>{res.phone}</td>
                          <td>{res.password}</td>
                          <td>{res.role}</td>
                          </tr>
                        }
                        )}
                        </tbody>
                 </Table>
            </Col>


          </Row>
      </Container>
  );
}

export default Candidate;

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
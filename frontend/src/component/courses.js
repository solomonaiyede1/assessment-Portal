import {Container, Row, Col, Card, Button, Table, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'

function Courses() {
      const [data, setData]= useState({
        course_name: ''
      })


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



      const [result, setResult]= useState([])

      const handler = (event)=>{
          setData({...data, [event.target.name]: event.target.value})
      }

      const handlersub=(event)=>{
          axios.post('http://localhost:3001/course', data)
          .then(response=> console.log(response))
          .catch(error=> console.log("Error occurred" + error))
      }

      useEffect(()=>{
        axios.get('http://localhost:3001/course')
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
          <Col md={6} style={{paddingTop: "20px"}}><br/><br/>
                 <form onSubmit={handlersub} class="col-md-6 mx-auto">
                    <div style={{padding: "10px"}}>
                        <input type="text" onChange={handler} className="form-control" name="course_name" placeholder="Enter Course Name" required />
                    </div>
                    <div>
                        <center>
                        <Button type="submit" className="col-md-3 btn btn-primary" style={{width: '50%'}}>
                            create course
                        </Button>
                        </center>
                    </div>
                </form><br/>
            </Col>

            <Col md={4} style={{paddingTop: "20px"}}><br/><br/>
                  <Alert className='bg-primary' style={{color: "white"}}>View Courses below</Alert>
                 <Table striped bordered hover>
                    <thead>
                          <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {result.map((res) => {
                         return <tr>
                          <td>{res._id}</td>
                          <td>{res.course_name}</td>
                          <td><Button variant="primary" className="btn btn-sm"><i class="fa fa-trash"></i></Button></td>
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

export default Courses;

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
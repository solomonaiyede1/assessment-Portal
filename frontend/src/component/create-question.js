import {Container, Row, Col, Card, Button, Alert, Modal, Table} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'

function Question() {
  const [show, setShow] = useState(false);

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

      const [data, setData]= useState({
        question: '',
        option: '',
        correct: ''
        })

        const [result, setResult]= useState([])
        const [course, setCourse]= useState([])

      const handler = (event)=>{
          setData({...data, [event.target.name]: event.target.value})
      }

      const handlersub=(event)=>{
          console.log(data)
          axios.post('http://localhost:3001/question', data)
          .then(response=> console.log(response))
          .catch(error=> console.log("Error occurred" + error))
      }

      useEffect(()=>{
        axios.get('http://localhost:3001/question')
        .then(response => setResult(response.data))
        .catch(error=> console.log(error))
      }, [])

      useEffect(()=>{
        axios.get('http://localhost:3001/course')
        .then(response => setCourse(response.data))
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

            <Col md={8} style={{paddingTop: "20px"}}><br/><br/>
                  <Alert className='bg-info' style={{color: "white"}}>View Courses below
                    <Button variant="primary" className="btn btn-sm" onClick={handleShow} style={{height: "50px"}}>
                      Create Questions here
                    </Button>
                  </Alert>
                 <Table striped bordered hover>
                    <thead>
                          <tr>
                            <th>ID</th>
                            <th>Course</th>
                            <th>Questions</th>
                            <th>Options</th>
                            <th>correct Answer</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                        {result.map((res) => {
                         return <tr>
                          <td>{res._id}</td>
                          <td>{res.course_name}</td>
                          <td>{res.question}</td>
                          <td>{res.option}</td>
                          <td>{res.correct}</td>
                          <td><Button variant="primary" className="btn btn-sm"><i class="fa fa-trash"></i></Button></td>
                          </tr>
                        }
                        )}
                        </tbody>
                 </Table>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Questions in the fields below</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handlersub} className="col-md-8 mx-auto">
                <div><Alert className="bg-primary text-white">Enter Your Questions below</Alert></div>
                    <div style={{padding: "10px"}}>
                        <select onChange={handler} className="form-control" name="course_name" placeholder="Enter Question" required>
                          <option value=""> -- select courses -- </option>
                          {course.map((courses)=>{
                            return <option value={courses._id + " " + courses.course_name}>{courses.course_name}</option>
                          })}
                          
                        </select>
                    </div>

                    <div style={{padding: "10px"}}>
                        <textarea onChange={handler} className="form-control" name="question" placeholder="Enter Question" required>
                        </textarea>
                    </div>
                    <div style={{padding: "10px"}}>
                      <label>Enter options seperated with comma</label>
                        <input type="text" onChange={handler} className="form-control" name="option" placeholder="option1, option2, option3..." required />
                    </div>
                    <div style={{padding: "10px"}}>
                      <label>select the current option</label>
                        <select onChange={handler} className="form-control" name="correct" required >
                          <option value="0">First Option</option>
                          <option value="1">Second Option</option>
                          <option value="2">Third Option</option>
                          <option value="3">Fourth Option</option>
                        </select>
                    </div>
                    <div>
                        <center>
                           <Button type="submit" variant="primary" style={{height: "40px"}}>
                              Save Question
                            </Button>
                        </center>
                    </div>
                </form><br/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

            </Col>
        </Row>
    </Container>
  );
}

export default Question;

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
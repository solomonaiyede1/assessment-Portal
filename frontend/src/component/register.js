import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import Slider from './carousel';
import { useNavigate } from 'react-router';
import { GoogleLogin } from '@react-oauth/google';

function Register() {

        const [data, setData]= useState({
            full_name: '',
            email: '',
            phone: '',
            role: '',
            password: ''
        })

        const navigate= useNavigate()
        const [ error, setError ] = useState("")

        const handlestate=(event)=>{
            setData({...data, [event.target.name]: event.target.value})
        }

        const onsubmithandler= (event)=>{
            event.preventDefault();
            axios.post('http://localhost:3001/register', data)
            .then((response)=> {
                if(response.data.error){
                    setError(response.data.error)
                }else{
                    navigate('/')
                }
            }
            )
            .catch(error=> console.log("There is an error"+ error))
        }

  return (
    <Container>
        <Row style={{paddingTop: "30px"}}>
            <Col md={5} style={{margin: "auto"}}>
            <Slider />
            </Col>
            <Col md={5} style={{marginLeft: "auto"}}>
                <h5 style={{fontFamily: "Trebuchet MS", fontWeight: 700, fontSize: "25px;", textAlign: 'center'}}>
                    Create your account
                </h5>
                <center style={{fontFamily: "Trebuchet MS", fontWeight: 400, fontSize: "18px;"}}>
                    Please, enter your details to get started
                    <h6 style={{color: "red"}}>{error}</h6>
                </center>
                <form onSubmit={onsubmithandler}>
                    <div style={{padding: "10px"}}>
                        <input type="text" id="full_name" onChange={handlestate} className="form-control" name="full_name" placeholder="First Name" required />
                    </div>
                    <div style={{padding: "10px"}}>
                        <input type="email" id="email" onChange={handlestate} className="form-control" name="email" placeholder="Email" required />
                    </div>
                    <div style={{padding: "10px"}}>
                        <input type="text" id="phone" onChange={handlestate} className="form-control" name="phone" placeholder="Phone number" required />
                    </div>

                    <div style={{padding: "10px"}}>
                        <input type="hidden" id="role" onChange={handlestate} className="form-control" name="role" value="user" required />
                    </div>

                    <div style={{padding: "10px"}}>
                        <input type="password" id="password" onChange={handlestate} className="form-control" name="password" placeholder="Password" required />
                    </div>

                    <div style={{padding: "10px"}}>
                        <input type="checkbox" id="agree" required/> I agree to the Terms of use and Privacy Policy
                    </div>
                    
                    <div>
                        <center>
                        <Button type="submit" className="btn form-control" style={{width: '50%', backgroundColor: "transparent", color: "black"}}>
                            Sign Up
                        </Button>
                        </center>
                    </div>
                </form><br/>
                <center>Already have an account? <Link to="/">Login</Link>
                    </center><hr/>
                <center>Or</center>
                <center>
                    {/* <Button className="btn rounded-4" style={{backgroundColor: "transparent", color: "black"}}>
                    <img src="Google.png" style={{width: "30px", height: "auto"}} alt="image here" />
                        Sign Up with google
                    </Button> */}
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </center>
            </Col>
        </Row>
    </Container>
  );
}

export default Register;

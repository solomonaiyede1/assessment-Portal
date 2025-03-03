import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import axios from 'axios'
import { useState } from 'react';
import Slider from './carousel';
import  { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'


function Login() {

    const [data, setData]= useState({
        email: '',
        password: ''
    })

    const [ error, setError ] = useState("")

    const handler=(event)=>{
        setData({...data, [event.target.name]: event.target.value})
    }

    const navigate= useNavigate();
    axios.defaults.withCredentials = true;
    const handlersubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/login', data)
        .then((response)=> {
            if(response.data.email){
                 navigate('/dashboard') 
            }else{
                setError(response.data.message)
            }
            // console.log("You can't login")
               
         })
        .catch(error=> console.log("Error occurred" + error))
    }
  return (
    <Container>
        <Row style={{paddingTop: "30px"}}>
            <Col md={5} style={{margin: "auto"}}>
            {/* <img src="image3.png" style={{width: "80%", height: "auto"}} alt="image here" /> */}
            <Slider />
            </Col>
            <Col md={5} style={{marginLeft: "auto"}}>
                <h5 style={{textAlign: 'center', fontFamily: "Trebuchet MS", fontWeight: 700, fontSize: "25px;"}}>Welcome Back</h5>
                <center style={{fontFamily: "Trebuchet MS", fontWeight: 400, fontSize: "18px;"}}>
                    Login to assess your dashboard
                    <h6 style={{color: "red"}}>{error}</h6>
                </center>
                <form onSubmit={handlersubmit}>
                    <div style={{padding: "10px"}}>
                        <input type="text" onChange={handler} className="form-control" placeholder="Email" name="email" required/>
                    </div>

                    <div style={{padding: "10px"}}>
                        <input type="text" onChange={handler} className="form-control" placeholder="Password" name="password" required />
                    </div>

                    <div style={{padding: "10px"}}>
                        <input type="checkbox"/> Keep me Logged in | <Link to="#">Forgot Password?</Link>
                    </div>
                    
                    <div>
                        <center>
                        <Button type="submit" className="btn form-control rounded-4" style={{width: "50%", backgroundColor: "transparent", color: "black"}}>Login</Button>
                        </center>
                    </div>
                </form><br/>
                <center>Don't have an account yet? <Link to="/register">Signup</Link></center><hr/>
                <center>Or</center>
                <center>
                    {/* <Button type="submit" className="btn rounded-4" style={{backgroundColor: "transparent", color: "black"}}>
                    <img src="Google.png" style={{width: "30px", height: "auto"}} alt="image here" />
                        Login with Google
                    </Button> */}
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(jwtDecode(credentialResponse.credential));
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

export default Login;

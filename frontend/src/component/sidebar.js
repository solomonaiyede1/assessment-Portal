import { Link, useNavigate } from 'react-router';
import axios from 'axios'
import { useState, useEffect } from 'react'

function Sidebar() {

  const [ role, setRole ] = useState("")

  const navigate= useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3001/test')
    .then((response) => {
        if(response.data.role==='admin'){
            setRole("admin")
        }else{
            setRole("user")
        }
    })
    .catch(error=> console.log(error))
  }, [])
  
  const logouthandler = ()=> {
    axios.get('http://localhost:3001/logout')
    .then((response) =>{ 
      if(response.data.message){
        navigate('/')
      }
       })
    .catch(error=> console.log(error))
  }
    



  return (
    <ul style={{boxShadow: "5px 5px 5px rgba(0,0,0,0.1)", height: "100vh"}}>
        <li style={ulist}><Link to="/dashboard" style={list}><i class="fa fa-dashboard"></i> Dashboard</Link></li>
        <li style={ulist}><Link to="/taketest" style={list}><i class="fa fa-user-circle-o"></i> Take Test</Link></li>
        {/* <li style={ulist}><Link to="/assessment" style={list}><i class="fa fa-check"></i> Assessment</Link></li> */}
        <li style={ulist}><Link to="/resources" style={list}><i class="fa fa-book"></i> Resources</Link></li>
        
        {role==='admin' && <>
        <li style={ulist}><Link to="/courses" style={list}><i class="fa fa-book"></i> Create Courses</Link></li>
        <li style={ulist}><Link to="/create-question" style={list}><i class="fa fa-question-circle"></i> Create Questions</Link></li>
        <li style={ulist}><Link to="/candidate" style={list}><i class="fa fa-user"></i> View Candidate</Link></li>
        </>
}
        <li style={ulist}><Link to="/setting" style={list}><i class="fa fa-gear"></i> Settings</Link></li>
        <li style={ulist}><Link to="/help" style={list}><i class="fa fa-question"></i> Help</Link></li>

        <li style={ulist}><Link  onClick={logouthandler} style={list}><i class="fa fa-sign-out"></i> Logout</Link></li>
    </ul>
  )
}

export default Sidebar;

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
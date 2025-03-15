import Register from './component/register'
import { BrowserRouter, Routes, Route } from 'react-router';
// import Sidebar from './component/sidebar';
import Login from './component/login';
import Dashboard from './component/dashboard';
import Help from './component/help';
import Resources from './component/resources';
import Setting from './component/setting';
import Assessment from './component/assessment';
import Courses from './component/courses';
import Question from './component/create-question';
import Candidate from './component/candidate';
import Taketest from './component/taketest';
import Result from './component/result';


function App() {
  const user= 'admin'
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/assessment/:id?" element={<Assessment/>}/>
            <Route path="/taketest" element={<Taketest/>}/>
            <Route path="/resources" element={<Resources/>}/> 
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/create-question" element={<Question/>}/>
            <Route path="/candidate" element={<Candidate/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/setting" element={<Setting/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

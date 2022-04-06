import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePosts from './pages/CreatePosts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  //this will be used to determine if user is logined
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <nav>
        <Link to='/'> Home</Link>
        <Link to='/CreatePosts'> CreatePosts</Link>
        {!isAuth && <Link to='/Login'> Login</Link> }
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>         
        <Route path='/CreatePosts' element={<CreatePosts/>}/>
        <Route path='/Login' element={<Login setIsAuth={setIsAuth}/>}/>  
      </Routes>
    </Router>
  );
}

export default App;

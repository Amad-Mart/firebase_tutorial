import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePosts from './pages/CreatePosts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <nav>
        <Link to='/'> Home</Link>
        <Link to='/CreatePosts'> CreatePosts</Link>
        <Link to='/Login'> Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/CreatePosts' element={<CreatePosts/>}/> 
      </Routes>
    </Router>
  );
}

export default App;

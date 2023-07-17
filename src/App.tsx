import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './assets/Components/HomePage/HomePage';
import Blog from './assets/Components/HomePage/Blog';
import Login from './assets/Components/HomePage/Login/Login';
import Dashboard from './assets/Components/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/blog" element={<Blog />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;

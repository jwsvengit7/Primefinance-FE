import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './assets/Components/HomePage/HomePage';
import Blog from './assets/Components/HomePage/Blog';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </Router>
  );
}

export default App;

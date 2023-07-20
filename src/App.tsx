import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './assets/Components/HomePage/HomePage';
import Blog from './assets/Components/HomePage/Blog';
import Login from './assets/Components/HomePage/Login/Login';
import Dashboard from './assets/Components/Dashboard/Dashboard';
// import Edit from './assets/Components/Dashboard/Edit';
import View from './assets/Components/Dashboard/View';
import ViewId from './assets/Components/Dashboard/ViewId';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/blog" element={<Blog />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      {/* <Route path="/edit/:id" element={<Edit />} />  */}
      <Route path="/view" element={<View />} /> 
      <Route path="/view/:id" element={<ViewId />} /> 
      </Routes>
    </Router>
  );
}

export default App;

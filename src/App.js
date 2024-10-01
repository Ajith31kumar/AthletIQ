import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamPage from './Pages/TeamPage/TeamPage';
import TestimonialPage from './Pages/TestimonialPage/TestimonialPage';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          
      </Routes>
    </div>
    </Router>
  );
}

export default App;

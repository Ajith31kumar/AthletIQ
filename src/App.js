import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import TeamPage from './Pages/TeamPage/TeamPage';
import TestimonialPage from './Pages/TestimonialPage/TestimonialPage';
// import ProductDetails from './Pages/ProductDetails/ProductDetails'; // Import ProductDetails
// import ServiceDetails from './Pages/ServiceDetails/ServiceDetails'; // Import ServiceDetails
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          {/* <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/service/:id" element={<ServiceDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

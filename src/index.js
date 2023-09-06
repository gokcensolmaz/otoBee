import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Branch from './components/Branch';
import Contact from './components/Contact';
import './styles/main.css';


const App = () => {
  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/branches" element={<Branch />} />
              <Route path="/contact" element={<Contact />} />
              {/* Add other routes here */}
          </Routes>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>
);

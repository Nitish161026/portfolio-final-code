import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';
import Explore from './Pages/Explore/Explore';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;

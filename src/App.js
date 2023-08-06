import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  return (
    <Router>
      <div className='App'>
        <NavBar setNavExpanded={setNavExpanded} />
        <Banner isNavExpanded={navExpanded} />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React, { Component } from 'react';
import './App.css';

import LandingPage from './components/LandingPage/_LandingPage';
import ProjectPage from './components/ProjectPage/_ProjectPage';
import AboutPage from './components/AboutPage/_AboutPage';
import ContactPage from './components/ContactPage/_ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        <ProjectPage/>
        <AboutPage/>
        <ContactPage/>
      </div>
    );
  }
}

export default App;

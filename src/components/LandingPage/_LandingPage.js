import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
      <div className="home-section">
        <div className="mobileContainer">
          <p className="burger-menu">&#9776;</p>
          <ul className="mobileNav">
            <li>Home</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <p className="landing-title">Matthieu Nadeau</p>
      </div>
    );
  }

}

export default LandingPage;

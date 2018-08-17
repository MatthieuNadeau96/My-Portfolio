import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className="home-section">
        <div className="landing-text">
          <p className="about-me">Hello, my name is <span className="landing-title">Matthieu Nadeau</span>.
          <br/>I am a self-taught developer from a small town in Massachusetts. I love creating beautiful and efficiently simple things.</p>
        </div>
      </div>
    );
  }

}

export default LandingPage;

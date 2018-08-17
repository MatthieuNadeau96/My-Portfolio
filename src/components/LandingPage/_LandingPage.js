import React, { Component } from 'react';


class LandingPage extends Component {

  goDown = () => {
    window.scroll({ top: 940, left: 0, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="home-section">
        <div className="landing-text">
          <p className="about-me">Hello, my name is <span className="landing-title">Matthieu Nadeau</span>.
          <br/>I am a self-taught developer from a small town in Massachusetts. I love creating beautiful and efficiently simple things.</p>
        </div>
        <div className="down-arrow" onClick={this.goDown}>
          <i className="fas fa-angle-down"/>
        </div>
      </div>
    );
  }

}

export default LandingPage;

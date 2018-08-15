import React, { Component } from 'react';

import NavMenu from './Navigation/NavMenu';
import NavButton from './Navigation/NavButton';
import Backdrop from './Navigation/Backdrop';

class LandingPage extends Component {

  state = {
    navBarOpen: false
  }

  // TODO: thinking about dumping the navmenu idea and just adding up and down arrows to navigate.

  navToggle = () => {
    this.setState((prevState) => {
      return {navBarOpen: !prevState.navBarOpen}
    });
  }

  backdropToggle = () => {
    this.setState({ navBarOpen: false })
  }


  render() {
    let navMenu;
    let backdrop;

    if (this.state.navBarOpen) {
      navMenu = <NavMenu/>;
      backdrop = <Backdrop click={this.backdropToggle}/>;
    }

    return (
      <div className="home-section">
        <NavButton navBarOpen={this.state.navBarOpen} click={this.navToggle}/>
        {navMenu}
        {backdrop}
        <div className="landing-text">
          <p className="about-me">Hello! My name is <span className="landing-title">Matthieu Nadeau</span>.
          <br/>I am a self-taught developer from a small town in Massachussetts. I love creating beautiful and efficiently simple things.</p>
        </div>
      </div>
    );
  }

}

export default LandingPage;

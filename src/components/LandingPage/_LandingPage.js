import React, { Component } from 'react';

import NavMenu from './Navigation/NavMenu';
import NavButton from './Navigation/NavButton';
import Backdrop from './Navigation/Backdrop';

class LandingPage extends Component {

  state = {
    navBarOpen: false
  }

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
        <p className="landing-title">Matthieu Nadeau</p>
      </div>
    );
  }

}

export default LandingPage;

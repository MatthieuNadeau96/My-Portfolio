import React, { Component } from 'react';

class NavButton extends Component {

  render() {
    if (this.props.navBarOpen) {
      return(
        <div onClick={this.props.click} className="navButton">
          <div style={{visibility: 'hidden'}}>&#9776;</div>
        </div>
      )
    } else {
      return(
        <div onClick={this.props.click} className="navButton">
          <div>&#9776;</div>
        </div>
      )
    }
  }

}

export default NavButton;

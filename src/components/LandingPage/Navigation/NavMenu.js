import React, { Component } from 'react';

class NavMenu extends Component {

  render() {
    return (
      <div>
        <ul className="navMenu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Work</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    );
  }

}

export default NavMenu;

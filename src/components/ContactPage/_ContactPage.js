import React, { Component } from 'react';

import SocialLinks from './SocialLinks';
import Signature from './Signature';

class ContactPage extends Component {

  render() {
    return (
      <div className="contact-section">
        <SocialLinks/>
        <Signature/>
      </div>
    );
  }

}

export default ContactPage;

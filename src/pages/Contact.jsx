import React from 'react';
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">

        <div className="col-md-12">
          <h2>Contact</h2>
          <p>Visit me on social media, browse my repositories, or drop some words on my email</p>
        </div>

        <div className="social-media">
        <a href=".." target="blank">
          <div>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <div>
              <h4>LinkedIn</h4>
              <p>Follow me on LinkedIn</p>
          </div>
        </a>
        </div>

      </div>
    </div>
  )
}

export default Contact
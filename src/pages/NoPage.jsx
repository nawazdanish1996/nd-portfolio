import React from 'react';
import "../css/Nopage.css";
import { NavLink } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className='nopage'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3> 404 | This Pages Doesn't Exists</h3>
            <NavLink to="/">Go to homepage</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoPage
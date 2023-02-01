import React, {useState} from 'react';
import "../css/Navbars.css";
import {NavLink} from "react-router-dom";
import myImg from "../assests/images/Nawaz Danish.jpg";


const NavBars = () => {
  const [show, setShow] = useState("fa-bars");
  const [showNav, setShowNav] = useState("navbar");
  const [oth, setOth] = useState("hide");
  const [showFot, setShowFot] = useState("hideFooter")

  const showToggleHandler = () =>{
      if(show === "fa-bars"){
          setShow("fa-x");
          setShowNav("navbar-hide");
          setOth("col-md-12");
          setShowFot("showFooter")
        }else{
          setShow("fa-bars");
          setShowNav("navbar");
          setOth("hide");
          setShowFot("hideFooter")
      }
  };

  return (
    <div className={showNav}>

      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <i onClick={showToggleHandler} class={`fa-solid ${show} ticon`}></i>
          </div>

          <div className={`${oth} mt-md-5`}>
            <img loading='lazy' src={myImg} alt="Nawaz Danish" />
            <h4>Nawaz Danish</h4>
            <p>React Developer</p>
            <a href="https://www.linkedin.com/in/nawazdanish/" target="blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/nawazdanish1996" target="blank">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a href="https://twitter.com/nawazdanish1996" target="blank">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <hr />
          </div>

          <div className={`${oth}`}>
            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className={`${showFot}`}>
            <footer>
              <small>All Rights Reserved</small>
              <br />
              <small>Developed By: Nawaz Danish</small>
            </footer>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBars;
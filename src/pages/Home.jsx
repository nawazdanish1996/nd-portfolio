import React from 'react';
import "../css/Home.css";
import Project from "./Project";
import { 
  useTypewriter, 
  // Cursor 
} from "react-simple-typewriter";
// imgages
import html from "../assests/images/techImg/html.png"
import css from "../assests/images/techImg/css-3.png"
import sass from "../assests/images/techImg/sass.png"
import bootstrap from "../assests/images/techImg/bootstrap.png"
import js from "../assests/images/techImg/js.png"
import react from "../assests/images/techImg/react.png"
import git from "../assests/images/techImg/git.png"
import redux from "../assests/images/techImg/redux.png"
import node from "../assests/images/techImg/node.png"

const Home = () => {
  const stackImg = [
    {
      title: "HTML",
      imgSrc: html
    },
    {
      title: "CSS",
      imgSrc: css
    },
    {
      title: "SASS",
      imgSrc: sass
    },
    {
      title: "Bootstrap",
      imgSrc: bootstrap
    },
    {
      title: "JavaScript",
      imgSrc: js
    },
    {
      title: "React.js",
      imgSrc: react
    },
    {
      title: "Redux-Toolkit",
      imgSrc: redux
    },
    {
      title: "Node.js",
      imgSrc: node
    },
    {
      title: "Git",
      imgSrc: git
    }
  ];

  const [text] = useTypewriter({
    words: ["React Developer", "Frontend Developer"],
    loop: 0
  });

  return (
    <div className='home'>
      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <h2>Hello World!</h2>
            <h2>I am Nawaz Danish</h2>
            <p>
              "{text}"
              {/* <Cursor cursorColor='red' /> */}
            </p>
          </div>

          <div className="col-md-12 mt-5 mb-5">
            <p style={{color: "white"}}>I am a React Developer with hands-on experience in identifying web-based user interactions along with highly responsive UI components by deploying react concepts and writing code via Javascript and React.js workflows. Monitoring and maintaining frontend performance.</p>
          </div>

          <h4 style={{textAlign: "left"}}>Teach stack:</h4>
          {stackImg.map((val, ind)=>{
            const {imgSrc, title} = val;
              return(
              <div className="imgs" key={ind}>
                <img loading='lazy' src={imgSrc} alt={title} />
                <p>{title}</p>
              </div>
          )})}

          <Project />


        </div>
      </div>
    </div>
  )
}

export default Home;
import React from 'react';
import "../css/Home.css";
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
              Fresher - {text}
              {/* <Cursor cursorColor='red' /> */}
            </p>
          </div>

          <div className="col-md-12">
            {stackImg.map((val, ind)=>{
                const {imgSrc, title} = val;
                return(
                  <div>
                    <img loading='lazy' src={imgSrc} alt={title} />
                    <p>{title}</p>
                  </div>
                )})}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;
import React from 'react';
import "../css/Projects.css";
import img1 from "../assests/images/projImages/1.png"
import img2 from "../assests/images/projImages/2.png"
import img3 from "../assests/images/projImages/3.png"
import img4 from "../assests/images/projImages/4.png"
import img5 from "../assests/images/projImages/5.png"

const Project = () => {
  const myProj = [
    {
      img: img1,
      title: "NGO Website",
      techStack: "React, CSS, Bootstrap",
      viewCode: "https://github.com/nawazdanish1996/amws",
      visitWebsite: "https://www.almadadwelfaresociety.com/"
    },
    {
      img: img2,
      title: "TvMaze",
      techStack: "React, CSS, Bootstrap",
      viewCode: "https://github.com/nawazdanish1996/tv-maze",
      visitWebsite: "https://nawazdanish1996.github.io/tv-maze/"
    },
    {
      img: img3,
      title: "Alarm Clock",
      techStack: "HTML, CSS, JS",
      viewCode: "https://github.com/nawazdanish1996/Alarm-Clock-with-Sound",
      visitWebsite: "https://nawazdanish1996.github.io/Alarm-Clock-with-Sound/"
    },
    {
      img: img4,
      title: "Alarm Clock",
      techStack: "HTML, CSS, Bootstrap",
      viewCode: "https://github.com/nawazdanish1996/HTML-CSS-Project---HTML-CSS-Mini-Project---hmvp5eqhxlv0",
      visitWebsite: "https://nawazdanish1996.github.io/HTML-CSS-Project---HTML-CSS-Mini-Project---hmvp5eqhxlv0/"
    },
    {
      img: img5,
      title: "Grocery Store",
      techStack: "HTML, CSS, JS",
      viewCode: "https://github.com/nawazdanish1996/JS-Mini-Project",
      visitWebsite: "https://nawazdanish1996.github.io/JS-Mini-Project/"
    },
  ]

  return (
    <div className='projects'>
        <div className="container">
            <div className="row">

              <div className="col-md-12">
                <h2>Projects</h2>
              </div>
            

              {myProj.map((val, ind)=>{
                const {img, title, techStack, viewCode, visitWebsite} = val;
                return(
                  <div className="project-container" key={ind}>
                    <div className="the-card">
                      <div className="card-front">
                        <img src={img} alt={title} />
                      </div>
    
                      <div className="card-back">
                        <h3>{title}</h3>
                        <p>Tech Stack: {techStack}</p>
                          <a href={viewCode} target='blank'>
                            View Code <i class="fa-solid fa-eye"></i>
                            </a>
                            <br />
                            <a href={visitWebsite} target='blank'>
                              Visit Website <i class="fa-solid fa-eye"></i>
                            </a>
                        </div>
                      </div>
                  </div>
                )})}

            </div>
        </div>
    </div>
  )
}

export default Project
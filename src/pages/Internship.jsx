import React from 'react';
import "../css/Internship.css";

const Internship = () => {
  return (
    <div className="internship">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center'>Internship / Certifications</h1>
                </div>

                <div className="col-md-6 mt-5" style={{background: "#0a3d62", padding: "1rem"}}>
                    <p className='float-start'><span className='fw-bold'>Newton School</span> - <span>Newton School Coding Bootcamp</span></p>
                </div>

                <div className="col-md-6 mt-md-5" style={{background: "#0a3d62", padding: "1rem"}}>
                    <p className='float-start'>February 2022 - Present</p>
                </div>

                <div className="col-md-12">
                    <small>Full-Stack Web Development and Problem-Solving</small>
                    <br />
                    <small>Technical Stack Learned: HTML, CSS, JavaScript, React Js, Redux-Toolkit, Bootstrap</small>
                    <br />
                    <small>Version Control System: Git, GitHub</small>
                    <br />
                    <small>Worked on various projects like NGO Website, University Website, and Tv Maze, etc.</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Internship
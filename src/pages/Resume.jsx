import React, {useState} from 'react';
import "../css/Resume.css";
import {Document, Page} from "react-pdf/dist/esm/entry.webpack";
import MyResume from "../assests/doc/Nawaz Danish-Resume.pdf";


const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // setPageNumber(1);
  }

  const prevPage = () =>{
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  }

  const nextPage = () =>{
    setPageNumber( pageNumber + 1 >= numPages ? pageNumber : pageNumber + 1);
  }

  return (
    <div className='resume'>
      <div className="container">
        <div className="row">

          <div className="col-md-12 mb-5">
              <a href={MyResume} target="blank" style={{float: "right"}}>
                <button className='btn btn-secondary'><i class="fa-solid fa-download"></i> &nbsp; Download Resume</button>
              </a>
          </div>

          <div className="col-md-12">
            {/* {pageNumber > 1 &&} */}
            <button onClick={prevPage} className='btn btn-danger btn-sm'>Previous Page</button>
            <div className="btn text-white ">{`Page ${pageNumber} of ${numPages}`}</div>
            {/* {pageNumber < numPages &&} */}
            <button onClick={nextPage} className='btn btn-warning btn-sm'>Next Page</button>
            <br /><br />
            <Document file={MyResume} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber}></Page>
            </Document>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Resume;
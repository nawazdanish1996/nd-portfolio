import React, {useState} from 'react';
import "../css/Resume.css";
import MyResume from "../assests/doc/Nawaz Danish-Resume.pdf";

import {Document, Page} from "react-pdf/dist/esm/entry.webpack";


const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prePage => prePage + offSet)
  }

  function changePageBack(){
    changePage(-1);
  }

  function changePageNext(){
    changePage(+1);
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
            {pageNumber > 1 &&
                <button className='btn btn-primary btn-sm' onClick={changePageBack}>Previous Page</button>
              }
            {
              pageNumber < numPages &&
              <button className='btn btn-primary btn-sm' onClick={changePageNext}>Next Page</button>
            }
            <br />
            <br />
            <p className='mb-3'>Page {pageNumber} of {numPages}</p>
            <Document id="page" file={MyResume} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Resume;
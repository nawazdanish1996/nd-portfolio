import React, {useState} from 'react';
import "../css/Resume.css";
import MyResume from "../assests/doc/sample.pdf";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage (offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack (offSet){
    changePage(-1);
  }

  function changePageNext(){
    changePage(+1);
  }

  return (
    <div className='resume'>
      <div className="container">
        <div className="row">

          <div className="col-md-12">
              <a href={MyResume} target="blank" style={{float: "right"}}>
                <button className='btn btn-secondary'>Download Resume</button>
              </a>
          </div>

          <div className="col-md-12">
              <Document file={MyResume} onLoadSuccess={onDocumentLoadSuccess} >
                <Page height="600px" pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
              { pageNumber > 1 && <button className='btn btn-primary' onClick={changePageBack}>Previous Page</button> }
              { pageNumber < numPages && <button className='btn btn-primary' onClick={changePageNext}>Next Page</button>}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Resume;
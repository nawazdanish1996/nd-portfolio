import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBars from "../navbar/NavBars";
const Home = lazy(()=> import("../pages/Home"));
const Projects = lazy(()=> import("../pages/Project"));
const Contact = lazy(()=> import("../pages/Contact"));
const Resume = lazy(()=> import("../pages/Resume"));
const Internship = lazy(()=> import("../pages/Internship"));
const NoPage = lazy(()=> import("../pages/NoPage"));

const Routing = () => {
  return (
    <Router>
      <NavBars />
        <Routes>
            <Route exact path="/" element={<Suspense fallback="loading..."><Home /></Suspense>} />
            <Route exact path="/projects" element={<Suspense fallback="loading..."><Projects /></Suspense>} />
            <Route exact path="/internship" element={<Suspense fallback="loading..."><Internship /></Suspense>} />
            <Route exact path="/resume" element={<Suspense fallback="loading..."><Resume /></Suspense>} />
            <Route exact path="/contact" element={<Suspense fallback="loading..."><Contact /></Suspense>} />
            <Route exact path="*" element={<Suspense fallback="loading..."><NoPage /></Suspense>} />
        </Routes>
    </Router>
  )
}

export default Routing;
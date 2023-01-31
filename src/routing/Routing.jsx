import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBars from "../navbar/NavBars";
const Home = lazy(()=> import("../pages/Home"));
const About = lazy(()=> import("../pages/About"));
const Contact = lazy(()=> import("../pages/Contact"));
const Portfolio = lazy(()=> import("../pages/Portfolio"));
const NoPage = lazy(()=> import("../pages/NoPage"));

const Routing = () => {
  return (
    <Router>
      <NavBars />
        <Routes>
            <Route exact path="/" element={<Suspense fallback="loading..."><Home /></Suspense>} />
            <Route exact path="/about" element={<Suspense fallback="loading..."><About /></Suspense>} />
            <Route exact path="/portfolio" element={<Suspense fallback="loading..."><Portfolio /></Suspense>} />
            <Route exact path="/contact" element={<Suspense fallback="loading..."><Contact /></Suspense>} />
            <Route exact path="*" element={<Suspense fallback="loading..."><NoPage /></Suspense>} />
        </Routes>
    </Router>
  )
}

export default Routing;
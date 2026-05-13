import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Enroll from "./components/Enroll";
import AdmissionEnquiry from "./pages/AdmissionEnquiry";
import Home from "./pages/Home";
import About from "./pages/About";
import Administration from "./pages/Administration";
import MissionandVision from "./pages/MissionandVision";
import Affiliations from "./pages/Affiliations";
import Admission from "./pages/Admission";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/missionandvision" element={<MissionandVision />} />
        <Route path="/affiliations" element={<Affiliations />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissionenquiry" element={<AdmissionEnquiry />} />

      </Routes>

      <Enroll />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
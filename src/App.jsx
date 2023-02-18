import { useState } from "react";
import AnchorLinks from "./components/AnchorLinks/AnchorLinks";
import AnchorMail from "./components/AnchorMail/AnchorMail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experieces from "./components/Experiences/Experieces";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Home />
      <About />
      <Projects />
      <Experieces />
      <Contact />
      <AnchorMail />
      <AnchorLinks />
      <Footer />
    </div>
  );
}

export default App;

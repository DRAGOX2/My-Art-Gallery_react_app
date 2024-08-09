import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import About from "./About";
import Arts from "./Art";
import Signup from "./Components/Signup"
import Contact from "./Contact";
import Dragonball from "./Components/Dragonball";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Arts" element={<Arts />} />
          <Route path="/Arts/Dragonball" element={<Dragonball />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

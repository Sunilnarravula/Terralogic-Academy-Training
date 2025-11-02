import React from "react";


 import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import ButtonNavigation from "./ButtonNavigation";

function App() {
      return (
        <Router>
          <nav>
            <Link to="/">Home</Link> | <Link to="/About">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Post/:id" element={<Post/>} />
            <Route path="/About" element={<About />} />
            <Route path="/navigation"  element={<ButtonNavigation/>} />
            
          </Routes>
        </Router>
      );
}


export default App;
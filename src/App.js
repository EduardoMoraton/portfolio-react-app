// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import FullPage from "./components/FullPage";
import FullBlog from "./components/FullBlog";

function App() {
  return (
    <Router>
      <div className={"scroll-smooth"}>
       
        <Routes>
          <Route path="/" element={<FullPage/>}/>
          <Route path="/blog/*" element={<FullBlog/>}/>
        </Routes>
        


      </div>
    </Router>
  );
}

export default App;

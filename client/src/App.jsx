import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen text-black w-screen">
      <Navbar />
      <Home />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default App;

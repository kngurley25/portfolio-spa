import React, { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {

  

  return (
    <div>
      <Header></Header>

      <main>
      <About></About>
      <Project></Project>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;

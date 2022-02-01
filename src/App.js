import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pagewrap">
      <Router>
        <Header></Header>
        <Switch>
          <main>
          <Route exact path = "/" component = {About}></Route>
          <Route exact path = "/Project" component = {Project}></Route>
          <Route exact path = "/ContactForm" component = {ContactForm}></Route>
          <Route exact path = "/Resume" component = {Resume}></Route>
          </main>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

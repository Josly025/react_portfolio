import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
// import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;

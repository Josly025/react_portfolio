import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "../NavTabs";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";

function Header() {
  return (
    <div>
      <Router>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Router>
    </div>
  );
}

export default Header;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;

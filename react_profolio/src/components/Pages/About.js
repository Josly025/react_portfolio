import React from "react";
import "./About.css";
import Bio from "./Images/Bio_image.png";
import Footer from "../Footer/";
import Background from "./Images/background-image-1.png";
import Projects from "../Projects/";

function About() {
  return (
    <>
      <div
        className="container-fluid image-fluid"
        style={{
          backgroundImage: { Background },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <h1 id="me"> About Me </h1>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <img
              id="bio"
              src={Bio}
              className="img-fluid rounded"
              alt="Responsive Bio image"
              align="right"
            ></img>
          </div>
        </div>
        <Projects />
        <Projects />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default About;

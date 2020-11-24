import React from "react";
import "./About.css";
import Bio from "./Images/Bio_image.png";
import Footer from "../Footer/";
import Background from "./Images/background-image-1.png";

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
          <div className="col-sm-8">
            <img
              id="bio"
              src={Bio}
              className="img-fluid rounded"
              alt="Responsive Bio image"
              align="right"
            ></img>
            <p>
              This is a practice portfolio. This is a practice portfolio. This
              is a practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <p>
              This is a practice portfolio. This is a practice portfolio. This
              is a practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio. This is a
              practice portfolio. This is a practice portfolio.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

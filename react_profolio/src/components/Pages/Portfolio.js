import React from "react";
import "./Portfolio.css";
import Password from "./Images/password-gen.png";
import Plan from "./Images/plan-eat-arium.png";
import Weather from "./Images/weather_dah.png";
import Pokemon from "./Images/desktop-screen.PNG";
import Employee from "./Images/EmployeeIndex.png";

function Portfolio() {
  return (
    <div className="container-fluid d-flex flex-wrap">
      <div className="row">
        <h1 id="my-port">
          <u>Portfolio</u>
        </h1>
      </div>

      <div className="box5">
        <img
          src={Employee}
          className="img-fluid"
          alt="Future Portfolio -- Responsive image"
        ></img>
        <a href="https://hidden-mountain-77738.herokuapp.com/">
          <button className="btn-new">Employee Index</button>
        </a>
      </div>
      <div className="box1">
        <img
          // src={"./Images/password-gen.png"}
          src={Password}
          className="img-fluid"
          alt="password_generator"
        ></img>
        <a href="https://josly025.github.io/password_gen.io/">
          {" "}
          <button className="btn-new">Password Generator</button>
        </a>
      </div>
      <div className="box2">
        <img
          // src="./Images/plan-eat-arium.png"
          src={Plan}
          className="img-fluid"
          alt="plan_eat_arium"
        ></img>
        <a href="https://josly025.github.io/plan-eat-rium.io/">
          <button className="btn-new">Plan-eat-rium</button>
        </a>
      </div>
      <div className="box3">
        <img
          // src="./Images/weather_dah.png"
          src={Weather}
          className="img-fluid"
          alt="weather_dashboard"
        ></img>
        <a href="https://josly025.github.io/weather_dash.io/">
          <button class="btn-new">Weather Dashboard</button>
        </a>
      </div>
      <div className="box4">
        <img
          // src="./Images/desktop-screen.PNG"
          src={Pokemon}
          className="img-fluid"
          alt="Future Portfolio -- Responsive image"
        ></img>
        <a href="https://polar-escarpment-17006.herokuapp.com/">
          <button class="btn-new">Pokémemory Game</button>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;

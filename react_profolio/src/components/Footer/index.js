import React from "react";

function footer() {
  return (
    <footer>
      <div className="card">
        <div className="card-footer" width="device-width">
          <div className="card-body bg-dark">
            <h5 className="card-title text-light">Grant's</h5>
            <p className="card-text text-light">linkedIn & GitHub</p>
            <a href="http://www.linkedin.com/in/grantjoslyn/">
              <button className="btn-new">Connect with me via LinkedIn!</button>
            </a>
            <a href="https://github.com/Josly025">
              <button className="btn-new">Follow me on GitHub!</button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;

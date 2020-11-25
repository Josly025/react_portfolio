import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="background-grad">
      <div class="row mx-md-n5">
        <div class="col px-md-5">
          <div class="p-5 border border-dark">
            <h1>
              <u>Contact</u>
            </h1>
            <form class="needs-validation" novalidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationCustom01">| Name |</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    value="John Johnson"
                    required
                  ></input>
                  <div class="valid-feedback">Please enter your name</div>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationCustomUsername">
                    | Email Address |
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupPrepend">
                        @
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      placeholder="john@gmail.com"
                      aria-describedby="inputGroupPrepend"
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Please enter a valid email address
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mb-3">
                <label for="validationCustom04">| Message |</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom04"
                  placeholder="Leave message here"
                  required
                ></input>
                <div class="invalid-feedback">Please provide a message</div>
              </div>
              <button class=" btn-new" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer id="footer ">
        <div class="card-footer container-fluid" width="device-width">
          <div class="card-body bg-dark shadow p-10 mb-5 bg-dark rounded">
            <h5 class="card-title text-light">Contact Information</h5>
            <p class="card-text text-light">
              Email: grantjoslyn@gmail.com | Phone: 563-203-1340
            </p>
            <a href="http://www.linkedin.com/in/grantjoslyn/">
              <button class="btn-new">Connect with me via LinkedIn!</button>
            </a>
            <a href="https://github.com/Josly025">
              <button class="btn-new">Follow me on GitHub!</button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;

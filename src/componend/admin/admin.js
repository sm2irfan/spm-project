import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import CustomerNavigation from "../customerNavigation";
import AdminNavigation from "./adminNavigation";
import Start from "../start";
import Home from "../home";
import AdminPayment from "../IT19029900/admin/adminPayment";

const admin = () => {
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "800px",
          }}
        >
          <AdminNavigation />
          <div id="accordion">
            <div class="row">
              <div class="col-md-3">
                <div id="accordion">
                  <div class="card bg-dark">
                    <div class="card-header">
                      <h5>
                        <a
                          href="#collapse1"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Product Handleing
                        </a>
                      </h5>
                    </div>

                    <div id="collapse1" class="collapse">
                      <div class="card-body">
                        <a href="#" class="dropdown-item">
                          Link 1
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="card bg-dark">
                    <div class="card-header">
                      <h5>
                        <a
                          href="#collapse2"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Payment
                        </a>
                      </h5>
                    </div>

                    <div id="collapse2" class="collapse">
                      <div class="card-body">
                        <Link to="/admin/payment" class="dropdown-item">
                          Payment
                        </Link>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse3"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Delivery
                        </a>
                      </h5>
                    </div>

                    <div id="collapse3" class="collapse">
                      <div class="card-body">
                        <a href="#" class="dropdown-item">
                          Link 1
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse4"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Feedback
                        </a>
                      </h5>
                    </div>

                    <div id="collapse4" class="collapse">
                      <div class="card-body">
                        <a href="#" class="dropdown-item">
                          Link 1
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse5"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Promotions
                        </a>
                      </h5>
                    </div>

                    <div id="collapse5" class="collapse">
                      <div class="card-body">
                        <a href="#" class="dropdown-item">
                          Link 1
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse6"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Collapse One
                        </a>
                      </h5>
                    </div>

                    <div id="collapse6" class="collapse">
                      <div class="card-body">
                        <a href="#" class="dropdown-item">
                          Link 1
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 2
                        </a>
                        <a href="#" class="dropdown-item">
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-9"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "500px",
                }}
              >
                <Route path="/admin/payment" exact>
                  <AdminPayment />
                </Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default admin;

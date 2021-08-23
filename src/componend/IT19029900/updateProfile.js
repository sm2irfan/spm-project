import React from "react";
import CustomerNavigation from "../customerNavigation";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import aveter from "../../avatar.png";

const updateProfile = () => {
  return (
    <React.Fragment>
      <CustomerNavigation />

      <div class="card text-white">
        <img width="500" height="150" class="card-img" src={detalis} alt="" />
        <div class="card-img-overlay">
          <h1 class="card-title text-center">UPDATE PROFILE</h1>
        </div>
      </div>

      <div className="my-5">
        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <a href="#" class="btn btn-danger btn-block">
                  <i class="fas fa-trash"></i> Delete Account
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="profile">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="card">
                  <div class="card-header">
                    <h4>Edit Profile</h4>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-row">
                        <div class="col">
                          <label for="email">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div class="col">
                          <label for="email">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="Addresss">Addresss</label>
                        <input type="text" class="form-control" value="250/1" />
                      </div>

                      <div class="form-group">
                        <label for="city">City</label>
                        <select class="form-control" id="city">
                          <option>Kolonnawa</option>
                          <option>Wellampitiya</option>
                          <option>Malabe</option>
                          <option>Colombo 1-15</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          value="0778950437"
                        />
                      </div>

                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          value="test@test.com"
                        />
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          value="22222222"
                        />
                      </div>

                      <button class="btn btn-primary btn-block" type="submit">
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <h3>Your Avatar</h3>
                <img src={aveter} alt="" class="d-block img-fluid mb-3" />
                <button class="btn btn-primary btn-block">Edit Image</button>
                <button class="btn btn-danger btn-block">Delete Image</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CustomerFooter />
    </React.Fragment>
  );
};

export default updateProfile;

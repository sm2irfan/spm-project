import banner from "../banner.jpg";
import CustomerFooter from "./customerFooter";
import CustomerNavigation from "./customerNavigation";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ViewProduct from "./IT19018256/viewProduct";
import { CartProvider } from "react-use-cart";


const Home = () => {
  return (
    <React.Fragment>
      <CartProvider>
      <CustomerNavigation></CustomerNavigation>

      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="dropdown">
              <a
                class="btn btn-success btn-block dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <i class="fa fa-bars"></i>
                <span>All departments</span>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item">Fresh Meat</a>
                <a class="dropdown-item">Vegetables </a>
                <a class="dropdown-item">Fruit & Nut Gifts</a>
                <a class="dropdown-item">Fresh Meat</a>
                <a class="dropdown-item">Vegetables </a>
                <a class="dropdown-item">Fruit & Nut Gifts</a>
                <a class="dropdown-item">Fresh Meat</a>
                <a class="dropdown-item">Vegetables </a>
                <a class="dropdown-item">Fruit & Nut Gifts</a>
              </div>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="row">
              <div class="input-group mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Find By Name..."
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                </div>
              </div>
              <div class="card  float-right">
                <img class="card-img" src={banner} alt="" />
                <div class="card-img-overlay">
                  <span>YOU CAN GET FRESH FOODS IN HEARE</span>
                  <h2>
                    Sun Shine <br />
                    Supermarket
                  </h2>
                  <p>(PVT) LTD</p>
                  <a href="#" class="btn btn-primary">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div></div>
      </div>

      <div class="container">
        <h1 class="text-center">
          <u>Featured Product</u>
        </h1>
      </div>
      
      <ViewProduct></ViewProduct>
      
      <CustomerFooter></CustomerFooter>
      </CartProvider>
    </React.Fragment>
  );
};

export default Home;

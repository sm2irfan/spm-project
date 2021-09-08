import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './navbar.component.css';
import CreateProduct from "./create-product.component";
import ProductList from './product-list-component';
import EditProduct from './edit.product.component';

export default class Navbar extends Component {
    render() {
        return (
            <div id="wrapper" >

                {/* <!-- Navigation --> */}
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html">SB Admin</a>
                    </div>
                    {/* <!-- Top Menu Items --> */}
                    <ul class="nav navbar-right top-nav">

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> John Smith <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                                </li>

                                <li class="divider"></li>
                                <li>
                                    <a href="#"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens --> */}
                    <div class="side-nav ">

                        <ul class="side-nav nav navbar-nav ">
                            <li>
                                <a href="index.html"><i class="fa fa-fw fa-dashboard"></i> Customer view</a>
                            </li>

                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> product management <i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo" class="collapse">
                                    <li>
                                        <a href="/create">Add Product</a>
                                    </li>
                                    <li>
                                        <a href="/">All Product</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo1"><i class="fa fa-fw fa-arrows-v"></i> Profile management <i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo1" class="collapse">
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo2"><i class="fa fa-fw fa-arrows-v"></i> bit points calculation <i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo2" class="collapse">
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo3"><i class="fa fa-fw fa-arrows-v"></i> Payment management<i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo3" class="collapse">
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo4"><i class="fa fa-fw fa-arrows-v"></i> Supplier management <i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo4" class="collapse">
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo5"><i class="fa fa-fw fa-arrows-v"></i> customer feedback <i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo5" class="collapse">
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo6"><i class="fa fa-fw fa-arrows-v"></i> Shareholder  <i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo6" class="collapse">
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#demo7"><i class="fa fa-fw fa-arrows-v"></i> Delivery management <i class="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo7" class="collapse">
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </div>

                    {/* <!-- /.navbar-collapse --> */}
                </nav>

                <div id="page-wrapper">

                    <div class="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <Router>
                            <div className="container">

                                <br />
                                <Route path="/create" exact component={CreateProduct} />
                                <Route path="/" exact component={ProductList} />
                                <Route path="/edit/:id" component={EditProduct} />
                                {/* <Route path="/create" component={CreateProduct} />
                                    <Route path="/user" component={CreateUser} /> */}
                            </div>
                        </Router>
                        {/* <!-- /.row --> */}

                    </div>
                    {/* <!-- /.container-fluid --> */}

                </div>
                {/* <!-- /#page-wrapper --> */}

            </div>
        )
    }
}

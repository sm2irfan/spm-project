import React from 'react'

const admin = () => {
    return (
        <div id="wrapper"  >


    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">SB Admin</a>
        </div>

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
       
  
        <div class="side-nav ">
          
    <ul class="side-nav nav navbar-nav ">
                <li>
                    <a href="index.html"><i class="fa fa-fw fa-dashboard"></i> Customer view</a>
                </li>
            
                <li>
                    <a href="#" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> product management <i class="fa fa-fw fa-caret-down"></i></a>
                    <ul id="demo" class="collapse">
                        <li>
                            <a href="#">Dropdown Item</a>
                        </li>
                        <li>
                            <a href="#">Dropdown Item</a>
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
       

    </nav>

    <div id="page-wrapper">

        <div class="container-fluid">

     
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">
                        Blank Page
                        <small>Subheading</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li>
                            <i class="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
                        </li>
                        <li class="active">
                            <i class="fa fa-file"></i> Blank Page
                        </li>
                    </ol>
                </div>
            </div>


        </div>


    </div>


</div>
    )
}

export default admin

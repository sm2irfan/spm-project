import React from 'react'
import logo from '../logo.JPG'

const customerNavigation = () => {
    return (
<React.Fragment>
    <nav class="navbar navbar-expand-sm navbar-dark bg-success mb-3">
      <div class="container">
        <a class="navbar-brand" href="#"><img class="card-img w-75" src={logo} alt=""/></a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
</React.Fragment>
    )
}

export default customerNavigation

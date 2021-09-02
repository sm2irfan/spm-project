import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './componend/home';
import UpdateProfile from './componend/IT19029900/updateProfile';
import CustomerProfile from './componend/IT19029900/profile';
import CustomerLogin from './componend/IT19029900/customerLogin';
import CustomerRegister from './componend/IT19029900/customerRegister';


function App() {
  return (
    <React.Fragment>
    
    <Route path ="/" exact>
	
    <Home/>
    </Route>

    <Route path ="/customerLogin" exact>
    <CustomerLogin/>
    </Route>
     
    <Route path ="/customerProfile" exact>
    <CustomerProfile/>
    </Route>

    <Route path ="/customerRegister" exact>
    <CustomerRegister/>
    </Route>

    <Route path ="/updateProfile" exact>
    <UpdateProfile/>
    </Route>

    
</React.Fragment>
  );
}

export default App;

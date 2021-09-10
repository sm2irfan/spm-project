import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './componend/home';
import UpdateProfile from './componend/IT19029900/updateProfile';
import CustomerProfile from './componend/IT19029900/profile';
import CustomerLogin from './componend/IT19029900/customerLogin';
import CustomerRegister from './componend/IT19029900/customerRegister';
import AddFeedback from './componend/IT17016476/createFeedback';
import ViewFeedback from './componend/IT17016476/viewFeedback';



import Navbar from './navbar';
import CreateProducts from './create/createpromotion';
import ListProducts from './list/listspromotion';
import UpdateProducts from './update/updatepromotion';
// import Footer from './footer/footer';
import Bar from './bar/bar';





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


    <Route path ="/addFeedback" exact>
    <AddFeedback/>
    </Route>
    
    <Route path ="/viewFeedback" exact>
    <ViewFeedback/>
    </Route>

     
    <BrowserRouter>
            <Route path="/create-promotion" component={CreateProducts} exact/>
            <Route path="/list-promotion" component={ListProducts} exact/>
            <Route path="/update-promotion/:id" component={UpdateProducts} exact/>

          </BrowserRouter>
     
</React.Fragment>
  );
}

export default App;

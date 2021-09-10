import React from 'react';
import './App.css';
import Home from './componend/home';



import Navbar from './navbar';
import CreateProducts from './create/createpromotion';
import ListProducts from './list/listspromotion';
import UpdateProducts from './update/updatepromotion';
// import Footer from './footer/footer';
import Bar from './bar/bar';





function App() {
  return (
    <React.Fragment>
    <Home></Home>
     
    <BrowserRouter>
            <Route path="/create-promotion" component={CreateProducts} exact/>
            <Route path="/list-promotion" component={ListProducts} exact/>
            <Route path="/update-promotion/:id" component={UpdateProducts} exact/>

          </BrowserRouter>
     
</React.Fragment>
  );
}

export default App;

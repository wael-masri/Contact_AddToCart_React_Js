import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Product from './Components/Product';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import * as Yup from 'yup';
//import { Formik , Form , Field, ErrorMessage} from 'formik';




 const App = () => {

 
   
  
  
 
  

 
  
  //running
  return (
<div>
 
  <BrowserRouter>
  <Nav />
  <Switch>
  < Route exact path="/" component={Home} />
  < Route exact path="/Contact/"  component={Contact} />
  < Route  path="/About/:id"  component={About} />
  < Route  exact path="/Products"  component={Products} />
  < Route   path="/Products/:id_item"  component={Product} />
  < Route  path="/Cart/"  component={Cart} />
  </Switch>
  </BrowserRouter>



</div>
    
    
  )
}

export default App;

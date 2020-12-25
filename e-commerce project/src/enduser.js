import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import Products from "./enduserproducts";
import Checkout from "./checkout.js";
import Orders from "./orders";
import Modadd from "./modadd";
import Wishlist from './wishlist';



class Userhome extends Component{
    render(){
        return(
            <Router>
            <div>
				   
			<nav class="navbar navbar-expand-sm bg-dark justify-content-center  sticky-top">
                  <ul class="navbar nav">
                   
                  
                  <li class="nav-item">
                    <Link to="/userprod">Products</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/modadd">Modify Address</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                 
                  </ul>
                </nav>
             

                    
					 <div class="row" style={{border:"5px solid black"}}>
					<div class="col-md-6" id="p2">
					<center><strong>About</strong></center>
					This is about the E-Comm buy<br />You are at the right place to buy differet things from differet <br />ocations,by remaining in the same location.
					</div>
					
					<div class="col-md-6" id="contact">
					<center><strong>Contact</strong></center>
					<a href="https://www.facebook.com/" id="fb">Facebook</a>
					<br />
					<a href="https://www.instagram.com/" id="insta">instagram</a><br />
					<a href="https://www.youtube.com/" id="youtube">Youtube</a><br />
					<a href="https://www.gmail.com/" id="em">Email</a><br />
					<a href="tel:1234567891" id="ph">Phone</a>
					</div>
					</div>
          <Switch>
            <Route path="/userprod" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/modadd" component={Modadd} />
            <Route path="/wishlist" component={Wishlist} />
           </Switch>
            </div>
            </Router>
        );
    }
}
export default Userhome;
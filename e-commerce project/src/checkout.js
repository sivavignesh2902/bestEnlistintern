import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import Payment from "./payment";

class Checkout extends  Component{
     paymentredirect(){
        window.open("/payment");

     }
    render(){
        return(
            <Router>
            <div>
            <center>
            <p>Enter Your Shipping Address</p>
            <div class="container" id="addfrom">
            <form>
            
             <label>Name</label><br />
            <input type="text" id="name" ></input><br />
            <label>Father's Name</label><br />
            <input type="text" id="name" ></input><br />
            <label>Door No.</label><br />
            <input type="number" id="name" ></input><br />
            <label>Address</label><br />
            <textarea type="text" id="name"></textarea>  <br /> 
            <label>Nearby Location</label><br />
            <input type="text" id="name" ></input><br />
            <label>Pincode</label><br />
            <input type="number" id="name" ></input><br />
            <label>District/City</label><br />
            <input type="text" id="name" ></input><br />
            <label>Country</label><br />
            <input type="text" id="name" placeholder="India" disabled></input><br />
            <br />
            (shipping is only available in India)<br/>
            <button class="btn btn-success" onClick={this.paymentredirect}>Proceed to Payment</button><br /><br />
            <button class="btn btn-secondary"onClick="">Reset</button><br/><br/>
            
            </form>   
            </div> 
            </center>
            <Switch>
                <Route path="/payment" component={Payment} />
            </Switch>
         
            </div>
            </Router>
        );
    }
}
export default Checkout;
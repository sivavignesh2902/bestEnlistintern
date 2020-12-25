import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import {BrowserRouter as Router,Route,Switch,Link, Redirect} from "react-router-dom";
import Blink from 'react-blink-text';
import logo1 from './images/debit.png';
import logo2 from './images/paytm.jpg';
import logo3 from './images/y.png';
import logo4 from './images/Phonepe.png';
import logo5 from './images/stripe.png';
import logo6 from './images/paypal.png';
import Login from './login';
import Genbill from "./generatebill";


class Payment extends Component{
	constructor(){
		super();
		this.state = {
			price: "3500"
		}
	}	
	loginredirect() {
		window.close(); 
	}
	generatebill(){
		window.open("/generatebill");
	}
	handleToken(token,addresses) {
		console.log({token,addresses});
	}

    

	render(){

		
		return(
			<Router>
				<div id="body" style={{ 
										marginLeft: "250px",
										marginRight: "250px",
										marginBottom: "20px"}}>
				<div id="top">
				<h1>E-Comm Services</h1>
				<Blink text="Shop arond the world"></Blink>
				

				</div>
				<div class="row" style={{	padding: "25px",
											border:  "5px solid green"}}>
				<div class="col-lg-8">
				<img src={logo1} id="debit" width="200px" style={{size: "25px"}} />
				</div>
				<div class="col-lg-3">
				<a href="https://onlinesbi.com/"><button class="btn btn-success">Pay</button></a>
				</div>
				</div>
				<div class="row" style={{	padding: "25px",
											border:  "5px solid green"}}>
				<div class="col-lg-8">
				<img src={logo2} id="paytm" width="200px"/>
				</div>
				<div class="col-lg-3">
				<a href="https://paytm.com/"><button class="btn btn-success">Pay</button></a>
				</div>
				</div>
				<div class="row" style={{	padding: "25px",
											border:  "5px solid green"}}>
				<div class="col-lg-8">
				<img src={logo3} id="googlep" width="200px"/>
				</div>
				<div class="col-lg-3">
					<button class="btn btn-success"><a href="https://googlepay.com/">Pay</a></button>
				</div>
				</div>
				<div class="row" style={{	padding: "25px",
											border:  "5px solid green"}}>
				<div class="col-lg-8">
				<img src={logo4} id="phonepe" width="200px"/>
				</div>
				<div class="col-lg-3">
					<button class="btn btn-success"><a href="https://phonepe.com/">Pay</a></button>
				</div>
				</div>
				<div class="row" style={{	padding: "25px",
											border:  "5px solid green"}}>
				<div class="col-lg-8">
				<img src={logo5} id="stripe" width="200px"/>
				</div>
				<div class="col-lg-3">
					<StripeCheckout 
					stripeKey="pk_test_51I1ueTAcs75eTRxZPkhR49hjjqtrCB4YyFPOVvSO5Nkt7wDlOVJBE35umsGMoiLwZAQ3mTter3Wc1lEwNGMhfPU2006qGEYevL"
					token={this.handleToken}
					billingAddress
					shippingAddress
					amount={this.state.price*100}/>
				</div>
				</div>
				<div class="row" style={{	padding: "25px",
											border:  "5px solid green"}}>
				<div class="col-lg-8">
				<img src={logo6} id="paypal" width="200px"/>
				</div>
				<div class="col-lg-3">
					<button class="btn btn-success"><a href="https://www.paypal.com/">Pay</a></button>
				</div>
	
				</div>
				<br/>
				<button className="btn btn-info" onClick={this.generatebill}>Generate Bill</button><br/><br/>
				<button class="btn btn-danger" onClick={this.loginredirect}>Exit Payment</button>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/generatebill" component={Genbill} />
				</Switch>
				</div>
				</Router>

			

			);
	}
}
export default Payment;

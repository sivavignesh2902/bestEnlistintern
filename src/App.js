import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import Login from './login';
import Wishlist from "./wishlist";
import About from "./about";
import Admin from './Admin';
import Prodmodify from './modifyproducts';
import App12 from "./AdminMainPage";
import Adminmodifyuser from "./adminmodifyuser";
import logo from "./images/large.png";
import Userhome from "./enduser";
import Payment from "./payment.js";
import Genbill from "./generatebill";
import Googleloginuser from "./usergooglelogin";
import Adminlogin from "./admingooglelogin"; 
import Faq from "./faq";
import Checkout from "./checkout.js";
import Products from './enduserproducts';
import Orders from "./orders";
import Modadd from './modadd';

class App extends Component{
	loginredirect(){
		window.open("/login");
	}
	render(){
		return(
			<Router>
				
				<div id="body">
				<img src={logo} width="150px"/>

					<nav class="navbar navbar-expand-sm bg-dark  justify-content-end sticky-top">
						<ul class="navbar nav">
						<li class="nav-item">
							<Link to="/about">About</Link>
						</li>
						<li class="nav-item">
							<Link to="/faq">FAQ</Link>
						</li>
						<li class="nav-item">
							<Link to="/login">Login/logout</Link>
						</li>
						</ul>
					</nav>
					
									
				<Switch>
				
					<Route path="/login" component={Login}/>
					<Route path="/admin" component={Admin} />
					<Route path="/adminmain" component={App12} />
					<Route path="/prodmodify" component={Prodmodify} />
					<Route path="/usermodify" component={Adminmodifyuser} />
					<Route path="/userhome" component={Userhome} />
					<Route path="/checkout" component={Checkout} />
					<Route path="/payment" component={Payment} />
					<Route path="/generatebill" component={Genbill} />
					<Route path="/usergoogle" component={Googleloginuser} />
					<Route path="/admingoogle" component={Adminlogin} />
					<Route path="/userprod" component={Products} />
					<Route path="/about" component={About} />
					<Route path="/faq" component={Faq} />
					<Route path="/orders" component={Orders} />
					<Route path="/modadd" component={Modadd} />
					<Route path="/wishlist" component={Wishlist} />




					
					
				</Switch>
				
				</div>
		
			</Router>
				
		

		 );
	}
}
export default App;

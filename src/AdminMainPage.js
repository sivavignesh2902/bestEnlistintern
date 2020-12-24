import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import Prodmodify from "./modifyproducts";
import Adminmodifyuser from './adminmodifyuser';
import Admin from './Admin';
import Login from './login';
class App12 extends Component{
	render(){
		return(
			<Router>
				<div id="body">
				<div id="head">
					
					</div>
					<nav class="navbar navbar-expand-sm bg-dark justify-content-center">
						<ul class="navbar nav" >
							
							
							<li class="nav-item active">
								<Link to="/admin">Registered Users</Link>
							</li>
							<li class="nav-item">
								<Link to="/adminmodifyuser">Modify User</Link>
							</li>
							<li class="nav-item">
								<Link to="/modifyproduct">Modify Product</Link>
							</li>
						
						</ul>
					</nav>
					
		
				<Switch>
	
					<Route path="/admin" component={Admin} />
					<Route path="/adminmodifyuser" component={Adminmodifyuser} />
					<Route path="/modifyproduct" component={Prodmodify} />
					<Route path="/login" component={Login} />
					
				</Switch>
				</div>
		
			</Router>
				
		

		 );
	}
}
export default App12;

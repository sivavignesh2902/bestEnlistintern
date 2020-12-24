import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './admin.css';
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import Adminmodifyuser from './adminmodifyuser';



class Admin extends Component{
	
	render(){
		
			
			
		
		return(
			<div>
			<div id="head">
			<h1>Hey Admin!</h1>
			<h3>Have a Happy Editing</h3>
			</div>
			<p>(Note:These are not real users. This table will hold real users once they get into the real world)</p>
			<div id="User content">
			<table class="table table-success">
			<thead>
				<tr>
				<th>S.No</th>
				<th>Name</th>
				<th>Username</th>
				<th>Latest Purchase</th>
				<th>Location</th>
				<th>Contact</th>
				<th>Email</th>

				</tr>
			</thead>	
				<tr>
				<th>1</th>
				<th>John</th>
				<th>John123</th>
				<th>Washing Machine</th>
				<th>Australia</th>
				<th>5485266125</th>
				<th>john123@gmail.com</th>
				</tr>
				<tr>
				<th>2</th>
				<th>Sam</th>
				<th>SamPaul23</th>
				<th>Trimmer</th>
				<th>New York</th>
				<th>12545823</th>
				<th>SamPaul15@gmail.com</th>
				</tr>
				<tr>
				<th>3</th>
				<th>Curran</th>
				<th>curr1234</th>
				<th>Jeans Pant</th>
				<th>America</th>
				<th>98511252</th>
				<th>curr1234@gmail.com</th>
				</tr>
				<tr>
				<th>4</th>
				<th>Watson</th>
				<th>watson125</th>
				<th>Knee cap</th>
				<th>Sri Lanka</th>
				<th>565482622</th>
				<th>watson125@gmail.com</th>
				</tr>
				<tr>
				<th>5</th>
				<th>Karam</th>
				<th>kara85</th>
				<th>Mobile</th>
				<th>thailand</th>
				<th>1212125636</th>
				<th>karam85@gmail.com</th>
				</tr>
			</table>
			<center>

				<Router>
				
					
				<Switch>
				<Route path="/adminmodifyuser" component={Adminmodifyuser} />
				</Switch>
			</Router>
		
			</center>
			</div>
	
			</div>
		);
	}
}
export default Admin;
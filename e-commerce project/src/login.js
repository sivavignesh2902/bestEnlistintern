import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import React,{ Component } from 'react';
import Blink from 'react-blink-text';
import logo from './images/image1.jpg';
import App12 from './AdminMainPage';
import Userhome from "./enduser";
import Googleloginuser from "./usergooglelogin";
import Adminlogin from "./admingooglelogin"; 


class Login extends Component {

renew(){
	
	window.open("/renew");
}
readmin(){
	window.open("/admingoogle");
}
reuser(){
	window.open("/usergoogle");
}

	
	render(){
	

			return(
					
					<div>
					<div>
					<center>
					<h1>E-Comm Services</h1>
					<Blink text="EC buy from anywhere" color="green" id="bl">
					</Blink>
					<p style={{fontSize:"25px"}}>Welcome to the <strong>login page</strong></p>
					</center>
					</div>
						
					
					<div class="row" id="newuser">
						<div style={{marginLeft:"280px"}}>
							<img src={logo} />
						</div>
					
				

					</div>
			
					<div id="choose1">
					<h3>You are?</h3><br />
					<div id="loginbutton">
					<a href="#adminlogin" style={{color:"yellow",fontFamily:"cursive"}}><button onClick={this.readmin}id="admin" className="btn btn-outline-dark" style={{padding:"5px",fontSize:"50px"}} >Admin</button></a>
					<br></br>
					<br></br>
					<a href="#enduser1" style={{color:"yellow",fontFamily:"cursive"}}><button onClick={this.reuser} id="enduser" style={{padding:"5px",fontSize:"50px"}} className="btn btn-outline-dark">New User/Login</button></a></div>
					</div>
					<br />
				
					
	

					<p></p>
					<div class="row" style={{textAlign:"center",fontSize:"32px"}}>
					<div className="col-lg-6" style={{borderTop:"5px dotted"}}>
					<center><strong>About</strong></center>
					This is about the E-Comm buy<br />You are at the right place to buy differet things from differet <br />ocations,by remaining in the same location.
					</div>
					
					<div className="col-lg-6" style={{borderTop:"5px dotted"}}>
					<center><strong>Contact</strong></center>
					<a href="https://www.facebook.com/" id="fb">Facebook</a>
					<br />
					<a href="https://www.instagram.com/" id="insta">instagram</a><br />
					<a href="https://www.youtube.com/" id="youtube">Youtube</a><br />
					<a href="https://www.gmail.com/" id="em">Email</a><br />
					<a href="tel:7397514277" id="ph">Phone</a>
					</div>
					</div>
					
					<Router>
					<Switch>
					<Route path="/userhome" component={Userhome} />
					<Route path="/adminmain" component={App12} />
 				
					
					</Switch>
					</Router>
				
					
					</div>
					
					
					
					);
	}
}
export default Login;
	
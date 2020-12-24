import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Adminmodifyuser extends Component{
	render(){
		
	
	
			function u1(){
					document.getElementById('usertable').deleteRow(1);
					alert("The user has been Remove successfully");
					}
			function u2(){
					document.getElementById('usertable').deleteRow(2);
					alert("The user has been Remove successfully");
					}
			function u3(){
					document.getElementById('usertable').deleteRow(3);
					alert("The user has been Remove successfully");
					}
			function u4(){
					document.getElementById('usertable').deleteRow(4);
					alert("The user has been Remove successfully");
					}
			function u5(){
					document.getElementById('usertable').deleteRow(5);
					alert("The user has been Remove successfully");
					}
			function u11(){
				window.prompt("Enter the modified value");
					}
			function u22(){
				window.prompt("Enter the modified value");
					}
			function u33(){
				window.prompt("Enter the modified value");
					}
			function u44(){
				window.prompt("Enter the modified value");
					}
			function u55(){
				window.prompt("Enter the modified value");
					}
	

					return(
		<div>
		<center>
		<h1>Here You can modify the details of the user</h1></center>
		<table class="table table-success" id="usertable">
		<thead>
			<tr>
			<th>S.No</th>
			<th>Name</th>
			<th>Username</th>
			<th>Latest Purchase</th>
			<th>Location</th>
			<th>Contact</th>
			<th>Email</th>
			<th>Modification</th>
			<th>Edit details</th>

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
				<th><button id="u1" onClick={u1} class="btn btn-danger">Remove user</button></th>
				<th><button id="u1" onClick={u11} class="btn btn-warning">Edit details</button></th>
			</tr>
			<tr>
			<th>2</th>
			<th>Sam</th>
			<th>SamPaul23</th>
			<th>Trimmer</th>
			<th>New York</th>
			<th>12545823</th>
			<th>SamPaul15@gmail.com</th>
				<th><button id="u2" onClick={u2} class="btn btn-danger">Remove user</button></th>
				<th><button id="u1" onClick={u22} class="btn btn-warning">Edit details</button></th>
			</tr>
			<tr>
			<th>3</th>
			<th>Curran</th>
			<th>curr1234</th>
			<th>Jeans Pant</th>
			<th>America</th>
			<th>98511252</th>
			<th>curr1234@gmail.com</th>
				<th><button id="u3" onClick={u3} class="btn btn-danger">Remove user</button></th>
				<th><button id="u1" onClick={u33} class="btn btn-warning">Edit detailsr</button></th>
			</tr>
			<tr>
			<th>4</th>
			<th>Watson</th>
			<th>watson125</th>
			<th>Knee cap</th>
			<th>Sri Lanka</th>
			<th>565482622</th>
			<th>watson125@gmail.com</th>
				<th><button id="u4" onClick={u4} class="btn btn-danger">Remove user</button></th>
				<th><button id="u1" onClick={u44} class="btn btn-warning">Edit details</button></th>
				</tr>
			<tr>
			<th>5</th>
			<th>Karam</th>
			<th>kara85</th>
			<th>Mobile</th>
			<th>thailand</th>
			<th>1212125636</th>
			<th>karam85@gmail.com</th>
			<th><button id="u5" onClick={u5} class="btn btn-danger">Remove User</button></th>

				<th><button id="u5" onClick={u55} class="btn btn-warning">Edit details</button></th>
				
			</tr>
		</table>
		
		</div>
		);
	}
	}
export default Adminmodifyuser;

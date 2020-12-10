import React from 'react';
function App() {

	function addition() {
		var x = document.getElementById('num1');
		var a = x.value;
		var y = document.getElementById('num2');
		var b = y.value;
		alert(Number(a)+Number(b));
	}
	function subtraction() {
		var x = document.getElementById('num1');
		var a = x.value;
		var y = document.getElementById('num2');
		var b = y.value;
		alert(Number(a)-Number(b));

	}
	function multiplication() {
		var x = document.getElementById('num1');
		var a = x.value;
		var y = document.getElementById('num2');
		var b = y.value;
		alert(Number(a)*Number(b));
	
	}
	function division() {
		var x = document.getElementById('num1');
		var a = x.value;
		var y = document.getElementById('num2');
		var b = y.value;
		alert(Number(a)/Number(b));

	}
	return(
		<center>
		<h1>React Calculator</h1>
	<div>
	Enter number 1 <br />
	<input type = "number" id="num1" />
	<br />
	Enter number 2<br />
	<input type = "number" id="num2" />
	<br />
	<br />
	<button onClick = {addition}>Add </button>
	<button onClick = {subtraction}>Subtract </button>
	<button onClick = {multiplication}>Multiply </button>
	<button onClick = {division}>divide</button>


	</div>
	</center>
	);
}
export default App;
	
import React from 'react';
function App() {
	function va() {
		 var x = document.getElementById('val');
		 alert(x.value);
	}	

	return(
	
		<center>
		<div>
		<input type="text" id="val"	placeholder="Enter a value"/>

		<br />
		
	

		<button onClick = {va}> 
		Get value
		</button>
		</div>
		</center>
		);
}
export default App;
	
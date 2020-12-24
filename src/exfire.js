import React,{ Component  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import firebase from "./firebase";
 class Exfire extends Component{
    handleClick = () => {
        alert("You have clicked")
        var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        
		var number = "+917397514277";
		firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e) {
			var code = prompt("enter the otp:",'');
			if(code === null) return;
			e.confirm(code).then(function(result){
                console.log(result.user);
                var code = prompt("enter the otp:",'');
				document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";
			}).catch(function(error){
				console.log(error);
            });
           
			
        })
      
 
	}
     render(){
         return(
             <div>
                 <label></label>
                 <div id="recaptcha"></div>
                 <button onClick={this.handleClick}>Click here</button> 
             </div>
         );
     }

 }
 export default Exfire;
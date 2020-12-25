import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import Admin from './Admin';

import firebase from "./firebase";
class Googlelogin extends Component{
    constructor(){
        super();
        this.state = {
            isLogIn: false,
            name:"",
            email:"",
            photo:"",
            
        }
    }
   
onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function(error) {
       console.log(error);
       
      });
}
onLogout = () => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      this.setState({
          isLogIn: false
      });
}
componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("user signed in");
          console.log(user.displayName + '\n' + user.email);
          this.setState({
            isLogIn: true,
            name: user.displayName,
            photo: user.photoURL,
            email: user.email,
          });
           
        }
        else {
          console.log("user not signed in");
        }
      });
};
readmin = () => {
  window.open("/admin");
}


    render(){
        return(
        <Router>
            <div>
            
            {this.state.isLogIn === false ?
              <div>
              <h5 className="text-center mb-4">Welcome to E-comm services</h5>
              <button
              type="button"
              className="btn btn-primary text-white w-100"
              onClick={this.onSubmit}>Login With Google</button>

              </div>
              
                :
                
                <div>            
                   <Admin />                  
                </div>
   
                
                
            
                
        }
        </div>
        </Router>
            
        );
    }
}
export default Googlelogin;
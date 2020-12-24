import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import App12 from './AdminMainPage';
import firebase from "./firebase";

class Adminlogin extends Component{
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
  alert("You are about to leave the Page");
    firebase.auth().signOut().then(function() {
        console.log("No user signned in");  
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
          console.log(user.displayName + '\n' + user.email + user.ddress);
        
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
  render(){
        return(
          <Router>
          <div>
          {this.state.isLogIn === false ?
            <div>
                <h1>Hey Admin!</h1>
                <h3>Login with your <strong>registered email</strong>(provided by our association)</h3>
                  <button className="btn btn-outline-success" onClick={this.onSubmit}>Login with Google</button>
                  </div>
              :
              <div>
              <div id="aboutyou" style={{border:"5px double black",marginLeft:"300px",marginRight:"300px"}}>
              
                      <img src={this.state.photo}></img>

                      <h3>{this.state.name}</h3>
                      <p>{this.state.email}</p>
                      </div>
                      <App12 />
               
         </div>
          
          }
              <switch>
            <Route path="/adminmain" component={App12} />
          </switch>
          </div>
      
          </Router> 
        );
    }
}
export default Adminlogin;
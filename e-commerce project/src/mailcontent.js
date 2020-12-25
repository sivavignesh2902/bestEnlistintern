import React,{ Component } from "react";
import emailjs from "emailjs-com";
import {BrowserRouter as Router,Route,Switch,Link, Redirect} from "react-router-dom";

import Mailbill from "./invoivemessage";


class Sendmail extends Component{
  
    render(){
        return(
            <Router>
            <div>
            <button class="btn btn-success" onClick={this.sentemail}><Link to="/sentmail">Send invoice to Mail</Link></button>
            <Switch>
                <Route path="/sentmail" component={Mailbill} />
            </Switch>
        
            </div>
            </Router>
        );
    }
}
export default Sendmail;
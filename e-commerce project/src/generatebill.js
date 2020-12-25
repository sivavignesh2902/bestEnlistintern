import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import emailjs from "emailjs-com";
import Blink from "react-blink-text";
import {BrowserRouter as Router,Route,Switch,Link, Redirect} from "react-router-dom";

 class Genbill extends Component{
    constructor(){
        super();
        this.state = {
            isGenerate: false
        }
    }
    sendEmail = (e) => {
        e.preventDefault();
       // alert("ggh")
        emailjs.sendForm('service_32zpl1k', 'template_en3htmj', e.target, 'user_ESn2ax6J4maBrSyQaxELQ')
          .then((result) => {
              console.log(result.text);
              console.log("Email sent");
              this.setState({
                isGenerate: true
              })
                
        
          }
          , (error) => {
              console.log(error.text);
              console.log("Email Not sent");
          });
        }
     
     
   
    
     render(){
        
        var rand = Math.floor((Math.random() * 10) + 1);
        var nowhour = new Date().getHours();
        var nowmin = new Date().getMinutes();
        var nowsec = new Date().getSeconds();
      


       
         return( 
            <Router>
                <div>
                {this.state.isGenerate === false ? 
                <div>
                E-Comm services  
                Bill No: #{rand}<br />
                Date: 12/08/2020<br/>This purchase is billed in {nowhour}:{nowmin}:{nowsec}<br/>
                Products: Jeans Pant * 1 = Rs.1099
                <form onSubmit={this.sendEmail}>
        
                    <button type="submit" className="btn btn-success">Send Mail</button><br></br>
                    <button type="reset" className="btn btn-warning">Reset</button>
                </form>
               
            </div> 
            :
            <div>
              E-Comm services  
                Bill No: #{rand}<br />
                Date: 12/08/2020<br/>This purchase is billed in {nowhour}:{nowmin}:{nowsec}<br/>
                Products: Jeans Pant * 1 = Rs.1099
                <Blink text="Email Has Been Successfully sent"></Blink>
            </div>   
            }
            </div>
            </Router>
             
         );
     }
 }
 export default Genbill;
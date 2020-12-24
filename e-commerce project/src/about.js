import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutim from "./images/aboutimkg.png";

class About extends Component{
    render(){
        return(
            <div style={{fontSize:"25px"}}> 
            <img src={aboutim} style={{width:"1000px"}}></img>          
            <div class="row" style={{border:"5px solid black"}}>
            <div class="col-md-6" id="p2">
            <center><strong>About</strong></center>
            This is about the E-Comm buy<br />You are at the right place to buy differet things from differet <br />ocations,by remaining in the same location.
            </div>
            <br></br>
            <div class="col-md-6" id="contact">
            <center><strong>Contact</strong></center>
            <a href="https://www.facebook.com/" id="fb">Facebook</a>
            <br />
            <a href="https://www.instagram.com/" id="insta">instagram</a><br />
            <a href="https://www.youtube.com/" id="youtube">Youtube</a><br />
            <a href="https://www.gmail.com/" id="em">Email</a><br />
            <a href="tel:1234567891" id="ph">Phone</a>
            </div>
            </div>
            </div>
        );
    }
}
export default About;
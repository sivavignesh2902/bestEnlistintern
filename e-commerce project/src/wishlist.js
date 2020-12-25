import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pant from "./images/jeans.jpg";


class Wishlist extends Component{
    render(){
        return(
            <div>
                <div id="prod1" class="container" style={{border: "2px solid rgba(34, 194, 132, 0.514)"}}>


 
<br />
    <img src={pant} width="100px"></img>
    <h2>Branded Jeans Pant</h2><br></br>
    <p>Rs.1099</p>
    <br />
    <br/>
    <br/>
  
</div>
<p>You Have very few in your wislist...<br></br>Don't miss the Year End Sale....</p>
</div>
        );
    }
}
export default Wishlist;
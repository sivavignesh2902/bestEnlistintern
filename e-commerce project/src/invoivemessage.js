import Blink from "react-blink-text";
import React, { Component } from "react";
class Mailbill extends Component{
    render(){
        return(
            <div>
            <Blink text="Invoice has been sent to your registered Mail"></Blink>
            <Blink text="Please keep track of your order using invoice number"></Blink>
            </div>
        );
    }
}
export default Mailbill;
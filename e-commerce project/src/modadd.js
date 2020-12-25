import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Modadd extends Component{
    constructor(){
        super();
        this.state = {
            isAddress: false,
            name:"",
            add1:"",
            add2:"",
            pin:""

        }
    }
    onLoad = () => {
        var x = prompt("Enter Name:");
        var y = prompt("Enter Address Line 1:");
        var z = prompt("Enter Address Line 2:");
        var a = prompt("Enter Pincode:");
        this.setState({
           isAddress: true,
           name:x,
           add1:y,
           add2:z,
           pin:a


       });

    }
       
      
   
        render(){
        return(
            <div>
                <h2>Your Address</h2> 
                {this.state.isAddress === false ?
                <div>
                You Did Not Add Address yet.....<br></br>
                <button className="btn btn-warning" onClick={this.onLoad}>Add Address</button>
                </div>
                :
                <div>
                    <p>{this.state.name},<br></br>
                    {this.state.add1},<br></br>
                    {this.state.add2},<br></br>
                    {this.state.pin}</p>.
                </div>    
            
            }
                
            </div>
        );
    }
}
export default Modadd;
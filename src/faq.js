import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Faq extends Component{
    query(){
        var y = prompt("How can we call you?")
        var x = prompt("Enter you Query...");
        document.getElementById('name').innerHTML = y;
        document.getElementById('qu').innerHTML = x;
    }
    render(){
        return(
            <div><br></br>
           
                <button className="btn btn-warning" onClick={this.query}>Leave a Query</button>
            
                    <div id="frequentqu">
                        <h1>Queries/FAQ's that might help you</h1>
                        <p>Name:Sam<br></br>I need a 2020 Macbook pro.When is the offer be available<br></br>Ans:"We will notify to your registered Email once the product gets into offer"</p>
                        <p>Name:Anay<br></br>I have ordered a Mobile phone.I need that before the expected delivery date<br></br>Ans:You have to ask the delivery company which they have sent the message</p>
                        <p>Name:Curran<br></br>I bought a seat cover for my car.It was tore when i opened it.What can I do?<br></br>Ans:Soory for that.You can place return for that order.We will definetely replace it</p>
                        <p>Name:Kem<br></br>When will my product arrive?<br></br>Ans:"We will notify you once it is shipped or you can track continuosly by logging in.."</p>
                    </div>
                    <h1>Your Queries</h1>
                    <div id="yourqueries">
                    <h3 id="name"></h3>
                    <p id="qu"></p></div> 
                    
            </div>
        );
    }
}
export default Faq;
import React,{ Component } from "react";
import * as emailjs from "emailjs-com";

class Justmail extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
              "gmail",
              "template_4ghmpzi",
              "justaform",
              "user_ESn2ax6J4maBrSyQaxELQ"
          )
          .then()
          .catch();
          this.setState({
              name: "",
              phone: "",
              email: "",
          });
    };
    render(){
        return(
            <div>
                <form 
                onSubmit = {this.handleSubmit.bind(this)} 
                className="justaform">
                    <div>
                        <label>Name</label>
                        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
                        <label>Phone Number</label>
                        <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}></input>
                        <label>Email</label>
                        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}></input>
                        <input type="submit"></input>
                    </div>
                 </form> 

            </div>
        );
    }
}
export default Justmail;
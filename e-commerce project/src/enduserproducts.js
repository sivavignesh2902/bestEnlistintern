import React,{Component} from "react";
import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import pant from "./images/jeans.jpg";
import shirt from "./images/shirt.png";
import watch from "./images/watch.png";
import trimmer from "./images/trimmer.jpg";
import tops from "./images/tops.jpg";
import green from "./images/Green.jpg";
import Checkout from "./checkout.js";


 class Products extends Component{
    Checkout() {
    
        window.open("/checkout");
    }
     wishlist(){
         alert("Item has been added to your wishlist");
     }
     render(){
         return(
             <Router>
             <div id="body"> 
                <div id="prod1" class="container" style={{border: "2px solid rgba(34, 194, 132, 0.514)"}}>


 
                <br />
                    <img src={pant} width="100px"></img>
                    <span class="badge badge-danger" id="span1" style={{position: "absolute",
    right:"165px"}}>New</span>
                    <span class="badge badge-warning" id="span2" style={{ position: "absolute",
    right:"125px"}}>offer</span>

                    <h2>Branded Jeans Pant</h2>
                    This is the one of the most refined jeans pant which lets you wear the whole day
                    <p>Rs.1099</p>
                    <br />
                    <br/>
                    <div class="row" style={{marginLeft: "375px"}}>

                        <div class="col-md-2">
                        <button class="btn btn-success" onClick={this.Checkout}>Buy Now</button>
                        </div>
                        <div class="col-md-4">
                             <button class="btn btn-warning" onClick={this.wishlist}>Add to Wishlist</button>
                             </div>
                            
                    </div>
                    <br/>
                </div>
                <div id="prod1" class="container" style={{border: "2px solid rgba(34, 194, 132, 0.514)"}}>
                <br />
                    <img src={shirt} width="100px"></img>
                    <span class="badge badge-danger" id="span1" style={{position: "absolute",
    right:"165px"}}>New</span>
                    <span class="badge badge-warning" id="span2" style={{ position: "absolute",
    right:"125px"}}>offer</span>

                    <h2>Branded Shirt Combo offer</h2>
                    This is the one of the most comfort Shirt which lets you wear the whole day
                    <p>Rs.1999</p>
                    <br />
                    <br/>
                    <div class="row" style={{marginLeft: "375px"}} >
                        <div class="col-md-2">
                        <button class="btn btn-success" onClick={this.Checkout}>Buy Now</button>
                        </div>
                        <div class="col-md-4">
                             <button class="btn btn-warning" onClick={this.wishlist}>Add to Wishlist</button>
                             </div>
                            
                    </div>
                    <br/>
                </div>
                <div id="prod1" class="container" style={{border: "2px solid rgba(34, 194, 132, 0.514)"}}>
                <br />
                    <img src={watch} width="100px"></img>
                    <span class="badge badge-danger" id="span1" style={{position: "absolute",
    right:"165px"}}>New</span>
                    <span class="badge badge-warning" id="span2" style={{ position: "absolute",
    right:"125px"}}>offer</span>

                    <h2>Voltar Watches</h2>
                    This is the most highly rated premium feel watches
                    <p>Rs.199</p>
                    <br />
                    <br/>
                    <div class="row" style={{marginLeft: "375px"}}>
                        <div class="col-md-2">
                        <button class="btn btn-success" onClick={this.Checkout}>Buy Now</button>
                        </div>
                        <div class="col-md-4">
                             <button class="btn btn-warning" onClick={this.wishlist}>Add to Wishlist</button>
                             </div>
                            
                    </div>
                    <br/>
                </div>
                <div id="prod1" class="container" style={{border: "2px solid rgba(34, 194, 132, 0.514)"}}>
                <br />
                    <img src={trimmer} width="100px"></img>
                    <span class="badge badge-danger" id="span1" style={{position: "absolute",
    right:"165px"}}>New</span>
                    <span class="badge badge-warning" id="span2" style={{ position: "absolute",
    right:"125px"}}>offer</span>

                    <h2>Sharp Trimmer</h2>
                    Cut the perfect and look perfect
                    <p>Rs.599</p>
                    <br />
                    <br/>
                    <div class="row" style={{marginLeft: "375px"}}>
                        <div class="col-md-2">
                        <button class="btn btn-success" onClick={this.Checkout}>Buy Now</button>
                        </div>
                        <div class="col-md-4">
                             <button class="btn btn-warning" onClick={this.wishlist}>Add to Wishlist</button>
                             </div>
                            
                    </div>
                    <br/>
                </div>
                <div id="prod1" class="container" style={{border: "2px solid rgba(34, 194, 132, 0.514)"}}>
                <br />
                    <img src={tops} width="100px"></img>
                    <span class="badge badge-danger" id="span1" style={{position: "absolute",
    right:"165px"}} >New</span>
                    <span class="badge badge-warning" id="span2" style={{ position: "absolute",
    right:"125px"}}>offer</span>

                    <h2>Girly Tops</h2>
                    Most soft after all the tops.Don't Miss It !
                    <p>Rs.989</p>
                    <br />
                    <br/>
                    <div class="row" style={{marginLeft: "375px"}} >
                        <div class="col-md-2">
                        <button class="btn btn-success" onClick={this.Checkout}>Buy Now</button>
                        </div>
                        <div class="col-md-4">
                             <button class="btn btn-warning" onClick={this.wishlist}>Add to Wishlist</button>
                             </div>
                            
                    </div>
                    <br/>
                </div>
                <div id="prod1" class="container" style={{border: "2px solid rgba(34, 194, 132, 0.514)"}}>
                    <br />
                    <img src={green} width="130px"></img>
                    <span class="badge badge-danger" id="span1" style={{position: "absolute",
    right:"165px"}}>New</span>
                    <span class="badge badge-warning" id="span2" style={{ position: "absolute",
    right:"125px"}}>offer</span>

                    <h2>Girly Tops</h2>
                    Most soft after all the tops.Don't Miss It !
                    <p>Rs.989</p>
                    <br />
                    <br/>
                    <div class="row" style={{marginLeft: "375px"}}>
                        <div class="col-md-2">
                        <button class="btn btn-success" onClick={this.Checkout}>Buy Now</button>
                        </div>
                        <div class="col-md-4">
                             <button class="btn btn-warning" onClick={this.wishlist}>Add to Wishlist</button>
                             </div>
                            
                    </div>
                    <br/>
                </div>
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                </Switch>
               
             </div>
             </Router>
         );
     }
 }
 export default Products;

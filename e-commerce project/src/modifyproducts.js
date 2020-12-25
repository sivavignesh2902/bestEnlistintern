import {BrowserRouter as Router,Route,Link,Navlink,Switch,Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import Blink from "react-blink-text";
 class Prodmodify extends Component
 {
    render(){
        function adprod() {
            var name = prompt("Enter the product name");
            document.getElementById('name').innerHTML = name;
            var pid = prompt("Enter the product ID");
            document.getElementById('pid').innerHTML = pid;
            var sell = prompt("Enter the seller");
            document.getElementById('seller').innerHTML = sell;
            var sold = prompt("Enter the Sold quantity");
            document.getElementById('sold').innerHTML = sold;
            var stock = prompt("Enter the Stock quantity");
            document.getElementById('stock').innerHTML = stock;



        }
        function y1(){
            document.getElementById('prodtable').deleteRow(1);
            alert("The item has been removed");
        }
        function y2(){
            document.getElementById('prodtable').deleteRow(2);
            alert("The item has been removed");
        }
        function y3(){
            document.getElementById('prodtable').deleteRow(3);
            alert("The item has been removed");
        }
        function y4(){
            document.getElementById('prodtable').deleteRow(4);
            alert("The item has been removed");
        }
        function y5(){
            document.getElementById('prodtable').deleteRow(5);
            alert("The item has been removed");
        }
        function y11(){
           window.prompt("Enter the modified value");
        }
        function y22(){
            window.prompt("Enter the modified value");
 
        }
        function y33(){
            window.prompt("Enter the modified value");

        }
        function y44(){
            window.prompt("Enter the modified value");

        }
        function y55(){
            window.prompt("Enter the modified value");

        }
        return(
            <div>
                <center>
              
					<b>Modify Products</b>
                </center>
                <table id="prodtable" class="table table-info" style={{textAlign:"start"}}>
                   
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Product Id</th>
                            <th>Seller</th>
                            <th>Total sold</th>
                            <th>In Stock</th>
                            <th>remove Product</th>
                            <th>modify product details</th>

                            </tr>
                        </thead>
                        <tr>
                            <th>Shirt(F.S)</th>
                            <th>#1256</th>
                            <th>SSS textiles</th>
                            <th>500</th>
                            <th>25</th>
                            <th><button class="btn btn-primary" onClick={y1}>remove Product</button></th>
                            <th><button class="btn btn-primary" onClick={y11}>modify product details</button></th>
                        </tr>
                        <tr>
                            <th>Pant</th>
                            <th>#56566</th>
                            <th>ABC textiles</th>
                            <th>50</th>
                            <th>250</th>
                            <th><button class="btn btn-primary" onClick={y2}>remove Product</button></th>
                            <th><button class="btn btn-primary" onClick={y22}>modify product details</button></th>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <th>#200025056</th>
                            <th>SMS Mobiles</th>
                            <th>5000</th>
                            <th>250</th>
                            <th><button class="btn btn-primary" onClick={y3}>remove Product</button></th>
                            <th><button class="btn btn-primary" onClick={y33}>modify product details</button></th>
                        </tr>
                        <tr>
                            <th>Cricket Bat</th>
                            <th>#56</th>
                            <th>Sports Station</th>
                            <th>5000</th>
                            <th>2500</th>
                            <th><button class="btn btn-primary" onClick={y4}>remove Product</button></th>
                            <th><button class="btn btn-primary" onClick={y44}>modify product details</button></th>
                        </tr>
                        <tr>
                            <th>Kids Toys</th>
                            <th>#61235</th>
                            <th>DSA Toys</th>
                            <th>50</th>
                            <th>01</th>
                            <th><button class="btn btn-primary" onClick={y5}>remove Product</button></th>
                            <th><button class="btn btn-primary" onClick={y55}>modify product details</button></th>
                        </tr>

                        <tr>
                            <th id="name"></th>
                            <th id="pid"></th>
                            <th id="seller"></th>
                            <th id="sold"></th>
                            <th id="stock"></th>
                        </tr>
                        
                </table>
                <center>
                        <button className="btn btn-secondary" onClick={adprod} style={{opacity:"1"}}>Click to add products</button>

                        </center>
                    
            </div>
        );
    }
 }
 export default Prodmodify;
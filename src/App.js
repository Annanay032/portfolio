
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
//import ProductListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen.js';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import OrderScreen from './screens/OrderScreen';
import Mod from "./Model";
import Brandmod from './Brandmod';
import Prodmod from './Prodmod';
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
        <Link className="brand" to="/">Aerchain</Link>
        </div>
     
        <div className="header_option">
        <span className="header_option_LineOne"></span>
        <span className="header_option_LineTwo"><Mod /></span>
      </div>

      <div className="header_option">
          <span className="header_option_LineOne"></span>
          <span className="header_option_LineTwo"><Brandmod/></span>
        </div>

        <div className="header_option">
        <span className="header_option_LineOne"></span>
        <span className="header_option_LineTwo"><Prodmod/></span>
      </div>


        <div>
         
          <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/products/:id" component={ProductScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
       <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
      
         
       
             
      </main>
      <footer className="row center">Annanay Sharma</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

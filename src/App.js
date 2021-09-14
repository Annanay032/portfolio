import React, { useEffect, useState } from "react";
import ReactNotifications from "react-notifications-component";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
//import ProductListScreen from './screens/ProductListScreen';
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen.js";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import OrderScreen from "./screens/OrderScreen";
import Mod from "./Model";
import Brandmod from "./Brandmod";
import Prodmod from "./Prodmod";
// import SearchBar from "./components/SearchBar";
// import axios from "../node_modules/axios/index";
import BrandScreen from "./screens/BrandScreen";
import CatScreen from "./screens/CatScreen";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // const [searchItems, setSearchItems] = useState([]);

  // useEffect(() => {
  //   async function getCharacters() {
  //     const { data } = await axios.get("api/products");
  //     // const response = await fetch("api/category");
  //     // const body = await response.json();
  //     // setItems(body.results.map(({ title }) => ({ value: title })));
  //     setSearchItems(data);
  //   }
  //   getCharacters();
  // }, []);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <ReactNotifications />
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Aerchain
            </Link>
          </div>

          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>

          <div>
            <Link className="categories" to="/category">
              Categories
            </Link>
          </div>
          <div>
            <Link className="brands" to="/brand">
              Brands
            </Link>
          </div>

          <div className="header_option">
            <span className="header_option_LineOne"></span>
            <span className="header_option_LineTwo">
              <Mod />
            </span>
          </div>

          <div className="header_option">
            <span className="header_option_LineOne"></span>
            <span className="header_option_LineTwo">
              <Brandmod />
            </span>
          </div>

          <div className="header_option">
            <span className="header_option_LineOne"></span>
            <span className="header_option_LineTwo">
              <Prodmod />
            </span>
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
          <Route path="/checkout" component={OrderScreen}></Route>
          <Route path="/category" component={CatScreen}></Route>
          <Route path="/brand" component={BrandScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route
            path="/search/title/:title?"
            component={SearchScreen}
            exact
          ></Route>
        </main>
        <footer className="row center">Annanay Sharma</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

//     <div className="searchIt">
//   <SearchBar placeholder="Enter a Product Name..." data={searchItems} />
// </div>
// path="/search/title/:title?"
import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shoppage.component";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/shop">SHOP</Link>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;

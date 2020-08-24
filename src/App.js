import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shoppage.component";
import { Switch, Route, Link } from "react-router-dom";
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import "./App.css";
import Shopping from "./Pages/Shopping/Shopping";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shopping/:category" component={Shopping} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

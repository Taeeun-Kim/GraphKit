import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

import Prices from "../Screens/Prices";


export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
  
    </Router>
  );
};

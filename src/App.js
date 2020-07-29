import React from "react";
import { Route } from "react-router-dom";
import world from "./components/World/world";

const App = () => {
  return <Route path="/world" component={world} />;
};

export default App;

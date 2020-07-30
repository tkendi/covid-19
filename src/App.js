import React from "react";
import { Route, Link } from "react-router-dom";
import world from "./components/World/world";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/world">Word</Link>
        </li>
      </ul>
      <Route path="/world" exact={true} component={world} />
    </div>
  );
};

export default App;

import React from "react";
import { Route, Link } from "react-router-dom";
import world from "./components/World/world";
import korea from './components/Korea/korea'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/world">Word</Link>
        </li>
        <li>
          <Link to = "/korea">Korea</Link>
        </li>
      </ul>
      <Route path = "/korea" component={korea} />
      <Route path="/world" exact={true} component={world} />
    </div>
  );
};

export default App;

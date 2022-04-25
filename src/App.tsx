import React from "react";
import { Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
    </div>
  );
};

export default App;

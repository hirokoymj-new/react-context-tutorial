import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserProvider } from "./UserProvider";

const App = () => {
  return (
    <Router>
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
        <UserProvider>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserProvider>
      </div>
    </Router>
  );
};

export default App;

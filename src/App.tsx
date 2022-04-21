import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserProvider } from "./UserProvider";

function AppRouter() {
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
}

export default AppRouter;

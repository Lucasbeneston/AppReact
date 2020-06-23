import React from 'react';
import Home from "./Home";
import Contact from "./Contact";
import Post from "./Post";
import { Switch, Route } from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    )
}

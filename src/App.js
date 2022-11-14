import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./ui/navbar";
import Todo from "./ui/Todo";



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/:edit?" component={Todo}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  )
}

export default App;

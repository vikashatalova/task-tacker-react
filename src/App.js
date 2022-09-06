import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./layots/login";
// import MainPage from "./layots/mainPage";
// import TodoList from "./ui/listTodo";
import Navbar from "./ui/navbar";
import Todo from "./ui/Todo";



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/:edit?" component={Todo}></Route>
        <Route path="/login" component={Login}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  )
}

export default App;

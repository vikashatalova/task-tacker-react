import React, { useState } from "react";
import AddTodo from "./addTodo";
import TodoList from "./listTodo";


const Todo = () => {
    const [todo, setTodo] = useState([
    {
        id: 1,
        title: "first todo",
        status: true
    },
    {
        id: 2,
        title: "second todo",
        status: true
    },
    {
        id: 3,
        title: "third todo",
        status: false
    }
])
    return ( 
        <>
            <AddTodo setTodo={setTodo} todos={todo}/>
            <TodoList todos={todo} setTodo={setTodo}/>
        </>
     );
}
 
export default Todo;
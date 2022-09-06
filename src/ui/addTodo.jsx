import React, { useState } from "react";
import { nanoid } from "nanoid";
import s from "./todoList.module.css"

const AddTodo = ({todos,setTodo}) => {
    const [value, setValue] = useState("");
    const saveTodo = () => {
        if (value) {
                setTodo(
                [...todos, {
                    id: nanoid(),
                    title: value,
                    status: true
                }]
            );
            setValue("");
        }
    }
    return ( 
        <div className="container input-group d-flex justify-content-center mb-5 mt-5">
            <input 
                // className="form-control" 
                className={s.inputAddTodo}
                placeholder="Enter the task" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />
            <button className={s.btnAddTodo} onClick={saveTodo}>
                <i className="bi bi-plus-lg"></i>
            </button>
        </div>
     );
}
 
export default AddTodo;
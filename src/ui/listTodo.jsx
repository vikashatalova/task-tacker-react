import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./todoList.module.css";


const TodoList = ({ todos, setTodo }) => {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");
    const [filter, setFilter] = useState(todos);
    const params = useParams();
    console.log(params);
    const buttonStatus = [
        {status: 'all', name: 'все'},
        {status: true, name: 'открытые'},
        {status: false, name: 'закрытые'}
    ];

    useEffect(() => {
        setFilter(todos)
    }, [todos]);

    const deleteTodo = (id) => {
        const newTodo = [...todos].filter(item => item.id !== id);
        setTodo(newTodo);
    }
    const statusTodo = (id) => {
        const newTodo = [...todos].filter((item) => {
            if (item.id === id) {
                item.status = !item.status;
            }
            return item;
        })
        setTodo(newTodo);
        console.log(newTodo);
    }
    const editTodo = (id, title) => {
        setEdit(id);
        setValue(title);
    }
    const saveTodo = (id) => {
        const newTodo = [...todos].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo);
        setEdit(null);
    }
    const todoFilter = (status) => {
        if (status === 'all') {
            setFilter(todos)
        } else {
            const newTodo = [...todos].filter(item => item.status === status);
            setFilter(newTodo);
        }
    }
    
    return (
        <> 
            
            <div className="container list-group">
                <div className={s.buttonGroup}>
                {buttonStatus.map((b) => 
                    <span 
                        className={s.span}
                        onClick={() => todoFilter(b.status)}>{b.name}
                    </span>
                )}
                </div>
                {filter.map(item => (
                <div key={item.id} className={s.todoBlock}>
                        {
                            edit === item.id ? 
                            <div className="container">
                                <input className="form-control justify-content-center m-2" onChange={(e) => setValue(e.target.value)} value={value}/> 
                            </div> : <h5 className="d-flex justify-content-center mb-2 mt-2">{item.title}</h5>
                        }
                        {
                            edit === item.id ? 
                            <div>
                                <button className="btn btn-outline-secondary mt-3" onClick={() => saveTodo(item.id)}>Save</button>
                            </div> : 
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => deleteTodo(item.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                                <button className="btn btn-outline-secondary btn-sm mx-3" onClick={() => editTodo(item.id, item.title)}>
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => statusTodo(item.id)}>
                                { item.status ? <i className="bi bi-unlock"></i> : <i className="bi bi-lock"></i>}
                                </button>
                            </div>
                        }
                        
                </div>
                ))}
            </div>
        </>
    );
}
 
export default TodoList;


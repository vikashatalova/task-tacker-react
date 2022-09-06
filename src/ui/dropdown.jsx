import React, { useState } from 'react';
import s from "./todoList.module.css";


const DropDown = ({ selected, setSelected, todoFilter }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ['Все', 'Открытые', 'Закрытые']
    // const options = [
    //     {id: 1, status: 'all', name:'Все'}, 
    //     {id: 2, status: true, name:'Открытые'},
    //     {id: 3, status: false, name:'Закрытые'}
    // ]
    return ( 
        <div className={s.dropdown}>
            <div className={s.dropdownBtn} onClick={() => setIsActive(!isActive)}>
                {selected}
                <span><i className="bi bi-arrow-down-short"></i></span>
            </div>
            {isActive && 
                <div className={s.dropdownContent}>
                    {options.map(option => (
                        <div className={s.dropdownItem} 
                            onClick={() => {
                                setSelected(option)
                                setIsActive(false)
                                todoFilter()
                            }}
                            >
                            {option}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
 
export default DropDown

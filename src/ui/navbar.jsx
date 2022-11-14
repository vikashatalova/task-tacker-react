import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="/">Todos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </header>
    );
}
 
export default Navbar;
import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (

        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><i className="material-icons">lightbulb_outline</i>Google Books</a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/"><i className="material-icons">search</i></NavLink></li> 
            <li><NavLink to="/save"><i className="material-icons">favorite</i></NavLink></li>  
          </ul>
        </div>
      </nav>
    );
}
 
export default Navigation;

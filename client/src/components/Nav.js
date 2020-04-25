import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Search</NavLink>
          <NavLink to="/save">Save</NavLink>
       </div>
    );
}
 
export default Navigation;

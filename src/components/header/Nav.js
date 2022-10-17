import React from "react";

const Nav = ({ navActive, setNavActive }) => {
   const onClick = () => {
      setNavActive(false);
   };

   return (
      <div className={`overlay ${navActive && "active"}`}>
         <nav className="menu" id="menu">
            <div className="menu-item collections" onClick={onClick}>
               Collections
            </div>
            <div className="menu-item men" onClick={onClick}>
               Men
            </div>
            <div className="menu-item women" onClick={onClick}>
               Women
            </div>
            <div className="menu-item about" onClick={onClick}>
               About
            </div>
            <div className="menu-item contact" onClick={onClick}>
               Contact
            </div>
         </nav>
      </div>
   );
};

export default Nav;

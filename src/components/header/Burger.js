import React from "react";

const Burger = ({ navActive, setNavActive }) => {
   const toogleBurger = () => {
      setNavActive(!navActive);
   };

   return (
      <label htmlFor="burger-checkbox" className="hamburger" onClick={toogleBurger}>
         <span className={`line line-top ${navActive && "active"}`}></span>
         <span className={`line line-inner ${navActive && "active"}`}></span>
         <span className={`line line-bottom ${navActive && "active"}`}></span>
      </label>
   );
};

export default Burger;

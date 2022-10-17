import React, { useState } from "react";
import Burger from "./Burger";
import Cart from "./Cart";
import Logo from "./Logo";
import Nav from "./Nav";
import Profile from "./Profile";

const Header = () => {
   const [navActive, setNavActive] = useState(false);

   return (
      <header className="header">
         <div className="navigation">
            <Burger navActive={navActive} setNavActive={setNavActive} />
            <Nav navActive={navActive} setNavActive={setNavActive} />
            <Logo />
         </div>

         <div className="cart-profile">
            <Cart />
            <Profile />
         </div>
      </header>
   );
};

export default Header;

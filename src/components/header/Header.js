import React, { useState } from "react";
import Burger from "./Burger";
import Cart from "./Cart";
import Logo from "./Logo";
import Nav from "./Nav";
import CartItem from "./CartItem";
import CartNotif from "./CartNotif";
import Profile from "./Profile";

const Header = ({ state, dispatch }) => {
   const [navActive, setNavActive] = useState(false);
   const [cartOpen, setCartOpen] = useState(false);

   return (
      <header className="header">
         <div className="navigation">
            <Burger navActive={navActive} setNavActive={setNavActive} />
            <Nav navActive={navActive} setNavActive={setNavActive} />
            <Logo />
         </div>

         <div className="cart-profile">
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <CartNotif cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <Profile />
         </div>

         <CartItem cartOpen={cartOpen} />
      </header>
   );
};

export default Header;

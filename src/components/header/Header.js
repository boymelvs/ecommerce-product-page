import React, { useState } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import Nav from "./Nav";
import { CartIcon } from "../../svg";
import CartItem from "./CartItem";
import CartNotif from "./CartNotif";
import Profile from "./Profile";

const Header = ({ state, dispatch }) => {
   const { cart } = state;
   const [navActive, setNavActive] = useState(false);
   const [cartOpen, setCartOpen] = useState(false);

   const cartClick = () => {
      setCartOpen(!cartOpen);
   };

   return (
      <header className="header">
         <div className="navigation">
            <Burger navActive={navActive} setNavActive={setNavActive} />
            <Nav navActive={navActive} setNavActive={setNavActive} />
            <Logo />
         </div>

         <div className="cart-profile">
            <div className="cart-container">
               <CartIcon onClick={cartClick} />
            </div>

            {cart.qty > 0 && <CartNotif cartOpen={cartOpen} setCartOpen={setCartOpen} cart={cart} />}
            <Profile />
         </div>

         <CartItem cartOpen={cartOpen} setCartOpen={setCartOpen} state={state} dispatch={dispatch} />
      </header>
   );
};

export default Header;

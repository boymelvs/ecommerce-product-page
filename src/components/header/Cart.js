import React from "react";
import { CartIcon } from "../../svg/index";

const Cart = ({ cartOpen, setCartOpen }) => {
   const cartClick = () => {
      setCartOpen(!cartOpen);
   };

   return (
      <div className="cart-container">
         <CartIcon onClick={cartClick} />
      </div>
   );
};

export default Cart;

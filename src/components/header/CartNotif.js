import React from "react";

const CartNotif = ({ cartOpen, setCartOpen, cart }) => {
   const cartClick = () => {
      setCartOpen(!cartOpen);
   };

   return (
      <div className="cart-notification" onClick={cartClick}>
         <div className="item-qty">{cart.qty}</div>
      </div>
   );
};

export default CartNotif;

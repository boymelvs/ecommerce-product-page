import React from "react";

const CartNotif = ({ cartOpen, setCartOpen }) => {
   const cartClick = () => {
      setCartOpen(!cartOpen);
   };

   return (
      <div className="cart-notification" onClick={cartClick}>
         <div className="item-qty">2</div>
      </div>
   );
};

export default CartNotif;

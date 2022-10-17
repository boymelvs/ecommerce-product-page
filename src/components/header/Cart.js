import React from "react";
import cartImg from "../../assets/images/icon-cart.svg";

const Cart = () => {
   return (
      <div className="cart-container">
         <img src={cartImg} alt="cart" />
      </div>
   );
};

export default Cart;

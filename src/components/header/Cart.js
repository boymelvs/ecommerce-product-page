import React from "react";
import cartImg from "../../assets/images/icon-cart.svg";

const Cart = ({ cartOpen, setCartOpen }) => {
   const cartClick = () => {
      setCartOpen(!cartOpen);
   };

   return (
      <div className="cart-container">
         <img src={cartImg} alt="cart" onClick={cartClick} />
      </div>
   );
};

export default Cart;

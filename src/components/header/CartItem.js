import React from "react";
import itemPhoto from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteBtn from "../../assets/images/icon-delete.svg";

const CartItem = ({ cartOpen }) => {
   return (
      <div className={`cart-modal ${cartOpen && "active"}`}>
         <div className="cart-item-container">
            <div className="cart-text">Cart</div>

            <div className="item-container">
               {false ? (
                  <div className="empty-text">Your cart is empty</div>
               ) : (
                  <>
                     <div className="items">
                        <img src={itemPhoto} className="item-photo" alt="item" />

                        <div className="description">
                           <div className="item-name">Fall Limited Edition Sneakers</div>

                           <div className="item-price">
                              $<span className="price">125.00 </span>x<span className="qty"> 3 </span> <span className="total">$375</span>
                           </div>
                        </div>

                        <img src={deleteBtn} className="delete" alt="delete" />
                     </div>

                     <button type="button" className="checkout">
                        Checkout
                     </button>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default CartItem;

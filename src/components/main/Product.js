import React from "react";
import { CartIcon, Plus, Minus } from "../../svg/index";

const Product = () => {
   return (
      <div className="product">
         <div className="company-name">SNEAKERS COMPANY</div>
         <div className="product-name">Fall Limited Edition Sneakers</div>
         <div className="product-description">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
         </div>

         <div className="product-price-container">
            <div className="product-price">
               <span className="price">$125.00</span>
               <span className="discount">50%</span>
            </div>

            <div className="before-price">$250.00</div>
         </div>

         <div className="btn-container">
            <div className="qty">
               <button type="button" className="qty-btn minus">
                  <Minus />
               </button>

               <span className="qty-count">0</span>

               <button type="button" className="qty-btn plus">
                  <Plus />
               </button>
            </div>

            <button type="button" className="add-cart">
               <CartIcon />
               <span>Add to cart</span>
            </button>
         </div>
      </div>
   );
};

export default Product;

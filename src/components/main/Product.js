import React, { useState } from "react";
import { CartIcon, Plus, Minus } from "../../svg/index";

const Product = ({ state, dispatch }) => {
   const { products } = state;
   const [qty, setQty] = useState(0);

   const addCart = () => {
      dispatch({
         type: "CHANGE_CART_QTY",
         payload: { products, qty },
      });
   };

   const changeQty = (e) => {
      if (e.target.id === "minus") {
         if (qty === 0) return;
         setQty(qty - 1);
      }

      if (e.target.id === "plus") {
         setQty(qty + 1);
      }
   };

   return (
      <div className="product">
         {products.map((product, index) => {
            return (
               <div className="product-info" key={index}>
                  <div className="company-name">{product.company_name}</div>
                  <div className="product-name">{product.product_name}</div>
                  <div className="product-description">{product.product_description}</div>

                  <div className="product-price-container">
                     <div className="product-price">
                        <span className="price">${product.price}</span>
                        <span className="discount">{product.discount}%</span>
                     </div>

                     <div className="before-price">${product.price_before}</div>
                  </div>
               </div>
            );
         })}

         <div className="btn-container">
            <div className="qty">
               <button type="button" className="qty-btn minus" id="minus" onClick={(e) => changeQty(e)}>
                  <Minus />
               </button>

               <span className="qty-count">{qty}</span>

               <button type="button" className="qty-btn plus" id="plus" onClick={(e) => changeQty(e)}>
                  <Plus />
               </button>
            </div>

            <button type="button" className="add-cart" onClick={addCart}>
               <CartIcon />
               <span>Add to cart</span>
            </button>
         </div>
      </div>
   );
};

export default Product;

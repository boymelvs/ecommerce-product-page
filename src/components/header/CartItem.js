import React from "react";
import { Delete } from "../../svg/index";

const CartItem = ({ cartOpen, setCartOpen, state, dispatch }) => {
   const { products, cart } = state;

   const removeItem = () => {
      dispatch({
         type: "REMOVE_FROM_CART",
         payload: [],
      });

      setCartOpen(false);
   };

   return (
      <div className={`cart-modal ${cartOpen && "active"}`}>
         <div className="cart-item-container">
            <div className="cart-text">Cart</div>

            <div className="item-container">
               {!cart.qty ? (
                  <div className="empty-text">Your cart is empty</div>
               ) : (
                  <>
                     {products.map((product, index) => {
                        return (
                           <div className="items" key={index}>
                              <img src={product.imgLarges[0]} className="item-photo" alt="item" />

                              <div className="description">
                                 <div className="item-name">{product.product_name}</div>

                                 <div className="item-price">
                                    <span className="price">${product.price} </span>x<span className="qty"> {cart.qty} = </span>
                                    <span className="total">${(Number(product.price) * cart.qty).toFixed(2)}</span>
                                 </div>
                              </div>

                              <Delete onClick={removeItem} />
                           </div>
                        );
                     })}

                     <button type="button" className="checkoutBtn">
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

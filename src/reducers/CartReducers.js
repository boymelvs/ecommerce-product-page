const CartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_PRODUCTS":
         return { ...state, products: action.payload };

      case "REMOVE_FROM_CART":
         return { ...state, cart: [] };

      case "CHANGE_CART_QTY":
         return { ...state, cart: { qty: action.payload.qty, products: action.payload.products } };

      default:
         break;
   }
};

export default CartReducer;

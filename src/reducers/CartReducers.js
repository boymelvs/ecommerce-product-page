const CartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_CART":
         return { ...state, cart: [{ ...action.payload }, ...state.cart] };

      case "REMOVE_FROM_CART":
         return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) };

      case "CHANGE_CART_QTY":
         return { ...state, cart: state.cart.filter((c) => (c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)) };

      default:
         break;
   }
};

export default CartReducer;
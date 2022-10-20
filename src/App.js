import React, { useReducer } from "react";
import CartReducer from "./reducers/CartReducers";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
   const [state, dispatch] = useReducer(CartReducer, { products: [], cart: [] });

   return (
      <div className="container">
         <Header state={state} dispatch={dispatch} />
         <Main />
      </div>
   );
}

export default App;

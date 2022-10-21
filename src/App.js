import React, { useReducer, useEffect } from "react";
import CartReducer from "./reducers/CartReducers";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { FetchData } from "./components/utils/FetchData";

function App() {
   const [state, dispatch] = useReducer(CartReducer, { products: FetchData(), cart: [] });

   useEffect(() => {
      dispatch({ type: "ADD_PRODUCTS", payload: FetchData() });
   }, []);

   return (
      <div className="container">
         <Header state={state} dispatch={dispatch} />
         <Main state={state} dispatch={dispatch} />
         <Footer />
      </div>
   );
}

export default App;

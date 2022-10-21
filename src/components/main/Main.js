import React from "react";
import Gallery from "./Gallery";
import Product from "./Product";

const Main = ({ state, dispatch }) => {
   return (
      <main>
         <Gallery state={state} />
         <Product />
      </main>
   );
};

export default Main;

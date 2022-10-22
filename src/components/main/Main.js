import React, { useState } from "react";
import Gallery from "./Gallery";
import Product from "./Product";
import ModalGallery from "./ModalGallery";

const Main = ({ state, dispatch }) => {
   const { products } = state;
   const imgLarges = products.length > 0 ? products[0].imgLarges : "";
   const [idx, setIdx] = useState(0);
   const [openModal, setOpenModal] = useState(false);

   const smallImgClick = (index) => {
      setIdx(index);
   };

   const prevNextClick = (e, index) => {
      const value = e.target;

      if (value.id === "next" && index < imgLarges.length - 1) {
         setIdx(index + 1);
      }

      if (value.id === "prev" && index > 0) {
         setIdx(index - 1);
      }
   };

   return (
      <main>
         {openModal && <ModalGallery state={state} setOpenModal={setOpenModal} idx={idx} smallImgClick={smallImgClick} prevNextClick={prevNextClick} />}

         <Gallery state={state} idx={idx} setOpenModal={setOpenModal} smallImgClick={smallImgClick} prevNextClick={prevNextClick} />
         <Product state={state} dispatch={dispatch} />
      </main>
   );
};

export default Main;

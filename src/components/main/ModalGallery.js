import React from "react";
import { Next, Previous, Close } from "../../svg/index";

const ModalGallery = ({ state, setOpenModal, idx, smallImgClick, prevNextClick }) => {
   const { products } = state;
   const imgLarges = products.length > 0 ? products[0].imgLarges : "";
   const imgSmalls = products.length > 0 ? products[0].imgSmall : [];

   const closeModal = (e) => {
      if (e.target.id === "modal" || e.target.id === "close") setOpenModal(false);
   };

   return (
      <div className="modal-gallery" id="modal" onClick={(e) => closeModal(e)}>
         <div className="images-container">
            <Close className="close" id="close" onClick={(e) => closeModal(e)} />
            <img src={imgLarges[idx]} className="product-image-large" alt="Product" />

            <div className="thumbnail-gallery">
               {imgSmalls.map((imgSmall, index) => {
                  return (
                     <div className={`product-image-small ${index === idx && "active"}`} key={index} onClick={() => smallImgClick(index)}>
                        <img src={imgSmall} alt="Product" />
                     </div>
                  );
               })}
            </div>

            <Previous className="btnArrow" id="prev" onClick={(e) => prevNextClick(e, idx)} />

            <Next className="btnArrow" id="next" onClick={(e) => prevNextClick(e, idx)} />
         </div>
      </div>
   );
};

export default ModalGallery;

import React, { useRef } from "react";
import { Next, Previous } from "../../svg/index";

const Gallery = ({ state, idx, setOpenModal, smallImgClick, prevNextClick }) => {
   const { products } = state;
   const imgLarges = products.length > 0 ? products[0].imgLarges : "";
   const imgSmalls = products.length > 0 ? products[0].imgSmall : [];
   const thumbnailElem = useRef();

   const largeImgClick = (elem) => {
      const observer = new IntersectionObserver((entry) => {
         console.log(entry[0]);
         if (entry[0].boundingClientRect.width > 0 && entry[0].isIntersecting) {
            setOpenModal(true);
         }

         if (!entry[0].isIntersecting) {
            observer.unobserve(entry[0].target);
         }
      });

      observer.observe(elem);
   };

   return (
      <div className="gallery">
         <div className="images-container">
            <img src={imgLarges[idx]} className="product-image-large" alt="" onClick={() => largeImgClick(thumbnailElem.current)} />

            <div className="thumbnail-gallery" ref={thumbnailElem}>
               {imgSmalls.map((imgSmall, index) => {
                  return (
                     <div className={`product-image-small ${idx === index && "active"}`} key={index} onClick={() => smallImgClick(index)}>
                        <img src={imgSmall} alt="" />
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

export default Gallery;

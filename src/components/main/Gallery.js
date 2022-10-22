import React from "react";
import { Next, Previous } from "../../svg/index";

const Gallery = ({ state, idx, largeImgClick, smallImgClick, prevNextClick }) => {
   const { products } = state;
   const imgLarges = products.length > 0 ? products[0].imgLarges : "";
   const imgSmalls = products.length > 0 ? products[0].imgSmall : [];

   return (
      <div className="gallery">
         <div className="images-container">
            <img src={imgLarges[idx]} className="product-image-large" alt="" onClick={largeImgClick} />

            <div className="thumbnail-gallery">
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

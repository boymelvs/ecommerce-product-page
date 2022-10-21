import React, { useState } from "react";
import { Next, Previous } from "../../svg/index";

const Gallery = ({ state }) => {
   const { products } = state;
   const imgLarges = products[0].imgLarges;
   const [idx, setIdx] = useState(0);

   const handleClick = (e, index) => {
      if (e.target.id === "next" && index < imgLarges.length - 1) {
         setIdx(index + 1);
      }

      if (e.target.id === "prev" && index > 0) {
         console.log(index);
         setIdx(index - 1);
      }
   };

   return (
      <div className="gallery">
         <div className="images-container">
            <img src={imgLarges[idx]} className="product-image" alt="" />

            <Previous className="btnArrow" id="prev" onClick={(e) => handleClick(e, idx)} />

            <Next className="btnArrow" id="next" onClick={(e) => handleClick(e, idx)} />
         </div>
      </div>
   );
};

export default Gallery;

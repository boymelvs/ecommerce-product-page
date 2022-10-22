import thumbnail1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/images/image-product-4-thumbnail.jpg";
import product1 from "../../assets/images/image-product-1.jpg";
import product2 from "../../assets/images/image-product-2.jpg";
import product3 from "../../assets/images/image-product-3.jpg";
import product4 from "../../assets/images/image-product-4.jpg";

export const FetchData = /** async */ () => {
   // supposed API call

   const products = [
      {
         id: 1,
         company_name: "SNEAKERS COMPANY",
         product_name: "Fall Limited Edition Sneakers",
         product_description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer style, they'll withstand everything the weather can offer.",
         price: "125.00",
         discount: "50",
         price_before: "250.00",
         imgSmall: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
         imgLarges: [product1, product2, product3, product4],
      },
   ];

   return products;
};

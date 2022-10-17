import React from "react";
import profPic from "../../assets/images/image-avatar.png";

const Profile = () => {
   return (
      <div className="imgContainer">
         <img src={profPic} alt="Avatar" />
      </div>
   );
};

export default Profile;

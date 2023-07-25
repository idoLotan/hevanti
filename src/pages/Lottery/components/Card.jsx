import React, { useState } from "react";
import CrossBtn from "./CrossBtn";

const Card = ({ setImages, images, cards }) => {
  const [image, setImage] = useState(null);
 


  

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const uploadedImage = URL.createObjectURL(e.target.files[0]);
      setImage(uploadedImage);
    }
    
    
    const imagesList = [...images, e.target.files[0]]
    setImages(imagesList)
  };

  const mobileLargeState = cards?.length < 3;


  return (
    <div className={`-rotate-90 h-[292px] w-[254px] m-10 md:m-2 md:rotate-0  ${mobileLargeState ? 'h-[400px] w-[344px]' : 'h-[302px] w-[304px]'} flex md:h-[392px] md:w-[304px] flex-col items-center justify-center rounded-xl bg-neutral-100`} >
      {image ? (
        <img src={image} alt="Uploaded" className="h-48 w-48 object-contain" />
      ) : (
        <CrossBtn title={"העלה תמונה"}></CrossBtn>
      )}
      <input
        type="file"
        className="z-1 absolute cursor-pointer opacity-0"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Card;

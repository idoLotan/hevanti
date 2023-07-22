import React, { useState } from "react";
import CrossBtn from "./CrossBtn";

const Card = ({ setImages, images }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const uploadedImage = URL.createObjectURL(e.target.files[0]);
      setImage(uploadedImage);
    }

    
    const imagesList = [...images, e.target.files[0]]
    setImages(imagesList)
  };

  return (
    <div className=" -rotate-90 h-[292px] md:rotate-0  m-2 flex md:h-[392px] w-[304px] flex-col items-center justify-center rounded-xl bg-neutral-100">
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

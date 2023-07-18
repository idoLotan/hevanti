import React, { useEffect, useState } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import AddImage from "./AddImage";


const Lottery = () => {
  const [images, setImages] = useState(null);
  const [imageList, setImageList] = useState(null);

  const imageListRef = ref(storage, `saasd/`);
  const fetchData = async () => {
    try {
      const response = await listAll(imageListRef);
      const urls = await Promise.all(
        response.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        })
      );
      setImageList(urls);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    if (images && images[0]?.type.includes("image")) {
      try {
        const imgRef = ref(storage, `saasd/${images[0].name + v4()}`);
        console.log(images);
        const resp = await uploadBytes(imgRef, images[0]);
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center mt-20">

      {/* <Welcome></Welcome> */}
      {/* <AddImage></AddImage>
      <Form></Form> */}
     
  <AddImage title={"fdfg"}></AddImage>
      {/* <div className="flex flex-col items-end">
        <input type="file" onChange={(e) => setImages(e.target.files)} />

        <Btn
          text={"הירשם להגרלה"}
          onClick={uploadImage}
          style={"h-10 p-2 bg-red-500"}
        ></Btn>

        <label>שם הילד</label>
        <input type="text" /> */}


      {/* <div className="flex">
          {imageList?.map((item) => (
            <Img src={item} key={item}></Img>
          ))}
          
        </div> */}

      {/* 
        <SearchBar></SearchBar> */}




    </div>
  );
};

export default Lottery;

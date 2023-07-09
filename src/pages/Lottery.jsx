import React, { useEffect, useState } from "react";
import { storage } from "../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Lottery = () => {
  const [images, setImage] = useState(null);
  const [imageList, setImageList] = useState(null);

  const imageListRef = ref(storage, `saasd/`);
  useEffect(() => {
    const fetchData = async () => {
        const response = await listAll(imageListRef);
        response.items.forEach(async (item) => {
          const url = await getDownloadURL(item);
          setImageList((prev) => [...prev, url]);
        });
      };
  }, []);

  const uploadImage = async () => {
    console.log(images[0]);

    try {
      const imgRef = ref(storage, `saasd/${images.name + v4()}`);
      console.log(images);
      const resp = await uploadBytes(imgRef, images[0]);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files)} />
      Lottery
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default Lottery;

import React, { useEffect, useState } from "react";
import { storage } from "../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Btn from "../components/Btn";

const Lottery = () => {
  const [images, setImage] = useState(null);
  const [imageList, setImageList] = useState(null);

  const imageListRef = ref(storage, `saasd/`);
  useEffect(() => {
    const fetchData = async () => {
      const response = await listAll(imageListRef);
      response.items.forEach(async (item) => {
        const url = await getDownloadURL(item);
        //   setImageList((prev) => [...prev, url]);
        console.log(url);
      });
    };
    fetchData();
  }, []);

  const uploadImage = async () => {
    if (images[0].type.includes("image")) {
      try {
        const imgRef = ref(storage, `saasd/${images.name + v4()}`);
        console.log(images);
        const resp = await uploadBytes(imgRef, images[0]);
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <form className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="flex flex-col items-end">
        <input type="file" onChange={(e) => setImage(e.target.files)} />

        <Btn
          text={"upload image"}
          onClick={uploadImage}
          style={"h-10 p-2 bg-red-500"}
        ></Btn>

        <label>שם הילד</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default Lottery;

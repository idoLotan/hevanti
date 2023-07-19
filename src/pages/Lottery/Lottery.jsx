import React, { useEffect, useState } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import AddImage from "./AddImage";
import ArrowBtnLeft from "./ArrowBtnLeft";
import ArrowBtnRight from "./ArrowBtnRight";
import Form from "./Form";


const Lottery = () => {
  const [pageIndex, setPageInedx] = useState(0)



  return (
    <div className="mt-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      {/* <Welcome></Welcome> */}
      <Form></Form>
{/* 
      <AddImage title={"fdfg"}></AddImage> */}
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

      <div className="flex ">
      <ArrowBtnLeft setPageInedx={setPageInedx} pageIndex={pageIndex}></ArrowBtnLeft>
        <div className="p-3"></div>
        <ArrowBtnRight setPageInedx={setPageInedx} pageIndex={pageIndex}></ArrowBtnRight>
      </div>
    </div>
  );
};

export default Lottery;

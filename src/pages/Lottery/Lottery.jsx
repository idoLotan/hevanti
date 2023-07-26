import React, {  useState } from "react";
import AddImage from "./Sections/AddImage";
import Form from "./Sections/Form";
import Welcome from "./Sections/Welcome";
import SubmissionCompleted from "./Sections/SubmissionCompleted";
import SearchBar from "./components/SearchBar";
import Terms from "./Sections/Terms";
import { codes } from "../../data/data";
import {  firebase } from "firebase/app";
import emailjs from "@emailjs/browser";

const Lottery = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [userCode, setUserCode] = useState("")
  const [isScout, setIsScout] = useState(true)





  const handlePrevPage = () => {
    setPageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextPage = async () => {
    const validateScout = codes.includes(userCode)
    if(!validateScout && pageIndex == 0){
      setPageIndex((prevIndex) => prevIndex + 2);
      return
    }
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  const components = [
    <Welcome handleNextPage={handleNextPage} setUserCode={setUserCode} userCode={userCode} setIsScout={setIsScout}/>,
    <AddImage  handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} pageIndex={pageIndex}/>,
    <Form handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} pageIndex={pageIndex} userCode={userCode}/>,
    <SubmissionCompleted />,
  ];





  return (
    <div>
  
      <div  className="md:p-80   scale-50 md:scale-75  2xl:scale-100 absolute flex h-[100%] w-[100%] flex-col items-center justify-center">
          {components[pageIndex]}
      </div>
    
{/* <Terms></Terms> */}
   
    </div>
  );
};

export default Lottery;


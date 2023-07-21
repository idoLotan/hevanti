import React, {  useState } from "react";
import AddImage from "./Sections/AddImage";
import Form from "./Sections/Form";
import Welcome from "./Sections/Welcome";
import SubmissionCompleted from "./Sections/SubmissionCompleted";

const Lottery = () => {
  const [pageIndex, setPageIndex] = useState(0);

  console.log(pageIndex);
  // Array to hold the components to render based on pageIndex

  const handlePrevPage = () => {
    setPageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextPage = () => {
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  const components = [
    <Welcome handleNextPage={handleNextPage} />,
    <AddImage  handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} pageIndex={pageIndex}/>,
    <Form handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} pageIndex={pageIndex}/>,
    <SubmissionCompleted />,
  ];

  return (
    <div className="p-80  md:scale-75  2xl:scale-100 absolute flex h-[100%] w-[100%] flex-col items-center justify-center">
      {components[pageIndex]}

      
    </div>
  );
};

export default Lottery;


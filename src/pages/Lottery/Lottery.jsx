// import React, { useEffect, useState } from "react";
// import AddImage from "./AddImage";
// import ArrowBtnLeft from "./ArrowBtnLeft";
// import ArrowBtnRight from "./ArrowBtnRight";
// import Form from "./Form";
// import Welcome from "./Welcome";

// const Lottery = () => {
//   const [pageIndex, setPageInedx] = useState(0)

//   return (
//     <div className="mt-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center">
//       <Welcome></Welcome>
//       <Form></Form>
//       <AddImage></AddImage>

//       <div className="flex ">
//       <ArrowBtnLeft setPageInedx={setPageInedx} pageIndex={pageIndex}></ArrowBtnLeft>
//         <div className="p-3"></div>
//         <ArrowBtnRight setPageInedx={setPageInedx} pageIndex={pageIndex}></ArrowBtnRight>
//       </div>
//     </div>
//   );
// };

// export default Lottery;

import React, { useEffect, useState } from "react";
import AddImage from "./AddImage";
import ArrowBtnLeft from "./ArrowBtnLeft";
import ArrowBtnRight from "./ArrowBtnRight";
import Form from "./Form";
import Welcome from "./Welcome";
import SubmissionCompleted from "./SubmissionCompleted";

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
    <AddImage />,
    <Form />,
    <SubmissionCompleted />,
  ];

  return (
    <div className="mt-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      {components[pageIndex]}

      {pageIndex > 0 && (
        <div className="z-10 mt-20 flex">
          <ArrowBtnLeft onClick={handleNextPage} disabled={pageIndex === 0} />
          <div className="p-3"></div>
          <ArrowBtnRight
            onClick={handlePrevPage}
            disabled={pageIndex === components.length - 1}
          />
        </div>
      )}
    </div>
  );
};

export default Lottery;

{
  /* 
      <AddImage title={"fdfg"}></AddImage> */
}
{
  /* <div className="flex flex-col items-end">
        <input type="file" onChange={(e) => setImages(e.target.files)} />

        <Btn
          text={"הירשם להגרלה"}
          onClick={uploadImage}
          style={"h-10 p-2 bg-red-500"}
        ></Btn>

        <label>שם הילד</label>
        <input type="text" /> */
}

{
  /* <div className="flex">
          {imageList?.map((item) => (
            <Img src={item} key={item}></Img>
          ))}
          
        </div> */
}

{
  /* 
        <SearchBar></SearchBar> */
}

// import React, { useEffect, useState } from "react";
// import CrossBtn from "./CrossBtn";
// import Card from "./Card";
// import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
// import { storage } from "../../firebase-config";
// import { v4 } from "uuid";

// const AddImage = () => {
//   const [images, setImages] = useState([]);
//   const [imageList, setImageList] = useState(null);
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     addCard()
//   }, [])



  
//   const addCard = () => {
//     if(cards.length  < 3 ){
//       const id = Date.now();
//       const newCard = { id: id };
//       setCards([newCard, ...cards]);
//     }  
//   };

//   const imageListRef = ref(storage, `saasd/`);
//   const fetchData = async () => {
//     try {
//       const response = await listAll(imageListRef);
//       const urls = await Promise.all(
//         response.items.map(async (item) => {
//           const url = await getDownloadURL(item);
//           return url;
//         })
//       );
//       setImageList(urls);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const uploadImage = async (e) => {
//   //   e.preventDefault();
//   //   if (images && images[0]?.type.includes("image")) {
//   //     try {
//   //       const imgRef = ref(storage, `saasd/${images[0].name + v4()}`);
//   //       const resp = await uploadBytes(imgRef, images[0]);
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   }
//   // };


//   const uploadImages = async (e) => {
//     e.preventDefault();
//     if (images && images.length > 0) {
//       try {
//         const uploadPromises = images.map(async (image) => {
//           if (image.type.includes("image")) {
//             const imgRef = ref(storage, `saasd/${image.name + v4()}`);
//             await uploadBytes(imgRef, image);
//           }
//         });
  
//         await Promise.all(uploadPromises);
//         console.log("All images uploaded successfully!");
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };
  

//   return (
//     <div>
//       <section className="relative p-10 ">
//         <header className=" w-[992px] text-center text-[40px] font-semibold leading-[64px] text-orange-400">
//           שתף/שתפי את התמונות עם חולצות המותג שלנו/ או חולצות שבט און
//         </header>
//         <div className=" flex  h-[600px] w-[484px] justify-between rounded-2xl border border-indigo-600 bg-indigo-600 md:w-[600px] lg:w-[800px] 2xl:w-[1088px]">
//           <div
//             id="right-side "
//             className="flex h-full  flex-row   items-center justify-center"
//           >
//             <CrossBtn title={"title"} onClick={addCard}></CrossBtn>

//             {cards.map((card) => (
//               <Card id={card.id} setImages={setImages} images={images}/>
//             ))}
//           </div>
//         </div>
//         <button onClick={uploadImages}>upload</button>
//       </section>
//     </div>
//   );
// };

// export default AddImage;



import React, { useEffect, useState } from "react";
import CrossBtn from "./CrossBtn";
import Card from "./Card";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase-config";
import { v4 } from "uuid";

const AddImage = () => {
  const [images, setImages] = useState([]);
  const [imageList, setImageList] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    addCard();
  }, []);

  const addCard = () => {
    if (cards.length < 3) {
      const id = Date.now();
      const newCard = { id: id };
      setCards([newCard, ...cards]);
    }
  };

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

  const uploadImages = async (e) => {
    e.preventDefault();
    if (images && images.length > 0) {
      try {
        const uploadPromises = images.map(async (image) => {
          if (image.type.includes("image")) {
            const imgRef = ref(storage, `saasd/${image.name + v4()}`);
            await uploadBytes(imgRef, image);
          }
        });

        await Promise.all(uploadPromises);
        console.log("All images uploaded successfully!");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <section className="relative p-10">
        <header className="w-[90%] mx-auto text-center text-[2.5rem] font-semibold leading-[4rem] text-orange-400">
          שתף/שתפי את התמונות עם חולצות המותג שלנו/ או חולצות שבט און
        </header>
        <div className="flex flex-col h-[600px] w-[90%] md:flex-row md:w-[80%] lg:w-[90%] 2xl:w-[90%] mx-auto justify-between rounded-2xl border border-indigo-600 bg-indigo-600">
          <div
            id="right-side"
            className="flex h-full md:flex-row items-center justify-center"
          >
            <CrossBtn title={"title"} onClick={addCard}></CrossBtn>

            {cards.map((card) => (
              <Card key={card.id} id={card.id} setImages={setImages} images={images} />
            ))}
          </div>
        </div>
        <button onClick={uploadImages} className="mt-4 w-[120px] h-[40px] bg-indigo-600 text-white text-xl font-semibold rounded-md">
          העלאה
        </button>
      </section>
    </div>
  );
};

export default AddImage;

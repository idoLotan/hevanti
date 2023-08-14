import v from "assets/images/v.png";

const Card = ({ title, icon, bulletPoints, price, handleSubjectChange }) => {
 const handleBuget = () => {
    switch (price) {
        case "₪250+":
            handleSubjectChange("vip") 
          break;
        case "₪150-₪200":
            handleSubjectChange("ils200")
          break;
        case "₪180-₪250":
            handleSubjectChange("ils250")
          break;
        case "₪130-₪180":
            handleSubjectChange("ils150")
          break;
      }
 }


  return (
    <div className="relative m-4 flex h-[444px]  w-[272px] cursor-pointer flex-col items-center rounded-2xl border border-indigo-600 border-opacity-30 bg-[#3F48B4] bg-opacity-0 p-2 transition duration-100 hover:bg-opacity-10 ">
      <div className=" flex">
        <div className=" w-64 text-center text-xl font-semibold text-indigo-600">
          {title}
        </div>
        <img src={icon} className="absolute right-0 mr-2 mt-1 h-6" alt="" />
      </div>

      <div className="text-right">
        {bulletPoints?.map((point) => (
          <div className="flex items-start justify-end p-2">
            <div key={point}>{point}</div>
            <img src={v} className="ml-2 w-5" alt="" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-16 left-10 h-6 w-[120px] text-sm font-medium text-orange-400">
        {price}
      </div>
      <button
        onClick={() => handleBuget()}
        type="submit"
        className="shadow-send-btn absolute bottom-4 mt-2 h-[40px] w-[200px] rounded-lg bg-[#FF7848] font-bold text-white"
      >
        <a
          href="#contact"
          aria-current="page"
          className="flex h-full w-full items-center justify-center rounded-xl"
        >
          בחר/י
        </a>
      </button>
    </div>
  );
};

export default Card;

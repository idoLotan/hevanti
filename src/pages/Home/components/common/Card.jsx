import v from "assets/images/v.png";

const Card = ({
  title,
  icon,
  bulletPoints,
  price,
  handleSubjectChange,
  popular,
}) => {
  const handleBuget = () => {
    switch (price) {
      case "₪250+":
        handleSubjectChange("vip");
        break;
      case "₪150-₪200":
        handleSubjectChange("ils200");
        break;
      case "₪180-₪250":
        handleSubjectChange("ils250");
        break;
      case "₪130-₪180":
        handleSubjectChange("ils150");
        break;
    }
  };

  return (
    <div className="md:scale-90 2xl:scale-100   group  relative m-3  flex md:h-[470px]   w-[272px]    min-w-[272px]  transform-gpu  cursor-pointer flex-col items-center overflow-hidden rounded-xl border border-indigo-700 border-opacity-30 bg-[#3F48B4] bg-opacity-0 p-2  font-semibold shadow  duration-150 hover:translate-y-[-4px] hover:border-indigo-700 hover:border-opacity-100 hover:bg-indigo-600 hover:bg-opacity-10 hover:shadow-md  ">
      <div className=" flex">
        <div className=" w-64 text-center text-xl font-semibold text-indigo-600">
          {title}
        </div>
        <img src={icon} className="absolute right-0 mr-2 mt-1 h-6" alt="" />
      </div>

      <div className="text-right pb-20">
        {bulletPoints?.map((point) => (
          <div className="flex items-start justify-end p-2">
            <div key={point}>{point}</div>
            <img src={v} className="ml-2 w-4" alt="" />
          </div>
        ))}
      </div>
      <div className="relative w-full">
        {popular && (
          <div className="bottom-14 absolute right-3 h-6 w-24 -rotate-12 border-2 border-red-500 text-center text-sm font-bold leading-normal text-red-500">
            הכי פופולרי
          </div>
        )}
      </div>
      <div className="absolute bottom-16 left-10 h-6  text-sm font-medium text-orange-400">
        {price}
      </div>
      <button
        onClick={() => handleBuget()}
        type="submit"
        className="shadow-send-btn absolute bottom-4 mt-2 h-[40px] w-[200px] rounded-xl bg-[#FF7848] font-bold text-white"
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

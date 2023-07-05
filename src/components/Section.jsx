import { handleKeyPress } from "../helper";

const Section = ({ section, activeIndex, index, toggleSection }) => {
  return (
    <div className="accordion-item p-2 ">
      <div
        tabindex="0"
        role="button"
        className="accordion-title flex cursor-pointer flex-col text-end font-bold"
        onClick={() => toggleSection(index)}
        onKeyUp={handleKeyPress}
      >
        <div className="flex flex-row items-end justify-between">
          <div className="p-2 ">
            {activeIndex === index ? (
              <div
                className="h-0 w-0 
  border-b-[9px] border-l-[9px]
  border-r-[9px] border-b-blue-500
  border-l-transparent border-r-transparent opacity-80"
  
              ></div>
            ) : (
              <div
                className="h-0 w-0 opacity-80
  border-l-[9px] border-r-[9px]
  border-t-[9px] border-l-transparent
  border-r-transparent border-t-[#FF7848]"
              ></div>
            )}
          </div>
          <div className="">
            <span dir="rtl" class="mr-1">
              {section.title}
            </span>
          </div>
        </div>

        <div className="h-[2px] w-[100%] bg-[#555FD9] opacity-50"></div>
      </div>
      {activeIndex === index && (
        <div dir="rtl" className="accordion-content mt-1 flex ">
          {section.content}
        </div>
      )}
    </div>
  );
};

export default Section;

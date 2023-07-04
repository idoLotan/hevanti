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
  border-b-[13px] border-l-[10px]
  border-r-[10px] border-b-blue-500
  border-l-transparent border-r-transparent"
              ></div>
            ) : (
              <div
                className="h-0 w-0 
  border-l-[10px] border-r-[10px]
  border-t-[13px] border-l-transparent
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

        <div className="h-[2px] w-[100%] bg-[#555FD9]"></div>
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

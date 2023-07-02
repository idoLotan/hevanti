

const Section = ({  section, activeIndex, index, toggleSection }) => {
  return (
    <div className="accordion-item p-2 ">
      <div
        className="accordion-title font-bold flex flex-col text-end cursor-pointer"
        onClick={() => toggleSection(index)}
      >
        <div className="flex flex-row justify-between items-end">
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
        <span dir="rtl" class="mr-1">{section.title}</span>
      </div>
     

        </div>
       
      
        <div className="h-[2px] w-[100%] bg-[#555FD9]"></div>
      </div>
      {activeIndex === index && (
        <div className="accordion-content flex text-end mt-1">{section.content}</div>
      )}
    </div>
  );
};

export default Section;

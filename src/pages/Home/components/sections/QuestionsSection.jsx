import React from "react";
import AccordionTW from "../../../../components/ui/AccordionTW";

const QuestionsSection = () => {
  return (
    <section id="questions" className="relative  w-[100%]  p-10 section-2">
      <div className="2xl:pl-44 2xl:pr-44">

      <h2 className=" md:scale-90 2xl:scale-100 -right-5 relative pb-6 text-right text-2xl text-[35px] font-bold text-[#555FD9]">
        שאלות נפוצות כלליות
      </h2>
      <AccordionTW></AccordionTW>
      </div>
    </section>
  );
};

export default QuestionsSection;

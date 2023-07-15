import React from "react";
import AccordionTW from "../../components/ui/AccordionTW";

const QuestionsSection = () => {
  return (
    <section id="questions" className="relative  w-[100%]  p-10">
      <h2 className="pb-6 text-right text-2xl text-[35px] font-bold text-[#555FD9]">
        שאלות נפוצות כלליות
      </h2>
      <AccordionTW></AccordionTW>
    </section>
  );
};

export default QuestionsSection;

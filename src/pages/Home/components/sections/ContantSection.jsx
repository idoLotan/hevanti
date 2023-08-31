import React from "react";
 import ContactForm from "components/form/ContactForm";
const ContantSection = ({toggelModal, subjects}) => {
    
    
  return (
    <section
      className="md:scale-90 2xl:scale-100  relative flex w- h-[1000px] flex-col  p-3 md:h-[400px] "
      id="contact"
    >
      <div className="2xl:mr-[181px] ">
      <h2 className=" text-right text-[32px] font-bold text-[#555FD9]">
        ?מה את/ה רוצה להבין
      </h2>
      <h3 className=" mb-5 text-right text-xl text-[#2A264D]">
        ספר/י לנו מה את/ה מצפה שנעשה עבורך, ואנחנו נבנה תוכנית מותאמת אישית
      </h3>
      </div>
     
      <div className="flex w-[100%] items-center justify-center">
        <ContactForm
          toggelModal={toggelModal}
          subjectsClicked={subjects}
        ></ContactForm>
      </div>
      <div></div>
    </section>
  );
};

export default ContantSection;

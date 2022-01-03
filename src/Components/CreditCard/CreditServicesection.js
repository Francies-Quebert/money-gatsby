import React from "react";
import ServiceComponent from "../Home/ServiceComponent";

const CreditServicesection = () => {
  const ServiceData = [
    {
      title: "Safe & Secure",
      content:
        "Applying for loans and credit cards through MyMoneyMantra is 100% safe & secure. Our systems ensure complete data security and privacy for each applicant.",
    },
    {
      title: "Personalised",
      content:
        "Choose according to you spending habits & save more with every swipe.",
    },
    {
      title: "Fast disbursal",
      content:
        "We offer fastest delivery in real time through our end to end digital fulfilment capability.",
    },
  ];
  return (
    <>
      <section className="lg:mt-8 mt-0 lg:mx-16 lg:px-0 md:px-6 px-6   mx-0  text-white ">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-14 lg:grid-cols-3 rounded lg:px-20  px-5 py-10 bg-gradient-to-r from-secondary-orange-600 via-secondary-orange-500  to-secondary-orange-300">
          {ServiceData.map((curr,idx) => {
            return <ServiceComponent curr={curr} {...curr} key={idx} />;
          })}
        </div>
      </section>
    </>
  );
};

export default CreditServicesection;

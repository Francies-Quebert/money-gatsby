import React from "react";
import ServiceComponent from "./ServiceSectionComponent";
import Fade from "react-reveal";
// import { graphql, useStaticQuery } from "gatsby";

const ServiceSection = (props) => {
  // console.log(props,"service section")
  return (
    <>
      <Fade bottom>
        <div className="max-w-6xl mx-auto">
        <section className="mt-8 lg:mx-16 mx-6 text-white ">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-14 lg:grid-cols-3 rounded lg:px-20 px-6 py-10 bg-gradient-to-r from-secondary-orange-600 via-secondary-orange-500  to-secondary-orange-300">
            {props.serviceTypeData.map((curr, idx) => {
              return <ServiceComponent data={curr} {...curr} key={idx} />;
            })}
          </div>
        </section>
        </div>
      </Fade>
    </>
  );
};

export default ServiceSection;

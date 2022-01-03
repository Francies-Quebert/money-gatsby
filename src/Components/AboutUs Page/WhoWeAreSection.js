import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const WhoWeAreSection = (props) => {
  // console.log(props, "jj");
  return (
    <>
      <section className="max-w-6xl mx-auto pt-8 lg:pt-0">
        <div className="text-white text-center mx-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center order-2 lg:order-none">
            {/* <div className="order-2 lg:order-none"> */}
              <div className="flex flex-col items-center justify-center pb-8">
                <h1 className="font-bold text-center text-4xl text-secondary-orange-400 pb-2">
                  {props.titlehightlighted}
                </h1>
                <div className="border-t-8 border-white w-40"></div>
              </div>
              <p className="text-left mb-5">
                {props.WhoWeAreSectionDescription}
                {props.WhoWeAreSectionDescriptions}
              </p>
            {/* </div> */}
            
            {/* <p className="text-left">{props.WhoWeAreSectionDescriptions}</p> */}
          </div>
          <div className="lg:order-none order-1">
              {props.WhoWeAreSectionimages && (
                <GatsbyImageCustom
                  id={props.WhoWeAreSectionimages.asset._ref}
                  alt={props.WhoWeAreSectionaltimages}
                  className="rounded-lg"
                />
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAreSection;

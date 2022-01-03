import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const WhoWeDoSection = (props) => {
  //   console.log(props, "jj");
  return (
    <>
      <section className="max-w-6xl mx-auto">
        <div className="text-white text-center mt-20 px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="max-w-sm mx-auto">
              {props.WhoWeDoSectionimages && (
                <GatsbyImageCustom
                  id={props.WhoWeDoSectionimages.asset._ref}
                  alt={props.WhoWeDoSectionaltimages}
                  className="rounded-lg"
                />
              )}
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col items-center justify-center pb-8">
                <h1 className="font-bold text-center text-4xl text-secondary-orange-400 uppercase pb-2">
                  {props.titlehightlighted}
                </h1>
                <div className="border-t-8 border-white w-60"></div>
              </div>
              <p className=" mb-5 text-justify">
                {props.WhoWeDoSectionDescription}
              </p>
              <p className="text-justify">
                {props.WhoWeAreSectionDescriptions}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeDoSection;

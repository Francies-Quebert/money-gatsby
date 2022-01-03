import React from "react";
import { Fade } from "react-reveal";
// import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const RightTextLeftImgSection = (props) => {
  // console.log(props,"jj")
  return (
    <Fade bottom>
      <div className=" max-w-6xl mx-auto">
        <div className="mt-10 lg:mt-24 mx-6">
          <div className=" ">
            <div className="max-w-max lg:max-w-lg mx-auto">
              <h2 className="border-b-2 border-white text-xl md:text-3xl lg:text-4xl font-bold uppercase text-center text-secondary-orange-400">
                {props.RightTextLeftImgSectiontitle} &nbsp;
                {props.titlehightlighted}
              </h2>
            </div>
            <div className="mt-8">
              <p className=" text-white text-justify">
                {props.RightTextLeftImgSectionDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default RightTextLeftImgSection;

import { Link } from "gatsby";
import React from "react";
import { Fade } from "react-reveal";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";
import CreditSectionComponent from "./CreditSectionComponent";

const CreditSection = (props) => {
  // console.log(props,"sad")
  return (
    <Fade bottom>
      <div className="max-w-6xl mx-auto">
        <div className="mt-10 mx-6">
          <div className="flex items-center flex-col lg:flex-row justify-between">
            <div className="max-w-max lg:max-w-lg relative">
              <div className="flex flex-col justify-center md:justify-start mx-auto">
                <div className="border-t-8 border-white w-20 pb-2"></div>
                <h2 className="text-xl md:text-3xl lg:text-4xl text-secondary-orange-400 mb-8 font-bold uppercase">
                  {props.creditSectionTitle}
                  {props.creditSectionHighlightedTitle}
                </h2>
              </div>

              <div className="flex">
                <div className="inline-block mx-auto lg:mx-0 text-white">
                  {props.creditSectionFeaturesData &&
                    props.creditSectionFeaturesData.map((aa, idx) => (
                      <CreditSectionComponent aa={aa} {...aa} key={idx} />
                    ))}
                </div>
              </div>
              <div className="flex justify-start items-center">
              <Link to={props.creditSectionButtonLink} target="_blank">
                  <button className="uppercase rounded-md w-40 p-2 cursor-pointer mt-8  text-base font-bold bg-secondary-orange-400 text-white border-secondary-orange-500 border hover:border-white hover:bg-transparent hover:text-secondary-orange-400 text-center">
                    {props.creditSectionButton}
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <GatsbyImageCustom
                id={
                  props.creditSectionImage
                    ? props.creditSectionImage.asset._ref
                    : null
                }
                alt="a"
                className="mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CreditSection;

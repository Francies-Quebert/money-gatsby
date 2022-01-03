// import {
//   faCalendarAlt,
//   faChartBar,
//   faMoneyBillAlt,
// } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  // faCity,
  // faGlobeAfrica,
  // faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import IMG from "../../images/help.png";
import Fade from "react-reveal";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const RightImgLeftFeatures = (props) => {
  // console.log(props.featuresHeading,"saurav")
  // const FeatureData = [
  //   { title: "Age of Applicant", icon: faCalendarAlt },
  //   {
  //     title: "Business Stability",
  //     icon: faCity,
  //   },
  //   { title: "Credit Limit", icon: faChartBar },
  // ];
  // const FeatureData1 = [
  //   { title: "Current Home", icon: faHome },
  //   { title: "CIBIL Score", icon: faMoneyBillAlt },
  //   { title: "Nationality", icon: faGlobeAfrica },
  // ];
  // console.log(props, "in  features");
  return (
    <div className="py-14 xl:py-24 relative bg-secondary-gray-700">
      <Fade bottom>
        <div className="relative flex justify-center mb-4 xl:mb-0 xl:absolute top-0 right-0 max-w-md mx-auto">
          <GatsbyImageCustom
            id={props.featuresImages.asset._ref}
            className="h-auto"
            alt="fetures"
          />
        </div>
      </Fade>
      <Fade bottom>
        <div className="px-7 mx-0 md:mx-14">
          <div className="mb-12 text-left mr-0 xl:mr-96 pr-0 xl:pr-10">
            <div className="text-lg text-secondary-orange-500 mb-1 uppercase">
              {props.featuresHeading}
            </div>
            <h2 className="text-white text-2xl md:text-6xl font-bold">
              {props.featuresTitle}
            </h2>
          </div>
          <ul>
            <div className="grid grid-cols-1 lg:grid-cols-2 mr-0 xl:mr-96">
              <div>
                {props.featuresInputDataLeft &&
                  props.featuresInputDataLeft.map((aa, idx) => (
                    <li className="flex mb-4" key={idx}>
                      <div className="bg-offerblue rounded-sm text-center w-20 h-16 flex items-center justify-center">
                        {/* <FontAwesomeIcon
                        icon={aa.icon}
                        className="text-secondary-orange-500 text-4xl"
                      /> */}
                        {aa.featuresInputImages && (
                          <GatsbyImageCustom
                            id={aa.featuresInputImages.asset._ref}
                            className="text-secondary-orange-500 text-4xl"
                            alt={aa.featuresInputImagesAlt}
                          />
                        )}
                      </div>
                      <div className=" pl-8 text-xl font-medium text-white">
                        {aa.featuresInputTitle}
                      </div>
                    </li>
                  ))}
              </div>
              <div>
                {props.featuresInputDataRight &&
                  props.featuresInputDataRight.map((rr, idx) => (
                    <li className="flex mb-4" key={idx}>
                      <div className="bg-offerblue rounded-sm text-center w-20 h-16 flex items-center justify-center">
                        {/* <FontAwesomeIcon
                        icon={rr.icon}
                        className="text-secondary-orange-500 text-4xl"
                      /> */}
                        {rr.featuresInputImages && (
                          <GatsbyImageCustom
                            id={rr.featuresInputImages.asset._ref}
                            className="text-secondary-orange-500 text-4xl"
                            alt={rr.featuresInputImagesAlt}
                          />
                        )}
                      </div>
                      <div className=" pl-8 text-xl font-medium text-white">
                        {rr.featuresInputTitle}
                      </div>
                    </li>
                  ))}
              </div>
            </div>
          </ul>
          <div className="cursor-pointer">
            <a
              href="#"
              className="text-base font-semibold text-secondary-orange-500 uppercase"
            >
              Get Started
            </a>
            <span className="pl-2 transition-all">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-secondary-orange-500"
              />
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default RightImgLeftFeatures;

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Fade } from "react-reveal";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const TwoCardTestimonials = ({
  testimonialsData,
  testimonialsDesc,
  testimonialsHeading,
}) => {
  // console.log(testimonialsData,"saurav")
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" pb-5 md:pb-10 lg:pb-16 pt-12 md:pt-16 lg:pt-24 ">
        <div className=" px-3.5">
          <Fade bottom>
            <div className="mb-12 flex flex-col justify-center items-center relative">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary-orange-400 pb-2">
                {testimonialsDesc}
              </h2>
              <div className="border-t-8 border-white w-60"></div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {testimonialsData &&
                testimonialsData.map((aa, idx) => {
                  return (
                    <div
                      className="ml-0 px-0 md:px-4 lg:px-12 lg:col-span-2"
                      key={idx}
                    >
                      <div className="px-4 lg:px-7 py-8 rounded mb-7 text-center shadow-md ">
                        <div className="mb-4">
                          <div className="mb-4 relative">
                            {aa.TestimonialCardsImage && (
                              <GatsbyImageCustom
                                alt="abc"
                                id={aa.TestimonialCardsImage.asset._ref}
                                className="border-8 border-secondary-orange-500 rounded-full mx-auto h-40 w-40"
                              />
                            )}
                            <div className="text-center text-xl rounded-full text-white bg-secondary-orange-500 absolute right-0 bottom-0 h-11 w-11">
                              <FontAwesomeIcon
                                icon={faQuoteLeft}
                                className="text-center mt-2.5"
                              />
                            </div>
                          </div>
                          <h3 className="mb-2 text-xl text-white font-bold">
                            {aa.TestimonialCardsTitle}
                          </h3>
                          <span className="pb-3.5 border-b border-secondary-orange-500 text-secondary-orange-500">
                            {aa.TestimonialCardsCompany}
                          </span>
                        </div>
                        <div>
                          <p className="text-center text-white">
                            {aa.TestimonialCardsDetails}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default TwoCardTestimonials;

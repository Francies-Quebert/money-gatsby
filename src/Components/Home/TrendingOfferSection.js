import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const isBrowser = typeof window !== "undefined";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`slick-arrow hidden lg:flex absolute top-32 right-40 w-12 h-12 p-0 translate-x-0 -translate-y-1/2 cursor-pointer text-3xl  justify-center items-center`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleRight} className="font-light" size="1x" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`slick-arrow hidden lg:flex absolute top-32 left-40 w-12 h-12 p-0 translate-x-0 -translate-y-1/2 cursor-pointer text-3xl justify-center items-center z-50`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faAngleLeft} className="font-light" size="1x" />
    </div>
  );
}

const TrendingOfferSection = (props) => {
  // console.log(props,"gob")
  const settings = {
    className: "centered-slider ",
    centerMode: isBrowser && window.innerWidth <= 768 ? false : true,
    infinite: true,
    // centerPadding: "60px",
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fade bottom>
      <section className="mt-10 text-white lg:mx-16 mx-6">
        <div className=" trending-section-slider">
          <div className="text-center font-semibold text-3xl">
            <h2>{props.titlehightlighted}</h2>
          </div>
          <div className="py-12">
            <Slider {...settings}>
              {props.TrendingOfferSection &&
                props.TrendingOfferSection.map((curr, idx) => {
                  return (
                    <div className="pr-1" key={curr._key}>
                      <div className="w-100 text-black scaled-div bg-white rounded mx-0 lg:-mx-28">
                        <div className="p-8">
                          <div className="flex flex-wrap justify-between">
                            <div className="">
                              <div className="text-secondary-lime-700 font-semibold text-xl">
                                {curr.bank_Name}
                              </div>
                              <div className="font-semibold text-xl">
                                {curr.typeOfLoan}
                              </div>
                            </div>
                            <div>
                              {/* img */}
                              {curr.bankimage && (
                                <GatsbyImageCustom
                                  id={curr.bankimage.asset._ref}
                                  alt={curr.altImage}
                                />
                              )}
                            </div>
                          </div>
                          <div className="py-5">
                            <ul className="list-disc list-inside text-gray-600 text-sm font-thin">
                              <li>{curr.bankOffer}</li>
                              <li>{curr.bankOffers}</li>
                            </ul>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2">
                            {curr.TrendingOffer &&
                              curr.TrendingOffer.map((aa, idx) => {
                                return (
                                  <div key={aa._key} className="flex">
                                    <p className="text-gray-600 font-medium text-sm">
                                      {aa.homeTrendingOfferSlidertitle} :&nbsp;
                                      <span className="font-semibold text-xs">
                                        {aa.homeTrendingOfferSlidervalue}
                                      </span>{" "}
                                    </p>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-400 to-blue-900 py-3 px-8 rounded-b">
                          <div className="text-white font-semibold text-base">
                            {curr.typeOfLoanOffer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default TrendingOfferSection;

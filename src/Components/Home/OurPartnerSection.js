import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import OurPartnerComponent from "./OurPartnerComponent";

function SampleNextArrow(props) {
  const { onClick } = props;
  // console.log(className);
  return (
    <div className={`slick-arrow custom-next`} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} className="font-light" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  // console.log(className);
  return (
    <div className={`slick-arrow custom-prev`} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} className="font-light" />
    </div>
  );
}

const OurPartnerSection = (props) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <>
      <Fade bottom>
        <section>
          <div
            className="text-white mt-10 lg:mx-16 mx-6 m-auto "
            style={{ objectFit: "contain" }}
          >
            <div className="flex justify-center items-center flex-col ">
              <h1 className="text-4xl font-bold lg:text-center text-left text-secondary-orange-400 pb-2 uppercase">
                {props.OurPartnerSectiontitle}
              </h1>
              <div className="border-t-8 border-white w-20 "></div>
            </div>
            <Slider {...settings} className=" mt-10 xl:pl-8 2xl:pl-20 pl-0">
              {props.OurPartnerSection &&
                props.OurPartnerSection.map((curr, id) => {
                  return (
                    <OurPartnerComponent
                      data={curr}
                      {...curr}
                      key={curr._key}
                    />
                  );
                })}
            </Slider>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default OurPartnerSection;

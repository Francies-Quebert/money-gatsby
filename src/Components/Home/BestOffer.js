import React from "react";
import Slider from "react-slick";
// import IMG1 from "../../images/image.png";
// import IMG2 from "../../images/image1.png";
// import IMG3 from "../../images/image2.png";
// import IMG4 from "../../images/imag3.png";
// import IMG5 from "../../images/image4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BestOfferComponent from "./BestOfferComponent";
import { Fade } from "react-reveal";

function SampleNextArrow(props) {
  const { onClick } = props;
  // console.log(className);
  return (
    <div className={`slick-arrow custom-next`} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} className="font-light" size="1x" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  // console.log(className);
  return (
    <div className={`slick-arrow custom-prev`} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} className="font-light" size="1x" />
    </div>
  );
}

const BestOffer = (props) => {
  // console.log(props,"data")
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
  };
  // const ImageData = [
  //   { img: IMG1 },
  //   { img: IMG2 },
  //   { img: IMG3 },
  //   { img: IMG4 },
  //   { img: IMG5 },
  // ];

  return (
    <>
      <Fade bottom>
        <section className="relative px-0 lg:px-10 mt-10 max-w-6xl mx-auto">
          <div className="absolute bg-offerblue max-w-xl h-full z-10 inset-0"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 text-white relative z-20 py-0 lg:py-16 px-0 lg:px-6 mx-0 lg:mx-8">
            <div className="pl-4 lg:pl-0 pt-5 mr-0 lg:mr-4">
              <h1 className="text-2xl font-bold  ">
                {props.bestOfferHeading}
              </h1>

              <h1 className="text-2xl font-bold ">
                <span className="text-secondary-orange-500">{props.bestOfferHighlightedHeading}</span>
              </h1>
            </div>
            <div className="col-span-3 lg:col-span-2 pl-4 lg:pl-0 pt-4 md:pt-0">
              <Slider {...settings}>
                {props.bestOfferInputData && props.bestOfferInputData.map((curr, idx) => {
                  return <BestOfferComponent curr={curr} {...curr} key={idx} />;
                })}
              </Slider>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default BestOffer;

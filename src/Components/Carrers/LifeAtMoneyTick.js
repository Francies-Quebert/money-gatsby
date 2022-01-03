import React from "react";
// import Team from "../../images/download.png";
// import Bg_team from "../../images/careers-photo-bg-1.png";
import GallerySection from "./GallerySection";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const LifeAtMoneyTick = (props) => {
  // console.log(props, "props");
  return (
    <>
      <div className="pt-14 pb-8 lg:pb-52">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="-mt-32 lg:-mt-52 mb-28 lg:mb-0 order-none lg:order-2 w-full lg:w-2/4 px-3.5 text-center md:text-left">
              <div className="sticky top-14">
                <div className="relative">
                  <GatsbyImageCustom
                    id={props.carrers_header_image.asset._ref}
                    alt="team"
                    className="relative z-20 w-full rounded max-w-lg pt-2 lg:pt-14 object-cover"
                  />
                  <GatsbyImageCustom
                    id={props.carrers_header_bg_image.asset._ref}
                    alt="bg-team"
                    className="absolute -top-8 lg:top-0 right-0 lg:-right-5"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/4 px-3.5">
              <p className="mb-5 text-lg text-white">
                {props.carrers_desc[0].children[0].text}
              </p>
              <p className="mb-5 text-lg text-white">
                {props.carrers_desc[1].children[0].text}
              </p>
            </div>
          </div>
        </div>
      </div>
      <GallerySection data={props} />
    </>
  );
};

export default LifeAtMoneyTick;

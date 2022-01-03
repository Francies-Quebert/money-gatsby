// import { Link } from "gatsby";
import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

// import Img from "../../images/mainbanner.png";
const CommonLeftTextRightImgComponent = ({
  home_landing_desc,
  home_landing_image,
  home_landing_title,
  // home_landing_title_highlighted,
  home_landing_rotate_image,
  // home_landing_buttonName,
  //   tailwindstyle
}) => {
  return (
    <>
      <div
        // style={{ backgroundImage: `url(${Img})` }}
        className="w-auto bg-left bg-no-repeat bg-cover"
      >
        <div className="max-w-6xl mx-auto pt-16 lg:p-0">
          <section className=" px-6">
            {/* <Link to="/creditcard">credcardpage</Link> */}
            <div className="flex flex-col space-x-10 justify-center items-center">
              <div className="flex-1 space-y-2">
                {/* <div className="border-white border-t-8 w-16"></div> */}
                <h1 className="border-white border-b max-w-max mx-auto lg:text-4xl md:text-3xl text-2xl  font-bold text-secondary-orange-500 uppercase">
                  {home_landing_title}
                </h1>
                <div className="flex justify-center" style={{ height: 500 }}>
                  {home_landing_image && (
                    <GatsbyImageCustom
                      id={home_landing_image.asset._ref}
                      className={
                        home_landing_rotate_image
                          ? "transform mt-0 block rounded shadow-2xl"
                          : "shadow-2xl object-contain"
                      }
                    />
                  )}
                </div>

                <p className="text-xl tracking-wide text-white pb-6 max-w-4xl mx-auto">
                  {home_landing_desc}
                </p>
                {/* <Link to="/contact-us">
                  <button className="uppercase shadow-bottom text-white bg-gradient-to-r from-secondary-orange-600  to-secondary-orange-400 font-bold w-44  p-3 rounded">
                    {home_landing_buttonName}
                  </button>
                </Link> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CommonLeftTextRightImgComponent;

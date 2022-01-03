import React from "react";

const CarrerBanner = (props) => {
  // console.log(props,"props")
  return (
    <>
      <div className="">
        <div className="max-w-6xl mx-auto">
          <div className="pt-14 pb-32 lg:pb-0">
            <div className="max-w-xl px-3.5">
              <h1 className="text-secondary-orange-400 text-4xl font-bold mt-8 mb-6 uppercase">
                {props.carrers_header_title_highlighted}
              </h1>
              <div className="border-t-8 border-white w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrerBanner;

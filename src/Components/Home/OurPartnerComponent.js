import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const OurPartnerComponent = (props) => {
  return (
    <div className="px-2 mt-5 ">
      {props.ourPartnericon && (
        <GatsbyImageCustom
          id={props.ourPartnericon.asset._ref}
          className="w-full object-contain bg-white h-20"
          alt={props.ourPartnerialtImage}
        />
      )}
      {/* <img src={img} alt="" className="lg:h-28 h-20 lg:p-2 p-1 xl:p-0  " /> */}
    </div>
  );
};

export default OurPartnerComponent;

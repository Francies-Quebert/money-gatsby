import React from "react";
// import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import GatsbyImageCustom from "../../Image/GatsbyImageCustom";

const ServiceSectionComponent = ({
  serviceTypeTitle,
  serviceTypeIcon,
  serviceTypeDesc,
}) => {
  // console.log(serviceTypeIcon.asset._ref,"sad")
  return (
    <>
      <div className="space-y-8">
        <GatsbyImageCustom
          id={serviceTypeIcon.asset._ref}
          alt="bg"
          style={{ objectFit: "contain" }}
        />
        {/* <FontAwesomeIcon
          icon={}
          size="3x"
          className=" text-gray-600"
        /> */}
        <h1 className="text-xl font-bold">{serviceTypeTitle}</h1>
        <p className="text-base text-gray-100">{serviceTypeDesc}</p>
      </div>
    </>
  );
};

export default ServiceSectionComponent;

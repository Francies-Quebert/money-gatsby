import React from "react";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreditSectionComponent = ({ creditSectionFeatures }) => {
  return (
    <>
      <div className="flex mt-2 ">
        <FontAwesomeIcon
          icon={faCheckSquare}
          className="text-xl text-secondary-orange-400"
        />
        <p className="ml-4">{creditSectionFeatures}</p>
      </div>
    </>
  );
};

export default CreditSectionComponent;

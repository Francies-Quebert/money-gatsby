import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const BestOfferComponent = ({
  bestOfferInputImages,
  bestOfferInputImagesAlt,
}) => {
  return (
    <>
      <div className="bg-gray-50 rounded p-8 w-28">
        {bestOfferInputImages && (
          <GatsbyImageCustom
            id={bestOfferInputImages.asset._ref}
            alt={bestOfferInputImagesAlt}
          />
        )}
      </div>
    </>
  );
};

export default BestOfferComponent;

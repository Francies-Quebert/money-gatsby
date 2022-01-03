import React from "react";
import CreditAccordins from "./CreditAccordins";

const CreditAccordinsComponent = (props) => {
  // return <div></div>;
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-secondary-orange-400 text-left px-6 lg:text-center mt-10 font-bold lg:text-2xl text-xl pb-8 ">
          {props.CreditAccordonSectiontitle}
        </h1>
        <div className="lg:px-24 px-6 pb-20 space-y-7  ">
          {props.CreditAccordonSection &&
            props.CreditAccordonSection.map((aa, idx) => (
              <CreditAccordins data={aa} {...aa} key={aa._key} />
            ))}
        </div>
        {/* <div className=" space-y-4 mt-6">
          {props.CreditAccordonSection &&
            props.CreditAccordonSection.map((aa, idx) => {
              return <CreditAccordins data={aa} {...aa} key={aa._key} />;
            })}
        </div> */}
      </div>
    </>
  );
};

export default CreditAccordinsComponent;

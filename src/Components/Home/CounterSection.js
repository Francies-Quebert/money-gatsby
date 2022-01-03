import React from "react";
import Fade from "react-reveal/Fade";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const CounterSection = (props) => {
  // console.log(props, "testimonial");

  return (
    <Fade bottom>
      <div className="max-w-6xl mx-auto">
        <div className=" mt-5">
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {props.countersection &&
                props.countersection.map((aa, idx) => (
                  <div key={aa._key} className="text-center py-4">
                    <div className="text-secondary-orange-400 text-4xl">
                      {/* {aa.icon} */}
                      {aa.usercountericon && (
                        <GatsbyImageCustom
                          id={aa.usercountericon.asset._ref}
                          alt={aa.altImage}
                          className="h-16 w-16 mx-auto"
                        />
                      )}
                    </div>
                    <h3 className="text-secondary-orange-400 font-bold text-xl mt-2">
                      {aa.NumberCounter}
                      <span className="">+</span>
                    </h3>
                    <p className="text-base text-white">{aa.TitleCounter}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CounterSection;

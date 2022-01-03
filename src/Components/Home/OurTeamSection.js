// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";
import { Fade } from "react-reveal";
// import { Link } from "gatsby";

const OurTeamSection = (props) => {
  // console.log(props, "team");

  return (
    <>
      <Fade bottom>
        <section className="mx-auto max-w-6xl">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-secondary-orange-400 lg:text-4xl text-2xl pb-2">
              MEET OUR TEAM
            </h1>
            <div className="border-t-8 border-white w-40"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10  ">
            {props.OurTeamSection &&
              props.OurTeamSection.map((curr, index) => {
                return (
                  <div key={index} className="text-white text-center space-y-4">
                    {/* images */}
                    {curr.ourTeamProfileicon && (
                      <GatsbyImageCustom
                        id={curr.ourTeamProfileicon.asset._ref}
                        alt={curr.ourTeamProfilealtimage}
                        className="mx-auto border-dashed border-2 rounded-full p-2 border-secondary-orange-500"
                      />
                    )}

                    <div>
                      <h1 className="font-bold text-2xl tracking-wider mt-10 uppercase">
                        {curr.TitleName}
                      </h1>
                      <p className="text-base text-gray-400">
                        {curr.ourTeamProfilepost}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </Fade>
    </>
  );
};

export default OurTeamSection;

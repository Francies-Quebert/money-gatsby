import React from "react";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";

const AboutUsCardSection = (props) => {
  // console.log(props, "about");
  return (
    <>
      <section>
        <div className="text-white text-center mt-10 ">
          <h1 className="font-bold text-4xl text-center">
            {props.titlehightlighted}
          </h1>
          <div className="  grid grid-cols-1 gap-16 sm:grid-cols-2 md:gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-16 lg:px-32 md:px-6 px-6 text-center mt-10 ">
            {props.AboutUsCardSection &&
              props.AboutUsCardSection.map((curr) => {
                return (
                  <div
                    key={curr._key}
                    className=" cursor-pointer space-y-5 rounded-lg border border-secondary-orange-500 bg-transparent hover:bg-secondary-orange-600 transform transition ease-out hover:scale-110 duration-500 lg:py-6 md:py-6 py-14 "
                  >
                    <div>
                      {curr.usercountericon && (
                        <GatsbyImageCustom
                          id={curr.usercountericon.asset._ref}
                          alt={curr.aboutcardaltimage}
                        />
                      )}
                    </div>
                    <div>
                      <h1 className="font-bold text-2xl">
                        {curr.aboutcardstitle}
                      </h1>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsCardSection;

import React from "react";
import TextWithCardComponent from "./TextWithCardComponent";
import Fade from "react-reveal";

const TextWithCard = (props) => {
  // console.log(props, "gg");
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="mt-10 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-between px-6">
            <div className="text-white flex flex-col justify-center space-y-2 max-w-max lg:max-w-lg">
              <Fade bottom>
                <div className="border-white border-t-8 w-20 justify-start"></div>
                <h1 className="text-secondary-orange-400 uppercase text-left lg:text-4xl md:text-3xl text-xl font-bold">
                  {props.textWithCardSectiontitle}
                  <span className="">&nbsp; {props.titlehightlighted}</span>
                </h1>
                <p className="text-base">
                  {props.textWithCardSectiontitleDescription}
                </p>
              </Fade>
            </div>

            <div className="py-6 lg:py-0">
              <Fade bottom>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2">
                  {props.TextWithCardSection &&
                    props.TextWithCardSection.map((curr, idx) => {
                      return (
                        <TextWithCardComponent
                          curr={curr}
                          {...curr}
                          key={curr._key}
                        />
                      );
                    })}
                </div>
              </Fade>
            </div>
          </div>
        </div>
        {/* <section>
        <div className="text-white  space-y-8 mt-10 ">
          <Fade bottom>
            <h1 className="lg:text-4xl md:text-3xl  text-xl text-center lg:px-32 px-10 font-bold">
              {props.textWithCardSectiontitle}
              <span className="text-secondary-orange-400">
                &nbsp; {props.titlehightlighted}
              </span>
            </h1>
            <p className="text-base  text-center justify-items-center lg:px-64 px-10">
              {props.textWithCardSectiontitleDescription}
            </p>
          </Fade>
          <Fade bottom>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:px-20 md:px-10 sm:px-10 px-10">
              {props.TextWithCardSection &&
                props.TextWithCardSection.map((curr, idx) => {
                  return <TextWithCardComponent curr={curr} {...curr} key={curr._key} />;
                })}
            </div>
          </Fade>
        </div>
      </section> */}
      </div>
    </>
  );
};

export default TextWithCard;

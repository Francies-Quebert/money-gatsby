import { Link } from "gatsby";
import React from "react";
import Fade from "react-reveal";

const BestRewardSection = (props) => {
  // console.log(props,"gg")
  return (
    <>
      {/* Best Reward section */}
      <Fade bottom>
        <div className="max-w-6xl mx-auto pt-12">
          <section className="mx-6">
            {/* <div className="lg:flex space-y-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white rounded bg-gradient-to-r from-secondary-lime-700 via-secondary-lime-500 to-secondary-lime-300 lg:px-40 px-10 lg:py-14 md:py-10 py-5"> */}
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-center text-white">
              <div className="space-y-4 max-w-lg w-full self-start lg:self-auto">
                <div className="border-t-8 border-white w-20"></div>
                <h1 className="text-2xl lg:text-4xl font-bold text-secondary-orange-400 uppercase">
                  {props.titlehightlighted}
                </h1>
                <p className="text-xl text-white max-w-lg">
                  {props.BestRewardSectionDescription}
                </p>
              </div>
              <div className="justify-center lg:self-auto lg:items-center mt-8 lg:mt-0 max-w-lg pr-0 lg:pr-36">
                <Link to="/contact-us">
                <button className="uppercase p-2 ml-0 rounded-md w-36 text-base font-bold border border-secondary-orange-400 bg-secondary-orange-400 hover:bg-transparent text-white hover:text-secondary-orange-400">
                  <span>{props.bestRewardButtonName}</span>
                </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Fade>
    </>
  );
};

export default BestRewardSection;

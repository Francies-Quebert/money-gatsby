import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import Fade from "react-reveal";

const FinancialToolSection = (props) => {
  // console.log(props, "test");

  // const Image = useStaticQuery(graphql`
  //   query {
  //     allSanityImageAsset {
  //       edges {
  //         node {
  //           localFile {
  //             childImageSharp {
  //               fluid {
  //                 src
  //               }
  //             }
  //           }
  //           _id
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      {/* Financial Tool section */}
      <Fade bottom>
        <section className="mt-10 lg:mt-24 lg:mx-16 mx-6  ">
          <div>
            <div className="max-w-md mx-auto">
              <div className="lg:text-center text-left text-2xl lg:text-4xl font-bold text-secondary-orange-400 uppercase border-b-2 border-white">
                <h1>{props.FinacialToolSectiontitle}</h1>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
              <div className=" mt-8 ">
                <Link to="/calculator" target="_blank">
                  <div className="max-w-sm mx-auto group relative cursor-pointer text-white p-6 h-32 border-2 border-secondary-orange-400 rounded  hover:bg-gradient-to-r hover:from-secondary-orange-600 hover:to-secondary-orange-300 flex justify-center items-center">
                    <div className="block group-hover:hidden ">
                      <div className="">
                        <h1 className="text-2xl font-bold text-secondary-orange-400">
                          {props.FinacialToolSection[0].homeFinancialTooltitle}
                        </h1>
                      </div>
                      {/* <div className="">
                        <p className="">
                          {props.FinacialToolSection[0].homeFinancialTooltitle}
                        </p>
                      </div> */}
                    </div>
                    <div className="text-center space-y-2 hidden group-hover:block top-1/2 left-0 m-auto right-0 text-2xl ">
                      <FontAwesomeIcon
                        icon={faCalculator}
                        className="text-white mx-auto "
                      />
                      <h1 className="font-bold text-xl ">
                        {props.FinacialToolSection[0].homeFinancialTooltitle}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className=" mt-8 ">
                <Link
                  to="https://consumer.experian.in/ECV-OLN/signIn?utm_source=exp_hp&utm_medium=FCRbutton&utm_campaign=FCR_web"
                  target="_blank"
                >
                  <div className="max-w-sm mx-auto group relative cursor-pointer text-white p-6 h-32 border-2 border-secondary-orange-400 rounded  hover:bg-gradient-to-r hover:from-secondary-orange-600 hover:to-secondary-orange-300 flex justify-center items-center">
                    <div className="block group-hover:hidden ">
                      <div className="">
                        <h1 className="text-2xl font-bold text-secondary-orange-400">
                          {props.FinacialToolSection[1].homeFinancialTooltitle}
                        </h1>
                      </div>
                      {/* <div className="">
                        <p className="">
                          {props.FinacialToolSection[1].homeFinancialTooltitle}
                        </p>
                      </div> */}
                    </div>
                    <div className="text-center space-y-2 hidden group-hover:block top-1/2 left-0 m-auto right-0 text-2xl ">
                      <FontAwesomeIcon
                        icon={faCalculator}
                        className="text-white mx-auto "
                      />
                      <h1 className="font-bold text-xl ">
                        {props.FinacialToolSection[1].homeFinancialTooltitle}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <div id="ecww-widgetwrapper" style="min-width:250px;width:100%;">
            <div
              id="ecww-widget"
              style="position:relative;padding-top:0;padding-bottom:280px;height:0;overflow:hidden;"
            ></div>
            <div
              id="ecww-more"
              style="background:#333;font:normal 13px/1 Helvetica, Arial, Verdana, Sans-serif;padding:10px 0;color:#FFF;text-align:center;width:100%;clear:both;margin:0;clear:both;float:left;"
            ></div>
          </div> */}
        </section>
      </Fade>
    </>
  );
};

export default FinancialToolSection;

import { Link } from "gatsby";
import React, { useState } from "react";
import IMG from "../../images/chooseimage.jpg";
import Fade from "react-reveal"

const CreditFormSection = () => {
  const [login, setLogin] = useState({
    FullName: "",
    PhoneNumber: "",
    Email: "",
  });

  const submitHandler = (event) => {
    if (
      login.FullName !== "" &&
      login.Email !== "" &&
      login.PhoneNumber !== ""
    ) {
      alert(`Hello ${login.FullName} Welcome to Contact Us Page`);
    }
  };

  return (
    <>
    <Fade bottom>
      <section className="lg:mx-16  mx-6 ">
        <div className="mt-10 bg-white rounded">
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:px-40  py-14 rounded">
            <div className="  ml-5 ">
              <h1 className="font-bold text-2xl tracking-wider">Let’s find the best </h1>
              <h1 className="font-bold text-2xl tracking-wider"> credit card for you.</h1>
              <img src={IMG} className="w-40 h-4 pt-1 hidden lg:block" />
              <p className="mt-10 pr-32">
                Share your preferences, fill form & we will find the best match
                for you.
              </p>
            </div>

            <div>
              <form className="space-y-5 px-5 mt-5">
                <div>
                  <input
                    type="text"
                    className=" form-input text-sm p-5 border border-gray-300  lg:w-6/6 sm:w-full  w-full focus:outline-none rounded "
                    value={login.FullName}
                    onChange={(e) =>
                      setLogin({ ...login, FullName: e.target.value })
                    }
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className=" form-input text-sm p-5 border border-gray-300  lg:w-6/6 sm:w-full w-full focus:outline-none rounded "
                    value={login.PhoneNumber}
                    onChange={(e) =>
                      setLogin({ ...login, PhoneNumber: e.target.value })
                    }
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className=" form-input text-sm p-5 border border-gray-300  lg:w-6/6 sm:w-full w-full focus:outline-none rounded "
                    value={login.Email}
                    onChange={(e) =>
                      setLogin({ ...login, Email: e.target.value })
                    }
                    placeholder="Email address"
                    required
                  />
                </div>
                <div>
                  <div className=" text-sm space-x-6 flex">
                    <input
                      type="checkbox"
                      className="bg-secondary-lime-500 h-7 text-3xl"
                    />
                    <p className="pb-5 ">
                      I accept Privacy Policy and &nbsp;
                      <Link to="#" className="underline">
                        Terms and Conditions
                      </Link>
                      . I appoint MoneyTick as authorized representative to
                      receive my credit information from Experian for the
                      purpose of providing access to credit & targeted offers
                      ('End Use Purpose') as defined in given &nbsp;
                      <Link to="#" className="underline">
                        Terms and Conditions
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className=" md:text-center text-center py-5">
            <button
              onClick={submitHandler}
              className="  rounded-lg w-32 bg-gradient-to-r from-secondary-orange-500   to-secondary-orange-300 p-2 text-white font-bold"
            >
              Let's go!
            </button>
          </div>

          {/* <a
            className="bg-70% bg-no-repeat bg-white rounded-md p-40  items-start bg-full"
            style={{
              backgroundImage: `url("${images.govind.edges[0].node.childImageSharp.fluid.src}")`,
            }}
          >
              <div>
                  hello
              </div>
          </a> */}
          {/* <GatsbyImage image={getImage(images.govind.edges[0].node.childImageSharp.fluid)}
            src={images.govind.edges[0].node.childImageSharp.fluid.src}
          /> */}
        </div>
      </section>
      </Fade>
    </>
  );
};

export default CreditFormSection;

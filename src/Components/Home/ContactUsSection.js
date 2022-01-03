import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
// import { Axios } from "axios";
import axios from "contentful-management/node_modules/axios";
// import nodemailer from "nodemailer";

// const nodemailer = require("nodemailer")

const ContactUsSection = ({ title }) => {
  const initialValues = {
    FullName: "",
    PhoneNumber: "",
    Email: "",
    Message: "",
  };
  const [login, setLogin] = useState(initialValues);

  const submitHandler = () => {
    let data = {
      FullName: login.FullName,
      PhoneNumber: login.PhoneNumber,
      Email: login.Email,
      Message: login.Message,
    };
    console.log(data, "login");
    axios
      .post("http://192.168.0.109:4002/navbar/saveMoneyTickContactSheet", {
        data: data,
      })
      .then((response) => {
        if (response.status === 201) {
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
    setLogin(initialValues);
  };
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "CONTACT.png" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 655, height: 644, formats: [PNG])
          }
        }
      }
    }
  `);

  return (
    <>
      <section className="">
        <div className="text-white flex flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl lg:mx-28 mx-6 font-bold">{title}</h1>
            <form className="space-y-5 lg:mx-28 mx-6 mt-10 " action="send">
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Full Name
                </label>
                <input
                  type="text"
                  autoComplete="false"
                  className=" form-input text-base p-5 bg-transparent border border-secondary-orange-500  lg:w-6/6 sm:w-full  w-full focus:outline-none rounded "
                  value={login.FullName}
                  onChange={(e) =>
                    setLogin({ ...login, FullName: e.target.value })
                  }
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Mobile No.
                </label>
                <input
                  type="text"
                  autoComplete="false"
                  className=" form-input text-base p-5 bg-transparent border border-secondary-orange-500  lg:w-6/6 sm:w-full  w-full focus:outline-none rounded "
                  value={login.PhoneNumber}
                  onChange={(e) =>
                    setLogin({ ...login, PhoneNumber: e.target.value })
                  }
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Email Address
                </label>
                <input
                  type="email"
                  className=" form-input text-base p-5 bg-transparent border border-secondary-orange-500  lg:w-6/6 sm:w-full w-full focus:outline-none rounded "
                  value={login.Email}
                  onChange={(e) =>
                    setLogin({ ...login, Email: e.target.value })
                  }
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Message
                </label>

                <textarea
                  rows={5}
                  className=" form-textarea rounded focus:outline-none text-base p-3 bg-transparent border border-secondary-orange-500 lg:w-6/6 sm:w-full w-full "
                  value={login.Message}
                  onChange={(e) =>
                    setLogin({ ...login, Message: e.target.value })
                  }
                  placeholder="Write your message for the team"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => {
                    submitHandler();
                  }}
                  className="shadow-bottom transition duration-500 bg-gradient-to-r from-secondary-orange-600 to-secondary-orange-400 text-white p-4 font-bold w-full rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="flex-3">
            <GatsbyImage
              image={getImage(images.allFile.nodes[0].childImageSharp)}
              alt="image"
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;

import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import GatsbyImageCustom from "../Image/GatsbyImageCustom";
import Logo from "../../images/logo-mt-1.png";

const Header = ({ data }) => {
  // console.log(data,"data")
  const isBrowser = typeof window !== "undefined";
  // console.log(isBrowser, "isBrowser");
  // const logoImg = useStaticQuery(graphql`
  //   query {
  //     allSanitySiteSettings {
  //       edges {
  //         node {
  //           headerblock {
  //             hdrlogo {
  //               asset {
  //                 gatsbyImageData
  //               }
  //             }
  //             mainnavigation {
  //               menu_block {
  //                 _rawSubMenuSection
  //                 menu_item_link
  //                 menu_item_externallink
  //                 menu_target_link
  //                 menu_item_title
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const [isBrowserState, setisBrowserState] = useState(isBrowser);
  // const [windowState, setWindowState] = useState(
  //   isBrowser ? window.innerWidth : 0
  // );

  // useEffect(() => {
  //   setisBrowserState(isBrowser);
  // }, [isBrowser]);
  const [navBar, setNavBar] = useState(false);
  useEffect(() => {
    let body = document.getElementsByTagName("body");
    if (navBar && isBrowser && window.innerWidth < 768) {
      if (body.length > 0) body[0].classList.add("overflow-hidden");
    } else {
      body[0].classList.remove("overflow-hidden");
    }
  }, [navBar]);

  // useEffect(() => {
  //   if (isBrowser && window.innerWidth >= 768) {
  //     setNavBar(false);
  //   }
  // }, [window.innerWidth]);

  return data ? (
    <div className="fixed z-50 top-0 w-full ">
      <div className="bg-secondary-blue-400 shadow-1xl">
        <div className="max-w-6xl m-auto">
          <div className=" font-body h-24 flex items-center  ">
            <div className="lg:mx-16 mx-6 container  ">
              <div className="flex justify-between static">
                <div className="hidden lg:flex">
                  <Link to="/">
                    <div className="py-3 lg:py-0">
                      <GatsbyImageCustom
                        className="w-48 lg:w-40"
                        alt="logo Money"
                        id={data._rawHdrlogo.asset._ref}
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex lg:hidden">
                  <Link to="/">
                    <div className="py-3 lg:py-0 flex lg:hidden justify-start">
                      <img className="w-40" alt="logo Money" src={Logo} />
                    </div>
                  </Link>
                </div>
                <div className="lg:hidden py-2 flex">
                  <div className="block m-auto ">
                    <div
                      className="nav-bar-btn"
                      onClick={() => {
                        setNavBar(!navBar);
                      }}
                    >
                      <span
                        className="pr-2 flex items-center"
                        style={{ paddingBottom: 3 }}
                      >
                        <FontAwesomeIcon icon={faBars} />
                      </span>
                      <span className=" font-medium"> Menu</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`transition-width transition-height duration-300 ease-in-out ${
                    navBar
                      ? `w-full h-4/5 opacity-100 bg-secondary-blue-400 nav-open`
                      : `w-0 h-0 opacity-0`
                  } lg:w-auto lg:h-auto opacity-100 nav-bar-container`}
                >
                  <ul className="nav-bar-menu-ul text-sm font-bold">
                    {data.mainnavigation.menu_block.map((link) => {
                      return link.menu_item_link === null ? (
                        <li
                          key={link.menu_item_title}
                          className="relative group block lg:inline-block  lg:pl-5 text-secondary-orange-400 hover:text-white"
                        >
                          <div className="nav-bar-has-sublink">
                            <div className="cursor-pointer">
                              {link.menu_item_title}
                            </div>
                            <div className="lg:hidden">
                              <FontAwesomeIcon icon={faChevronCircleDown} />
                            </div>
                          </div>
                          <div className="nav-bar-sublink-conatiner lg:min-w-200 lg:text-center">
                            <ul className=" lg:rounded-b-xl lg:pb-2 px-4">
                              {link._rawSubMenuSection.hassubmenu.add_menu_group[0].add_sub_menu_items.map(
                                (subLink) => {
                                  return (
                                    <li
                                      key={subLink.sub_menu_item_title}
                                      className="py-2 z-50  hover:text-secondary-orange-400"
                                    >
                                      <Link
                                        to={subLink.sub_menu_item_link}
                                        className="cursor-pointer"
                                      >
                                        {subLink.sub_menu_item_title}
                                      </Link>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </li>
                      ) : (
                        <li
                          key={link.menu_item_title}
                          className="nav-bar-menu "
                        >
                          <Link
                            className="cursor-pointer "
                            to={link.menu_item_link}
                            activeClassName="text-white md:actve-nav "
                          >
                            {link.menu_item_title}
                          </Link>
                        </li>
                      );
                    })}
                    {/* <li className="nav-bar-menu ">
                <Link
                  className="cursor-pointer "
                  to="/"
                  activeClassName="text-secondary-orange-600 md:actve-nav "
                >
                  Home
                </Link>
              </li>
              <li className="nav-bar-menu">
                <Link
                  className="cursor-pointer"
                  to="/creditcard"
                  activeClassName="text-secondary-orange-600 md:actve-nav "
                >
                  Credit Cars
                </Link>
              </li>
              <li className="nav-bar-menu">
                <Link className="cursor-pointer">Our Service</Link>
              </li>
              <li className="relative group block lg:inline-block  lg:pl-5 ">
                <Link className="nav-bar-has-sublink">
                  <div className="cursor-pointer">EMI Calculator</div>
                  <div className="lg:hidden">
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  </div>
                </Link>
                <div className="nav-bar-sublink-conatiner">
                  <ul className="bg-white lg:rounded-b-xl lg:pb-2 px-4">
                    <li className="py-2 z-50  hover:text-secondary-orange-400">
                      <Link to="/emiCalc" className="cursor-pointer">
                        Home Loan EMI Calculator
                      </Link>
                    </li>
                    <li className="py-2 hover:text-secondary-orange-400">
                      <Link className="cursor-pointer">
                        Personal Loan EMI Calculator
                      </Link>
                    </li>
                    <li className="py-2 hover:text-secondary-orange-400">
                      <Link className="cursor-pointer">
                        Businness Loan EMI Calculator
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-bar-menu">
                <Link className="cursor-pointer">Our Service</Link>
              </li>
              <li className="relative group block lg:inline-block  lg:pl-5 ">
                <Link className="nav-bar-has-sublink">
                  <div className="cursor-pointer">EMI Calculator</div>
                  <div className="lg:hidden">
                    <FontAwesomeIcon icon={faChevronCircleDown} />
                  </div>
                </Link>
                <div className="nav-bar-sublink-conatiner">
                  <ul className="bg-white lg:rounded-b-xl lg:pb-2 px-4">
                    <li className="py-2 z-50  hover:text-secondary-orange-400">
                      <Link className="cursor-pointer">
                        Home Loan EMI Calculator
                      </Link>
                    </li>
                    <li className="py-2 hover:text-secondary-orange-400">
                      <Link className="cursor-pointer">
                        Personal Loan EMI Calculator
                      </Link>
                    </li>
                    <li className="py-2 hover:text-secondary-orange-400">
                      <Link className="cursor-pointer">
                        Businness Loan EMI Calculator
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Header;

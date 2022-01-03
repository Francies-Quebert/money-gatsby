import {
  faCircle,
  // faCircleNotch,
  // faEnvelope,
  // faMapMarkerAlt,
  // faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
// import IMG1 from "../images/app-store-logo.svg";
// import IMG2 from "../images/google-play-badge.svg";
import GatsbyImageCustom from "./Image/GatsbyImageCustom";

const footer = (props) => {
  // console.log(props.data.footerblock);
  return (
    <>
      <footer className="py-8 mt-8 bg-secondary-blue-300">
        <div className="max-w-6xl mx-auto">
          <div className="px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:px-10">
              <div className="px-0 pt-4 flex flex-col lg:flex-row justify-between">
                <div>
                  <Link to="/">
                    <div className="relative flex items-center">
                      <GatsbyImageCustom
                        id={props.data.footerblock._rawFooterLogo.asset._ref}
                        alt="a"
                        imgStyle={{ objectFit: "contain" }}
                        className="w-44 h-32"
                      />
                    </div>
                  </Link>
                  <div className="">
                    <p className="text-base my-1 px-0.5 text-white">
                      {
                        props.data.footerblock.footer_company_Address_Info[0]
                          ._rawChildren[0].text
                      }
                    </p>
                    <p className="text-base my-1 px-0.5 text-white">
                      {
                        props.data.footerblock.footer_company_Address_Info[1]
                          ._rawChildren[0].text
                      }
                    </p>
                    <p className="text-base my-1 px-0.5 text-white">
                      {
                        props.data.footerblock.footer_company_Address_Info[2]
                          ._rawChildren[0].text
                      }
                    </p>
                    <p className="text-base my-1 px-0.5 text-white">
                      {
                        props.data.footerblock.footer_company_Address_Info[3]
                          ._rawChildren[0].text
                      }
                    </p>
                    <p className="text-base my-1 px-0.5 text-white">
                      {
                        props.data.footerblock.footer_company_Address_Info[4]
                          ._rawChildren[0].text
                      }
                    </p>
                    <p className="text-base my-1 px-0.5 text-white">
                      {
                        props.data.footerblock.footer_company_Address_Info[5]
                          ._rawChildren[0].text
                      }
                    </p>
                  </div>
                  <div className="flex mt-6">
                    {props.data.socailmenublock._rawSocialWidgetSection &&
                      props.data.socailmenublock._rawSocialWidgetSection.map(
                        (aa, idx) => (
                          <a
                            href={aa.social_item_link}
                            className="mr-6"
                            key={idx}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GatsbyImageCustom
                              id={aa.social_item_icon_image.asset._ref}
                              alt={aa.social_item_icon_image_alt}
                              size="2x"
                              className="text-white w-7 h-7"
                            />
                          </a>
                        )
                      )}
                  </div>
                </div>
                <div className="mr-6 mt-4 lg:mt-0 flex flex-col lg:items-center justify-center">
                  {/* <div className="p-2.5 mb-3 text-lg text-secondary-orange-400 font-bold ">
                    {
                      props.data.footerblock.footer_widget_section[0]
                        .widget_section_menu._rawMenuBlock[0].sub_menu_section
                        .hassubmenu.add_menu_group[0].group_title
                    }
                  </div> */}
                  <ul>
                    {props.data.footerblock.footer_widget_section[0]
                      .widget_section_menu._rawMenuBlock[0].sub_menu_section
                      .hassubmenu.add_menu_group[0].add_sub_menu_items &&
                      props.data.footerblock.footer_widget_section[0].widget_section_menu._rawMenuBlock[0].sub_menu_section.hassubmenu.add_menu_group[0].add_sub_menu_items.map(
                        (aa, idx) => (
                          <Link key={idx} to={aa.sub_menu_item_link}>
                            <li className="text-base font-semibold text-gray-500 hover:text-secondary-orange-500 px-2.5 pb-2.5">
                              {aa.sub_menu_item_title}
                            </li>
                          </Link>
                        )
                      )}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <iframe
                  title="maps"
                  className="w-full h-80 rounded"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=812,Corporate%20Annex,%20%20Next%20to%20Udyog%20Bhavan,%20%20Sonawala%20Road,%20%20Goregaon%20(East),%20%20Mumbai%20400%20063+(Money%20Tick)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
            <div className="lg:px-10 my-4">
              <div className="pt-2 text-secondary-orange-500 col-span-4 flex flex-col md:flex-row">
                <div className="pb-4 lg:pb-0">
                  {props.data.footerblock.copy_right_text} All Rights Reserved.
                </div>
                <div className="pb-4 lg:pb-0 pl-0 lg:pl-4">
                  <FontAwesomeIcon icon={faCircle} className="pr-2" />
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;

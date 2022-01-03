import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../footer";
// import { StaticImage } from "gatsby-plugin-image";

import { useStaticQuery, graphql } from "gatsby";
import Loader from "../../pages/loader";
// import { Helmet } from "react-helmet";
// import { Helmet } from "react-helmet";
const Layout = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      try {
        const element = document.getElementById("full-page-loader");
        if (element) element.parentNode.removeChild(element);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  });
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        edges {
          node {
            headerblock {
              mainnavigation {
                menu_block {
                  _rawSubMenuSection
                  menu_item_link
                  menu_item_externallink
                  menu_target_link
                  menu_item_title
                }
              }
              _rawHdrlogo
            }
            footerblock {
              _rawFooterLogo
              copy_right_text
              _rawFooterDescWidgetSection
              footer_company_Address_Info {
                _rawChildren
              }
              footer_widget_section {
                widget_section_menu {
                  _rawMenuBlock
                }
              }
            }
            socailmenublock {
              _rawSocialWidgetSection
            }
          }
        }
      }
    }
  `);
  // console.log(data.allSanitySiteSettings.edges[0].node, "sad");
  return (
    <>
      <div>
        <div id="full-page-loader">
          <Loader />
        </div>
        <Header data={data.allSanitySiteSettings.edges[0].node.headerblock} />{" "}
        <main className="relative z-10 pt-20 lg:pt-32">{children}</main>
        <Footer
          className="max-w-6xl m-auto"
          data={data.allSanitySiteSettings.edges[0].node}
        />
      </div>
    </>
  );
};
export default Layout;

import React, { useState, useEffect } from "react";
import CCDIMG from "../../images/creditcard.png";
import CommonLeftTextRightImgComponent from "../Home/CommonLeftTextRightImgComponent";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
const CreditCardHeaderSection = () => {
  const [data, setData] = useState();

  const logoImg = useStaticQuery(graphql`
    query {
      allSanityPage(
        filter: { id: { eq: "-210c0947-a10f-5482-a502-ea15482a769f" } }
      ) {
        edges {
          node {
            _rawPagebuildersection
            pagebuildersection {
              ... on SanityHomeLandingSection {
                home_landing_image {
                  asset {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  useEffect(() => {
    setData(logoImg.allSanityPage.edges[0].node._rawPagebuildersection[0]);
  }, [logoImg.allSanityPage.edges[0].node._rawPagebuildersection]);

  return data ? (
    <>
      {/* {console.log(logoImg.home_landing_title, logoImg.home_landing_desc)} */}
      <section>
        <div>
          <CommonLeftTextRightImgComponent
            title1={data.home_landing_title_highlighted}
            title={data.home_landing_title}
            content={data.home_landing_desc}
            // tailwindstyle={true}

            img={getImage(
              logoImg.allSanityPage.edges[0].node.pagebuildersection[0]
                .home_landing_image.asset.gatsbyImageData
            )}
            rotateImg={true}
          />
          {/* <div className="lg:mx-28 mx-8 left-2  relative bottom-20 ">
            <button className="text-white bg-gradient-to-r from-secondary-orange-600  to-secondary-orange-400 font-bold w-44  p-3 rounded">
              
            </button>
          </div> */}
        </div>
      </section>
    </>
  ) : null;
};

export default CreditCardHeaderSection;

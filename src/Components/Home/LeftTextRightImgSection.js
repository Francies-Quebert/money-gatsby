import React, { useState, useEffect } from "react";
import IMG from "../../images/image.svg";
import CommonLeftTextRightImgComponent from "./CommonLeftTextRightImgComponent";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";


const LeftTextRightImgSection = () => {
  const [data, setData] = useState();

  const logoImg = useStaticQuery(graphql`
    query {
      allSanityPage(
        filter: { id: { eq: "-bfa4a570-d897-55b5-bf2d-b1afd3b7d21f" } }
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
      <div>
        <CommonLeftTextRightImgComponent
          title={data.home_landing_title}
          content={data.home_landing_desc}
          img={getImage(
            logoImg.allSanityPage.edges[0].node.pagebuildersection[0]
              .home_landing_image.asset.gatsbyImageData
          )}
          rotateImg={false}
          imageStyle={{ maxWidth: 500, minWidth:480 }}
        />
      </div>
    </>
  ) : null;
};

export default LeftTextRightImgSection;

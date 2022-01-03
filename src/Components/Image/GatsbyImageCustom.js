// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { getImage, GatsbyImage } from "gatsby-plugin-image";
// const GatsbyImageCustom = (props) => {
//   const Image = useStaticQuery(graphql`
//     query {
//       allSanityImageAsset {
//         nodes {
//           _id
//           localFile {
//             childImageSharp {
//               gatsbyImageData
//               fluid {
//                 src
//               }
//             }
//           }
//           gatsbyImageData
//         }
//       }
//     }
//   `);
//   // return <div>{console.log(Image.allSanityImageAsset.nodes.find(aa=>aa.id===id).gatsbyImageData,id, "Image")}</div>;

//   const ImageData = Image.allSanityImageAsset.nodes.find(
//     (aa) => aa._id === props.id
//   );
//   // return null;
//   return ImageData ? (
//     ImageData.localFile.childImageSharp ? (
//       <img
//         src={getImage(ImageData.localFile.childImageSharp.gatsbyImageData)}
//         {...props}
//       />
//     ) : (
//       <img src={getImage(ImageData.gatsbyImageData)} {...props} />
//     )
//   ) : (
//     "Not Found"
//   );
// };

// export default GatsbyImageCustom;

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
const GatsbyImageCustom = (props) => {
  const Image = useStaticQuery(graphql`
    query {
      allSanityImageAsset {
        nodes {
          _id
          url
        }
      }
    }
  `);
  // return <div>{console.log(Image.allSanityImageAsset.nodes.find(aa=>aa.id===id).gatsbyImageData,id, "Image")}</div>;

  const ImageData = Image.allSanityImageAsset.nodes.find(
    (aa) => aa._id === props.id
  );
  // console.log(ImageData.localFile.childImageSharp.fixed.src,"sad")
  // return null;

  return ImageData ? (
    <img alt="head" src={ImageData.url} {...props} className={props.className ?props.className :props.classes} />
  ) : (
    "Not Found"
  );
};

export default GatsbyImageCustom;

// import { useStaticQuery } from "gatsby";
// import { graphql } from "graphql";
import React from "react";

const List = ({children}) => {
  // console.log(children, "List");
  //   const data = useStaticQuery(graphql`
  //     {
  //       allSanityPage {
  //         edges {
  //           node {
  //             _rawPagebuildersection
  //             pagebuildersection {
  //               ... on SanityCreditAccordonSection {
  //                 _key
  //                 _type
  //                 _rawCreditAccordonSection
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);
  return (
    <ul className="list-disc">
      <li>{children.children[1]}</li>
    </ul>
  );
};

export default List;

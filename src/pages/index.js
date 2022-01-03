import React from "react";
import { graphql } from "gatsby";
import Errors from "../Components/Errors/Errors";
import Page from "../templates/Page";

export const query = graphql`
  query FrontpageQuery {
    page: sanityPage(id: { eq: "-bfa4a570-d897-55b5-bf2d-b1afd3b7d21f" }) {
      slug {
        current
      }
      title
      id
      meta_title
      meta_desc
      _rawPagebuildersection
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;
  if (errors) {
    return <Errors errors={errors} />;
  }

  return <Page data={data} />;
};

export default IndexPage;

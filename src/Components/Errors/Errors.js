import React from "react";
import GraphQLErrorList from "../GraphQLErrorList/GraphQLErrorList";

const Errors = ({ errors }) => (
//   <Layout>
    <GraphQLErrorList errors={errors} />
//   </Layout>
);

export default Errors;
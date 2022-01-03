import * as React from "react";
import { Helmet } from "react-helmet";
import CreditSection from "../Components/Home/CreditSection";
// import BestOffer from "../Components/Home/BestOffer";
import BestRewardSection from "../Components/Home/BestRewardSection";
import FinancialToolSection from "../Components/Home/FinancialToolSection";
import RightTextLeftImgSection from "../Components/Home/RightTextLeftImgSection";
import TextWithCard from "../Components/Home/TextWithCard";
// import TwoCardTestimonials from "../Components/Home/TwoCardTestimonials";
// import OurTeamSection from "../Components/Home/OurTeamSection";
// import OurPartnerSection from "../Components/Home/OurPartnerSection";
// import RightImgLeftFeatures from "../Components/Home/RightImgLeftFeatures";
// import TrendingOfferSection from "../Components/Home/TrendingOfferSection";
import { graphql } from "gatsby";
import GraphQLErrorList from "../Components/GraphQLErrorList/GraphQLErrorList";
import Layout from "../Components/Layout";
import CounterSection from "../Components/Home/CounterSection";
import CommonLeftTextRightImgComponent from "../Components/Home/CommonLeftTextRightImgComponent";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityPage(id: { eq: $id }) {
      slug {
        current
      }
      title
    }
  }
`;

const Page = (props) => {
  const { data, errors } = props;
  if (errors) {
    return (
      // <Layout location={props.location}>
      <GraphQLErrorList errors={errors} />
      // </Layout>
    );
  }
  const page = data.page || data.route.page;
  const content = (page._rawPagebuildersection || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      // console.log(c._type);
      switch (c._type) {
        case "home_landing_section":
          el = <CommonLeftTextRightImgComponent key={c._key} {...c} />;
          break;
        case "CounterSection":
          el = <CounterSection key={c._key} {...c} />;
          break;
        case "TextWithCardSection":
          el = <TextWithCard key={c._key} {...c} />;
          break;
        case "RightTextLeftImgSection":
          el = <RightTextLeftImgSection key={c._key} {...c} />;
          break;
        // case "TrendingOfferSection":
        //   el = <TrendingOfferSection key={c._key} {...c} />;
        //   break;
        // case "testimonials":
        //   el = <TwoCardTestimonials key={c._key} {...c} />;
        //   break;
        case "creditSection":
          el = <CreditSection key={c._key} {...c} />;
          break;
        case "BestRewardSection":
          el = <BestRewardSection key={c._key} {...c} />;
          break;
        case "FinacialToolSection":
          el = <FinancialToolSection key={c._key} {...c} />;
          break;
        // case "OurPartnerSection":
        //   el = <OurPartnerSection key={c._key} {...c} />;
        //   break;
        // case "OurTeamSection":
        //   el = <OurTeamSection key={c._key} {...c} />;
        //   break;
        // case "featuresSection":
        //   // console.log(":found case")
        //   el = <RightImgLeftFeatures key={c._key} {...c} />;
        //   break;
        // case "bestOfferSection":
        //   // console.log(":found case")
        //   el = <BestOffer key={c._key} {...c} />;
        //   break;
        default:
          el = null;
      }
      return el;
    });

  // const pageTitle = page.title;

  return (
    <>
      <Layout location={props.location}>
        <Helmet>
          <title>{data.page.meta_title || data.page.title}</title>
          <meta
            property="og:title"
            content={data.page.meta_title || data.page.title}
          />
          <meta
            property="twitter:title"
            content={data.page.meta_title || data.page.title}
          />
          <meta name="description" content={data.page.meta_desc} />
          <meta property="og:description" content={data.page.meta_desc} />
          <meta property="twitter:description" content={data.page.meta_desc} />
          <script src="https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js" type="text/javascript"></script>
        </Helmet>
        <div className="font-custom">{content}</div>
      </Layout>
    </>
  );
};

export default Page;

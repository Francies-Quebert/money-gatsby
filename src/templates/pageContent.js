import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import CreditSection from "../Components/Home/CreditSection";
// import TrendingOfferSection from "../Components/Home/TrendingOfferSection";
import Layout from "../Components/Layout";
import CommonLeftTextRightImgComponent from "../Components/Home/CommonLeftTextRightImgComponent";
// import CreditServicesection from "../Components/CreditCard/CreditServicesection";
import FinancialToolSection from "../Components/Home/FinancialToolSection";
import CreditAccordinsComponent from "../Components/CreditCard/CreditAccordinsComponent";
// import BestOffer from "../Components/Home/BestOffer";
import BestRewardSection from "../Components/Home/BestRewardSection";
// import AboutUsCardSection from "../Components/AboutUs Page/AboutUsCardSection";
import WhoWeAreSection from "../Components/AboutUs Page/WhoWeAreSection";
// import AboutBestOfferSection from "../Components/AboutUs Page/AboutBestOfferSection";
import WhoWeDoSection from "../Components/AboutUs Page/WhoWeDoSection";
// import TextWithCard from "../Components/Home/TextWithCard";
// import RightTextLeftImgSection from "../Components/Home/RightTextLeftImgSection";
import ServiceSection from "../Components/Home/ServiceSection/ServiceSection";
import TwoCardTestimonials from "../Components/Home/TwoCardTestimonials";
import OurPartnerSection from "../Components/Home/OurPartnerSection";
import OurTeamSection from "../Components/Home/OurTeamSection";
import EmiCalcSection from "../Components/EMICalcutor/EmiCalcSection";
import ContactUsSection from "../Components/Home/ContactUsSection";
import CarrerBanner from "../Components/Carrers/CarrerBanner";
import LifeAtMoneyTick from "../Components/Carrers/LifeAtMoneyTick";
import JoinOurTeam from "../Components/Carrers/JoinOurTeam";

const PageContent = ({ data, location }) => {
  // console.log("page Content data", data);

  return (
    <Layout>
      <Helmet>
        <title>{data.pagedata.meta_title || data.pagedata.title}</title>
        <meta
          property="og:title"
          content={data.pagedata.meta_title || data.pagedata.title}
        />
        <meta
          property="twitter:title"
          content={data.pagedata.meta_title || data.pagedata.title}
        />
        <meta name="description" content={data.pagedata.meta_desc} />
        <meta property="og:description" content={data.pagedata.meta_desc} />
        <meta
          property="twitter:description"
          content={data.pagedata.meta_desc}
        />
        {/* <meta property="og:type" content="article" /> */}
      </Helmet>
      {data.pagedata._rawPagebuildersection &&
        data.pagedata._rawPagebuildersection.map((section) => {
          // console.log(section, "page content");
          if (section._type === "home_landing_section") {
            return (
              <CommonLeftTextRightImgComponent
                key={section._key}
                {...section}
              />
            );
          } else if (section._type === "serviceTypeSection") {
            return <ServiceSection key={section._key} {...section} />;
            {
              /* } else if (section._type === "TrendingOfferSection") {
            return <TrendingOfferSection key={section._key} {...section} />; */
            }
          } else if (section._type === "creditSection") {
            return <CreditSection key={section._key} {...section} />;
            {
              /* } else if (section._type === "TrendingOfferSection") {
            return <TrendingOfferSection key={section._key} {...section} />; */
            }
            {
              /* }
           else if (section._type === "bestOfferSection") {
            return <BestOffer key={section._key} {...section} />; */
            }
          } else if (section._type === "BestRewardSection") {
            return <BestRewardSection key={section._key} {...section} />;
          } else if (section._type === "CreditAccordonSection") {
            return <CreditAccordinsComponent key={section._key} {...section} />;
          } else if (section._type === "FinacialToolSection") {
            return <FinancialToolSection key={section._key} {...section} />;
          } else if (section._type === "WhoWeAreSection") {
            return <WhoWeAreSection key={section._key} {...section} />;
            {
              /* } 
          else if (section._type === "bestOfferSection") {
            return <AboutBestOfferSection key={section._key} {...section} />; */
            }
          } else if (section._type === "WhoWeDoSection") {
            return <WhoWeDoSection key={section._key} {...section} />;
          } else if (section._type === "testimonials") {
            return <TwoCardTestimonials key={section._key} {...section} />;
          } else if (section._type === "OurPartnerSection") {
            return <OurPartnerSection key={section._key} {...section} />;
          } else if (section._type === "OurTeamSection") {
            return <OurTeamSection key={section._key} {...section} />;
          } else if (section._type === "emi_calc_section") {
            return <EmiCalcSection key={section._key} {...section} />;
          } else if (section._type === "contact_us") {
            return <ContactUsSection key={section._key} {...section} />;
          } else if (section._type === "carrers_header_section") {
            return <CarrerBanner key={section._key} {...section} />;
          } else if (section._type === "carrers_gallery_section") {
            return <LifeAtMoneyTick key={section._key} {...section} />;
          } else if (section._type === "carrers_form_section") {
            return <JoinOurTeam key={section._key} {...section} />;
            {
              /* } else if (section._type === "TextWithCardSection") {
            return <TextWithCard key={section._key} {...section} />;
          } else if (section._type === "RightTextLeftImgSection") {
            return <RightTextLeftImgSection key={section._key} {...section} />; */
            }
          }
          {
            /* else if (section._type === "AboutUsCardSection")
           {
            return <AboutUsCardSection key={section._key} {...section} />;
          }  */
          }
        })}
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePage($slug: String) {
    pagedata: sanityPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      meta_title
      meta_desc
      id
      _rawPagebuildersection
    }
  }
`;
export default PageContent;

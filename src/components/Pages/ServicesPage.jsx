import { useEffect } from "react";
import { pageTitle } from "../../helper";
import Card from "../Card";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function ServicesPage() {
  pageTitle("Service");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Services"
        bgSrc="images/service_hero_bg.jpeg"
        pageLinkText="Services"
      />
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services I can help you with"
                subtitle=""
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Cosmetic Surgery"
                    link="/service/cosmetic-surgery"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Reconstructive Surgery"
                    link="/service/reconstructive-surgery"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Spacing lg="40" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Hand Surgery"
                    link="/service/hand-surgery"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Non-Surgical Treatments"
                    link="/service/non-surgical-treatments"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="125" md="55" />
      <TestimonialSlider /> */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Start Your Journey Towards Confidence and Radiance"
          btnText="Book Your Consultation"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}

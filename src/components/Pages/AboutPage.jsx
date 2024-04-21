import { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function AboutPage() {
  pageTitle("About");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="About Dr. Mai"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="A Leading Light in Plastic Surgery Across UAE"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Celebrated as one of the most distinguished plastic surgeons in
                Dubai and the wider UAE. Renowned for her expertise and a
                personalized approach to care, she stands as a beacon of
                excellence in cosmetic and reconstructive surgery, attracting
                patients from across the Emirates and beyond.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/mai/3.png"
              alt="About"
              className="w-100 cs-radius_15"
              style={{ marginTop: "-100px" }}
            />
            <Spacing lg="25" md="25" />
          </Div>
          {/* <Div className="col-lg-7">
            <img
              src="/images/mai/3.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/mai/1.png"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div> */}
        </Div>
      </Div>
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/mai/2.png"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Comprehensive suite of surgical and non-surgical procedures"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                True beauty resonates when it aligns with the individual’s
                essence. My mission is to blend technical precision with an
                understanding of each patient’s unique desires, crafting results
                that not only enhance but truly embody their personal and
                cultural identity.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                Discover the transformative possibilities in vibrant heart of
                Dubai. Dr. Mai Rostom is dedicated to guiding you on a path of
                self-discovery and aesthetic fulfillment, where your vision of
                beauty becomes a reality. Schedule your consultation today and
                take the first step towards embracing your best self with one of
                Dubai’s most esteemed plastic surgery experts.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
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

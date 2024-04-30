import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";
import Cta from "../Cta";
import IconBox from "../IconBox";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";

const data = {
  "cosmetic-surgery": {
    title: "Cosmetic Surgery",
    subTitle:
      "Combines artistic vision with surgical precision to enhance your natural beauty",
    subServices: [
      {
        title: "Blepharoplasty",
        subTitle:
          "Reshape and refine your eyes to complement your facial features.",
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Facelift",
        subTitle:
          "Restore a youthful appearance with our advanced and subtle lifting techniques.",
        icon: "/images/icons/service_icon_2.svg",
      },
      {
        title: "Breast Augmentation",
        subTitle:
          "Perfectly balanced enhancements designed for natural and beautiful results.",
        icon: "/images/icons/service_icon_3.svg",
      },
      {
        title: "Abdominoplasty",
        subTitle:
          "Repair abdominal muscles and remove excess skin and fat for a beautifully contoured waist.",
        icon: "/images/icons/service_icon_4.svg",
      },
      {
        title: "Liposuction",
        subTitle:
          "Sculpt your body by removing unwanted fat with precision and care.",
        icon: "/images/icons/service_icon_5.svg",
      },
    ],
  },
  "reconstructive-surgery": {
    title: "Reconstructive Surgery",
    subTitle:
      "Regain your form and function with expert reconstructive surgery services, offering hope and restoration",
    subServices: [
      {
        title: "Breast Reconstruction",
        subTitle:
          "Compassionate and comprehensive reconstructive options post-mastectomy.",
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Scar Revision",
        subTitle: "Minimize the appearance of scars and improve skin texture.",
        icon: "/images/icons/service_icon_2.svg",
      },
      {
        title: "Skin cancer removal ",
        subTitle: "Skin cancer removal and reconstruction",
        icon: "/images/icons/service_icon_3.svg",
      },
    ],
  },
  "hand-surgery": {
    title: "Hand Surgery",
    subTitle:
      "Specializes in hand surgery, addressing both aesthetic and functional concerns with outstanding outcomes",
    subServices: [
      {
        title: "Carpal/cubital Tunnel Release",
        subTitle:
          "Relieve the symptoms of nerve compression with minimally invasive techniques.",
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Tendon Repairs",
        subTitle:
          "Restore the function and flexibility of injured tendons in the hand.",
        icon: "/images/icons/service_icon_2.svg",
      },
      {
        title: "Fracture Repair",
        subTitle:
          "Expert care for hand and wrist fractures, ensuring optimal healing and recovery.",
        icon: "/images/icons/service_icon_3.svg",
      },
      {
        title: "Lipofilling to hands",
        subTitle: "Restore volume and rejuvenate the hands with your own fat.",
        icon: "/images/icons/service_icon_4.svg",
      },
    ],
  },
  "non-surgical-treatments": {
    title: "Non-Surgical Treatments",
    subTitle:
      "Discover our array of non-surgical treatments designed to rejuvenate and enhance without the need for surgery",
    subServices: [
      {
        title: "Botox and Dermal Fillers",
        subTitle:
          "Smooth wrinkles and restore volume for a youthful complexion.",
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Microneedling with PRP",
        subTitle: "Improve skin texture, tone, and overall appearance.",
        icon: "/images/icons/service_icon_2.svg",
      },
      {
        title: "Skin boosters",
        subTitle: "Intense hydration and collagen stimulation.",
        icon: "/images/icons/service_icon_3.svg",
      },
    ],
  },
};

export default function ServiceDetailsPage() {
  pageTitle("Service Details");
  const { serviceDetailsId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceDetails = data[serviceDetailsId];

  return (
    <>
      <PageHeading
        title="Service Details"
        bgSrc="/images/mai/bg-02.jpg"
        pageLinkText={serviceDetails.title}
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={serviceDetails.subTitle}
          subtitle=""
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {serviceDetails.subServices.map((item, index) => (
            <Div key={index} className="col-lg-4">
              <IconBox
                icon={item.icon}
                title={item.title}
                subtitle={item.subTitle}
              />
              <Spacing lg="30" md="30" />
            </Div>
          ))}
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <TestimonialSlider />
      <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Some pre questions and answers"
                subtitle="FAQ’s"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
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

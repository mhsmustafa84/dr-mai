import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import IconBoxStyle3 from "../IconBox/IconBoxStyle3";

const data = {
  "cosmetic-surgery": {
    title: "Cosmetic Surgery",
    subTitle:
      "Combines artistic vision with surgical precision to enhance your natural beauty",
    subServices: [
      {
        title: "Face",
        categories: [
          {
            title: "Facelift",
            subCategories: [
              "Mini facelift",
              "Full facelift",
              "Deep plane facelift",
            ],
          },
          {
            title: "Necklift",
            subCategories: [],
          },
          {
            title: "Brow lift",
            subCategories: [],
          },
          {
            title: "Lip lift",
            subCategories: [],
          },
          {
            title: "Lipofilling to the face",
            subCategories: ["Microfat", "Nanofat"],
          },
          {
            title: "Buccal fat removal ",
            subCategories: [],
          },
          {
            title: "Double chin liposuction",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Breast",
        categories: [
          {
            title: "Breast augmentation",
            subCategories: [
              "Silicone implants",
              "Lipofilling (fat grafting) to breasts ",
            ],
          },
          {
            title: "Breast reduction",
            subCategories: [],
          },
          {
            title: "Breast lift (mastopexy)",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_4.svg",
      },
      {
        title: "Body",
        categories: [
          {
            title: "Liposuction",
            subCategories: [
              "Power assisted liposuction (PAL)",
              "VASER",
              "J Plasma (Renuvion) ",
            ],
          },
          {
            title: "Tummy tuck (abdominoplasty)",
            subCategories: ["Mini tummy tuck", "Full tummy tuck"],
          },
        ],
        icon: "/images/icons/service_icon_5.svg",
      },
      {
        title: "Body lift",
        categories: [
          {
            title: "Lipofilling (fat grafting)",
            subCategories: ["Brazilian butt lift (BBL)", "Hip dips", "Calves"],
          },
          {
            title: "Arm lift",
            subCategories: [],
          },
          {
            title: "Thigh lift",
            subCategories: [],
          },
          {
            title: "Labiaplasty",
            subCategories: [],
          },
          {
            title: "Mommy makeover and combination surgeries",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_5.svg",
      },
      {
        title: "Hands",
        categories: [
          {
            title: "Lipofilling to hands",
            subCategories: [],
          },
          {
            title: "Dermal fillers and collagen stimulators",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_5.svg",
      },
      {
        title: "Eyelids",
        categories: [
          {
            title: "Upper blepharoplasty",
            subCategories: [],
          },
          {
            title: "Lower blepharoplasty",
            subCategories: [],
          },
          {
            title: "Combined upper and lower blepharoplasty",
            subCategories: [],
          },
          {
            title: "Ptosis repair",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_2.svg",
      },
      {
        title: "Ears",
        categories: [
          {
            title: "Prominent ear correction",
            subCategories: [],
          },
          {
            title: "Earlobe repair",
            subCategories: [],
          },
          {
            title: "Earlobe reduction",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_3.svg",
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
        categories: [
          {
            title: "Lipofilling to breasts",
            subCategories: [],
          },
          {
            title: "Free flap reconstruction",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Scar revision",
        categories: [
          {
            title: "Z-plasty",
            subCategories: [],
          },
          {
            title: "Subcision and fat grafting",
            subCategories: [],
          },
          {
            title: "Keloid treatmen",
            subCategories: [
              "Intralesional steroid injections",
              "Surgical removal",
              "Combination therapies",
            ],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Skin cancer removal and reconstruction",
        categories: [
          {
            title: "Basal cell carcinoma (BCC)",
            subCategories: [],
          },
          {
            title: "Squamous cell carcinoma (SCC)",
            subCategories: [],
          },
          {
            title: "Pigmented lesions and melanomas",
            subCategories: [],
          },
          {
            title: "Suspicious lesions",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Lumps and bumps",
        categories: [
          {
            title: "Lipoma removal",
            subCategories: [],
          },
          {
            title: "Cyst removal",
            subCategories: [],
          },
          {
            title: "Benign skin lesions",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
    ],
  },
  "hand-surgery": {
    title: "Hand Surgery",
    subTitle:
      "Specializes in hand surgery, addressing both aesthetic and functional concerns with outstanding outcomes",
    subServices: [
      {
        title: "Nerve decompression",
        categories: [
          {
            title: "Carpal tunnel release",
            subCategories: [],
          },
          {
            title: "Cubital tunnel release",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Dupuytrens disease",
        categories: [
          {
            title: "Needle fasciotomy",
            subCategories: [],
          },
          {
            title: "Surgical fasciectomy",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Trigger finger treatment",
        categories: [
          {
            title: "Steroid injections",
            subCategories: [],
          },
          {
            title: "Surgical release",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Tendon repair and reconstruction",
        categories: [],
        icon: "/images/icons/service_icon_2.svg",
      },
      {
        title: "Fracture Repair",
        categories: [],
        icon: "/images/icons/service_icon_3.svg",
      },
    ],
  },
  "non-surgical-treatments": {
    title: "Non-Surgical Treatments",
    subTitle:
      "Discover our array of non-surgical treatments designed to rejuvenate and enhance without the need for surgery",
    subServices: [
      {
        title: "Botulinum toxin (Botox/ Dysport)",
        categories: [
          {
            title: "Dynamic facial lines",
            subCategories: [],
          },
          {
            title: "Hyperhidrosis (excessive sweating)",
            subCategories: [],
          },
          {
            title: "Masseter (TMJ pain) and facial slimming",
            subCategories: [],
          },
          {
            title: "Trapezium (traptox)",
            subCategories: [],
          },
          {
            title: "Migraine relief",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Dermal fillers (Restylane/ Juvederm/ Boletero)",
        categories: [
          {
            title: "Facial augmentation",
            subCategories: [],
          },
          {
            title: "Liquid rhinoplasty",
            subCategories: [],
          },
          {
            title: "Liquid facelift",
            subCategories: [],
          },
          {
            title: "Tear trough correction",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Dissolving of hyaluronic acid fillers",
        categories: [],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Skin boosters",
        categories: [
          {
            title: "Restylane Vital and Vital light",
            subCategories: [],
          },
          {
            title: "Profhilo",
            subCategories: [],
          },
          {
            title: "Juvederm Volite",
            subCategories: [],
          },
          {
            title: "RRS (Hyalift 75, HA Long Lasting, HA Eyes)",
            subCategories: [],
          },
          {
            title: "Exosomes",
            subCategories: [],
          },
          {
            title: "Polynucleotides",
            subCategories: [],
          },
        ],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Collagen stimulators (Sculptra/ Radiesse)",
        categories: [],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Microneedling",
        categories: [],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Fat dissolving injections",
        categories: [],
        icon: "/images/icons/service_icon_1.svg",
      },
      {
        title: "Body fillers (Hyacorp)",
        categories: [],
        icon: "/images/icons/service_icon_1.svg",
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
        bgSrc="/images/mai/bg-02.webp"
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
              <IconBoxStyle3
                icon={item.icon}
                title={item.title}
                categories={item.categories}
              />
              <Spacing lg="30" md="30" />
            </Div>
          ))}
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* <TestimonialSlider />
      <Spacing lg="145" md="80" /> */}
      {/* <Div className="container cs-shape_wrap_4">
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
      <Spacing lg="150" md="80" /> */}
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

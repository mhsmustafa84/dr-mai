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
          },
          {
            title: "Necklift",
          },
          {
            title: "Brow lift",
          },
          {
            title: "Lip lift",
          },
          {
            title: "Lipofilling to the face",
          },
          {
            title: "Buccal fat removal ",
          },
          {
            title: "Double chin liposuction",
          },
          {
            title: "Eyelids",
          },
          {
            title: "Upper blepharoplasty",
          },
          {
            title: "Lower blepharoplasty",
          },
          {
            title: "Combined upper and lower blepharoplasty",
          },
          {
            title: "Ptosis repair",
          },
          {
            title: "Ears",
          },
          {
            title: "Prominent ear correction",
          },
          {
            title: "Earlobe repair",
          },
          {
            title: "Earlobe reduction",
          },
        ],
        icon: "/images/icons/Face.webp",
      },
      {
        title: "Breast",
        categories: [
          {
            title: "Breast augmentation",
          },
          {
            title: "Breast reduction",
          },
          {
            title: "Breast lift (mastopexy)",
          },
        ],
        icon: "/images/icons/Breast.webp",
      },
      {
        title: "Body",
        categories: [
          {
            title: "Liposuction",
          },
          {
            title: "Tummy tuck (abdominoplasty)",
          },
          {
            title: "Body lift",
          },
          {
            title: "Lipofilling (fat grafting)",
          },
          {
            title: "Arm lift",
          },
          {
            title: "Thigh lift",
          },
          {
            title: "Labiaplasty",
          },
          {
            title: "Mommy makeover and combination surgeries",
          },
        ],
        icon: "/images/icons/Body.webp",
      },
      {
        title: "Hands",
        categories: [
          {
            title: "Lipofilling to hands",
          },
          {
            title: "Dermal fillers and collagen stimulators",
          },
        ],
        icon: "/images/icons/Hands.webp",
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
          },
          {
            title: "Free flap reconstruction",
          },
        ],
        icon: "/images/icons/Breastreconstruction.webp",
      },
      {
        title: "Scar revision",
        categories: [
          {
            title: "Z-plasty",
          },
          {
            title: "Subcision and fat grafting",
          },
          {
            title: "Keloid treatment",
          },
        ],
        icon: "/images/icons/Scarrevision.webp",
      },
      {
        title: "Skin cancer removal and reconstruction",
        categories: [
          {
            title: "Basal cell carcinoma (BCC)",
          },
          {
            title: "Squamous cell carcinoma (SCC)",
          },
          {
            title: "Pigmented lesions and melanomas",
          },
          {
            title: "Suspicious lesions",
          },
        ],
        icon: "/images/icons/Skincancerremovalandreconstruction.webp",
      },
      {
        title: "Lumps and bumps",
        categories: [
          {
            title: "Lipoma removal",
          },
          {
            title: "Cyst removal",
          },
          {
            title: "Benign skin lesions",
          },
        ],
        icon: "/images/icons/Lumpsandbumps.webp",
      },
    ],
  },
  "hand-surgery": {
    title: "Hand Surgery",
    subTitle:
      "Surgery of the hand addresses both aesthetic and functional concerns",
    subServices: [
      {
        title: "Nerve decompression",
        categories: [
          {
            title: "Carpal tunnel release",
          },
          {
            title: "Cubital tunnel release",
          },
        ],
        icon: "/images/icons/Nervedecompression.webp",
      },
      {
        title: "Dupuytrens disease",
        categories: [
          {
            title: "Needle fasciotomy",
          },
          {
            title: "Surgical fasciectomy",
          },
        ],
        icon: "/images/icons/Nervedecompression.webp",
      },
      {
        title: "Trigger finger treatment",
        categories: [
          {
            title: "Steroid injections",
          },
          {
            title: "Surgical release",
          },
        ],
        icon: "/images/icons/Nervedecompression.webp",
      },
      {
        title: "Tendon repair and reconstruction",
        categories: [],
        icon: "/images/icons/Nervedecompression.webp",
      },
      {
        title: "Fracture Repair",
        categories: [],
        icon: "/images/icons/Nervedecompression.webp",
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
          },
          {
            title: "Hyperhidrosis (excessive sweating)",
          },
          {
            title: "Masseter (TMJ pain) and facial slimming",
          },
          {
            title: "Trapezium (traptox)",
          },
          {
            title: "Migraine relief",
          },
        ],
        icon: "/images/icons/Botulinumtoxin.webp",
      },
      {
        title: "Dermal fillers (Restylane/ Juvederm/ Boletero)",
        categories: [
          {
            title: "Facial augmentation",
          },
          {
            title: "Liquid rhinoplasty",
          },
          {
            title: "Liquid facelift",
          },
          {
            title: "Tear trough correction",
          },
        ],
        icon: "/images/icons/Dermalfillers.webp",
      },
      {
        title: "Dissolving of hyaluronic acid fillers",
        categories: [],
        icon: "/images/icons/Dissolvingofhyaluronicacidfillers.webp",
      },
      {
        title: "Skin boosters",
        categories: [
          {
            title: "Restylane Vital and Vital light",
          },
          {
            title: "Profhilo",
          },
          {
            title: "Juvederm Volite",
          },
          {
            title: "RRS (Hyalift 75, HA Long Lasting, HA Eyes)",
          },
          {
            title: "Exosomes",
          },
          {
            title: "Polynucleotides",
          },
        ],
        icon: "/images/icons/Skinboosters.webp",
      },
      {
        title: "Collagen stimulators (Sculptra/ Radiesse)",
        categories: [],
        icon: "/images/icons/Collagenstimulators.webp",
      },
      {
        title: "Microneedling",
        categories: [],
        icon: "/images/icons/Microneedling.webp",
      },
      {
        title: "Fat dissolving injections",
        categories: [],
        icon: "/images/icons/Fat-dissolvinginjections.webp",
      },
      {
        title: "Body fillers (Hyacorp)",
        categories: [],
        icon: "/images/icons/Bodyfillers.webp",
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

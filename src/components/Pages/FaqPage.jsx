import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";
import Button from "../Button";
import Cta from "../Cta";
import Div from "../Div";
import PageHeading from "../PageHeading";
import Spacing from "../Spacing";

const accordionData = {
  faq1: [
    {
      question: "How should I choose my plastic surgeon?",
      answer:
        "When selecting a plastic surgeon, opting for a surgeon based in your own country, with certification and expertise is essential. Dr. Mai Rostom, a practicing surgeon in Dubai, UAE, is a UK board certified plastic and aesthetic surgeon. She is registered as a specialist with the GMC. She specializes in performing surgeries tailored to your needs. Ensuring your surgeon is qualified and specialized in the procedures you're interested in, like breast augmentation, mummy makeovers, and liposuction, is crucial.",
    },
    {
      question: "Is it necessary to quit smoking before undergoing surgery?",
      answer:
        "It's essential to quit smoking before undergoing surgery. While smoking is prevalent in Dubai, kicking the habit – be it cigarettes, vapes, or hookah – is crucial for your well-being. Being smoke-free can lower the chances of complications and enhance your recovery process. Dr. Mai Rostom emphasizes the significance of honesty regarding your smoking habits to prevent issues with wound healing and ensure a speedy recovery.",
    },
    {
      question: "What is the best age to consider plastic surgery?",
      answer:
        "Regarding age considerations, for surgery there is no age requirement; it varies depending on needs and circumstances. Younger people might choose procedures, like breast enhancement or nose reshaping while older individuals often look into options such as facelifts or eyelid surgeries. Dr. Rostom suggests that the best time for a procedure is when a patient feels ready and meets the health requirements. In Dubai, UAE Dr. Rostoms practice only recommends treatments that address your concerns.",
    },
    {
      question: "How safe is plastic surgery?",
      answer:
        "Although all surgeries carry risks, Dr. Rostom takes precautions to minimize complications through planning and extensive surgical experience. Following guidelines and openly discussing any health conditions with your surgeon are steps to ensure a successful procedure and a smooth recovery process. Dr. Rostom upholds her standards of care by performing surgeries at top-tier hospitals in Dubai, that are fully license and credentialled.",
    },
  ],
  faq2: [
    {
      question: "Can you explain what a mummy makeover entails?",
      answer:
        "A mummy makeover is a common procedure in Dubai and the UAE, that involves combining surgeries to address changes after pregnancy. Typically, it includes treatments for breasts and abdominal reshaping along with liposuction for body contouring. Dr. Rostom adopts an individualized approach to each patient. She will consult with every patient to determine the correct combination of procedures to address their individual concerns and to restore their pre-pregnancy silhouette.",
    },
    {
      question: "What options are available for liposuction?",
      answer:
        "Dr. Rostom provides various liposuction techniques in Dubai, such as power-assisted liposuction (PAL), ultrasound-assisted (VASER), and laser-assisted methods. Advanced technologies like J Plasma (Renuvion) and BodyTite are used to enhance skin tightening. Dr. Rostom's expertise in liposuction ensures that patients achieve their desired results through the correct approach.",
    },
    {
      question:
        "Do I need to wear a compression garment after undergoing liposuction?",
      answer:
        "Wearing a compression garment is essential during the first few weeks following liposuction, except when showering or bathing. This practice effectively reduces scarring and bruising, especially in hot climates like Dubai, UAE. Adhering to care instructions is crucial for healing and maintaining the benefits of liposuction.",
    },
    {
      question:
        "What distinguishes a plastic surgeon from an aesthetic surgeon?",
      answer:
        "The main difference lies in their training backgrounds. Plastic surgeons like Dr. Rostom, who predominantly practices in Dubai, UAE, undergo training encompassing both cosmetic and reconstructive procedures. On the other hand, cosmetic surgeons typically focus on enhancing appearance without training in reconstructive surgery. Dr. Rostom's credentials include certifications and fellowships in plastic, aesthetic, and hand surgery, highlighting her expertise and qualifications. What is the best age to consider plastic surgery? Regarding age considerations, there is no “correct age” for surgery; it varies depending on needs and circumstances. Younger people might choose procedures like breast enhancement or nose reshaping. While older individuals often explore options such as facelifts or eyelid surgeries. Dr. Rostom suggests that the best time for a procedure is when a patient feels ready and meets the health requirements. Dr. Rostom's practice in Dubai, UAE will only recommend treatments that address your concerns.",
    },
  ],
};

export default function FaqPage() {
  pageTitle("Frequently Asked Questions");
  const [faq, setFaq] = useState(accordionData.faq1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Frequently Asked Questions"
        bgSrc="/images/mai/bg-04.jpg"
        pageLinkText="FAQ"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-4">
            <Div className="cs-faq_nav cs-radius_15">
              <h2 className="cs-faq_nav_title cs-m0">FAQ Categories</h2>
              <Div className="cs-height_30 cs-height_lg_30" />
              <ul className="cs-list cs-style1 cs-mp0">
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Pre-Surgery Considerations"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                    onClick={() => setFaq(accordionData.faq1)}
                  />
                </li>
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Specific Procedures and Post-Surgery Care"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                    onClick={() => setFaq(accordionData.faq2)}
                  />
                </li>
              </ul>
            </Div>
          </Div>
          <Div className="col-lg-7 offset-lg-1">
            <Spacing lg="0" md="40" />
            <Accordion data={faq} />
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

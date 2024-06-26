import { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import PageHeading from "../PageHeading";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import SocialWidget from "../Widget/SocialWidget";

export default function ContactPage() {
  pageTitle("Contact me");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Contact me"
        bgSrc="/images/mai/bg-03.webp"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div>
            <SectionHeading
              title="Looking for more details? <br/> Here’s how to contact me!"
              subtitle=""
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="50" md="50" />
            <SocialWidget />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.477879567077!2d55.353957799999996!3d25.2208245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d19322467bb%3A0x3475ac3ba87fadc!2sDr.%20Mai%20Rostom%20%7C%20Plastic%2C%20Reconstructive%20%26%20Aesthetic%20Surgery!5e0!3m2!1sar!2seg!4v1719741237538!5m2!1sar!2seg"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}

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
        bgSrc="/images/mai/bg-03.jpg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div>
            <SectionHeading
              title="Do you have anything <br/>in your mind?"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1713174339860!5m2!1sar!2seg"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}

import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";
const copyrightLinks = [
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];

const serviceMenu = [
  {
    title: "Cosmetic Surgery",
    href: "/service/cosmetic-surgery",
  },
  {
    title: "Non-Surgical Treatments",
    href: "/service/non-surgical-treatments",
  },
  {
    title: "Reconstructive Surgery",
    href: "/service/reconstructive-surgery",
  },
  {
    title: "Hand Surgery",
    href: "/service/hand-surgery",
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                {/* DR Mai */}
                <TextWidget
                  logoSrc="/images/mai/logo.png"
                  logoAlt="Logo"
                  text="Welcome to Dr. Mai Rostom’s Plastic Surgery Practice in Dubai"
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact My Team" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Serving Dubai and the Entire UAE"
                  subtitle="
                  Whether you’re exploring cosmetic enhancements or require reconstructive surgery, Dr. Mai Rostom’s clinic is your destination for exceptional care. We proudly serve patients from across Dubai and the entire UAE, ensuring everyone receives the personalized attention and expertise they deserve."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © 2024 - By Grapes Creations
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}

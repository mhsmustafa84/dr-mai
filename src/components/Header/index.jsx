import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import "./header.scss";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import DropDown from "./DropDown";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase cs-sticky_header ${
          isSticky ? "cs-sticky_header_active" : ""
        }`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/images/mai/header-logo.png" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <a>Services</a>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/service/cosmetic-surgery"
                              onClick={() => setMobileToggle(false)}
                            >
                              Cosmetic Surgery
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/non-surgical-treatments"
                              onClick={() => setMobileToggle(false)}
                            >
                              Non-Surgical Treatments
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/reconstructive-surgery"
                              onClick={() => setMobileToggle(false)}
                            >
                              Reconstructive Surgery
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/hand-surgery"
                              onClick={() => setMobileToggle(false)}
                            >
                              Hand Surgery
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" onClick={() => setMobileToggle(false)}>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/mai/logo.png" alt="Logo" />
            {/* Dr. Mai */}
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Ready to take the next step? <br /> Book a consultation!
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Serving Dubai and the Entire UAE"
              subtitle="Whether you’re exploring cosmetic enhancements or require reconstructive surgery, Dr. Mai Rostom’s clinic is your destination for exceptional care. We proudly serve patients from across Dubai and the entire UAE, ensuring everyone receives the personalized attention and expertise they deserve."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Div from "../Div";

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link
        to="https://eg.linkedin.com/in/mai-rostom-375437256"
        className="cs-center"
      >
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link
        to="https://www.instagram.com/dr.mairostom?igsh=MXAwN3RjNGUzMXkweA=="
        className="cs-center"
      >
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link
        to="https://www.facebook.com/drmairostom?mibextid=ZbWKwL"
        className="cs-center"
      >
        <Icon icon="fa6-brands:facebook" />
      </Link>
    </Div>
  );
}

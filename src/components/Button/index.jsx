import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Button({ btnLink, btnText, variant, icon, onClick }) {
  return (
    <Link
      to={btnLink}
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
      onClick={onClick}
    >
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
}

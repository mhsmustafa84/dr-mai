import parse from "html-react-parser";
import "./iconbox.scss";
import Div from "../Div";

export default function IconBoxStyle3({ title, categories, icon }) {
  return (
    <Div className="cs-iconbox cs-style text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <h3 className="cs-iconbox_title">{parse(title)}</h3>
      {categories.map((category) => (
        <>
          <h5 key={category.title} className="cs-iconbox_subtitle">
            {parse(category.title)}
          </h5>
        </>
      ))}
    </Div>
  );
}

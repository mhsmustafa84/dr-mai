import { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Testimonial from "../Testimonial";
import Div from "../Div";
import Spacing from "../Spacing";
const testimonialData = [
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText:
      "Dr Mai addressed my chief complaint in a systematic and organized way, which made me leave very satisfied with the treatment given.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_2.jpeg",
    testimonialText:
      "She made the process surprisingly easy and smooth even though I was initially scared of the procedure.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_3.jpeg",
    testimonialText:
      "Dr Rostom did a great job I am very happy with the results.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText:
      "Dr. Mai is very professional, polite and knows what she is doing. I love doing my treatments with her.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText: "I love her and her work on me.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText:
      "Dr. Mai is amazing. This is a recurring issue for my teenager and she has made this a comfortable experience for sure.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText: "She is just amazing and honest.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText: "Very professional and comforting. Got great result.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText:
      "Doctor explains things in detail giving good advice and results as always as promised.",
    avatarName: "Someone Name",
    avatarDesignation: "Job HERE",
    ratings: "5",
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            {/* <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div> */}
            <Div className="cs-testimonial_slider_center">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}

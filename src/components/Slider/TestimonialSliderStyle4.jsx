import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import TestimonialStyle2 from '../Testimonial/TestimonialStyle2';
const testimonialData = [
  {
    avatarImgUrl: '/images/avatar_5.png',
    testimonialText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, architecto! Id nihil dolorum tempora provident. Quibusdam saepe fugit aspernatur beatae amet placeat laudantium provident, necessitatibus neque ad eveniet.',
    avatarName: 'Someone Name',
    avatarDesignation: 'Job HERE',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/avatar_6.png',
    testimonialText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, architecto! Id nihil dolorum tempora provident. Quibusdam saepe fugit aspernatur beatae amet placeat laudantium provident, necessitatibus neque ad eveniet.',
    avatarName: 'Someone Name',
    avatarDesignation: 'Job HERE',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/avatar_7.png',
    testimonialText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, architecto! Id nihil dolorum tempora provident. Quibusdam saepe fugit aspernatur beatae amet placeat laudantium provident, necessitatibus neque ad eveniet.',
    avatarName: 'Someone Name',
    avatarDesignation: 'Job HERE',
    ratings: '4',
  },
  {
    avatarImgUrl: '/images/avatar_5.png',
    testimonialText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, architecto! Id nihil dolorum tempora provident. Quibusdam saepe fugit aspernatur beatae amet placeat laudantium provident, necessitatibus neque ad eveniet.',
    avatarName: 'Someone Name',
    avatarDesignation: 'Job HERE',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/avatar_6.png',
    testimonialText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, architecto! Id nihil dolorum tempora provident. Quibusdam saepe fugit aspernatur beatae amet placeat laudantium provident, necessitatibus neque ad eveniet.',
    avatarName: 'Someone Name',
    avatarDesignation: 'Job HERE',
    ratings: '5',
  },
  {
    avatarImgUrl: '/images/avatar_7.png',
    testimonialText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, architecto! Id nihil dolorum tempora provident. Quibusdam saepe fugit aspernatur beatae amet placeat laudantium provident, necessitatibus neque ad eveniet.',
    avatarName: 'Someone Name',
    avatarDesignation: 'Job HERE',
    ratings: '4',
  },
];

export default function TestimonialSliderStyle4() {
  /** Team Member Data **/

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
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
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {testimonialData.map((item, index) => (
        <Div key={index}>
          <TestimonialStyle2 {...item} />
        </Div>
      ))}
    </Slider>
  );
}

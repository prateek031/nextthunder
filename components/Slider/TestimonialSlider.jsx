import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        "I recently used Thunder X High-Pressure Laminate Sheets for a kitchen renovation project, and I'm thrilled with the results! The quality is outstanding, and the wide range of colors and patterns allowed me to achieve a truly customized look. My client couldn't be happier!",
      avatarName: 'Tarun Wasnik',
      avatarDesignation: 'Interior Designer',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/testimonial_2.jpeg',
      testimonialText:
        'Choosing Thunder X for our countertops was a game-changer. The durability and resistance to high pressure make it perfect for our busy kitchen. The sleek design options added a modern touch to our home. Highly recommend!',
      avatarName: 'Anurag Gutpa',
      avatarDesignation: 'Home Owner',
      ratings: '5',
    },
    {
      testimonialThumb: '/images/testimonial_3.jpeg',
      testimonialText:
        'Working with Thunder X laminate sheets made my job a breeze. The sheets are easy to cut and install, saving me valuable time on the project. The high-pressure resistance ensures longevity, making it a top choice for my clients.',
      avatarName: 'Sanjay Yadav',
      avatarDesignation: 'Contractor',
      ratings: '4.5',
    },
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        "We used Thunder X laminate for our store's display counters, and the impact on the overall aesthetics was amazing. The variety of textures and finishes allowed us to create a unique and inviting shopping environment. Our customers often inquire about the sleek design.",
      avatarName: 'Ayushi Singh',
      avatarDesignation: 'Restaurant Owner',
      ratings: '3.5',
    },
    {
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        "Thunder X High-Pressure Laminate Sheets have become my go-to choice for commercial projects. The quality and versatility make them a standout option. The fact that they're environmentally friendly is a bonus. Clients appreciate the balance of style and sustainability.",
      avatarName: ' Mahendra Tete',
      avatarDesignation: 'Architect',
      ratings: '3.5',
    },
  ];
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
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
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
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
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

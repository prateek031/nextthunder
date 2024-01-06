import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        year: 'Highly UV Resistant',
        position: 'A highly UV resistant laminate sheet is a protective material designed to withstand prolonged exposure to ultraviolet (UV) radiation from the sun. It is commonly used to prevent fading, discoloration, and degradation of surfaces, making it ideal for outdoor applications such as signage, outdoor furniture, and architectural elements.',
      },
      {
        year: 'Fire Retardant',
        position: 'Fire-retardant laminate sheets are designed to inhibit the spread of flames and slow down the combustion process. These sheets are treated with fire-resistant additives during manufacturing, enhancing their ability to resist ignition and reduce the potential for fire to spread. These Hpl sheets gives the best example of Fire Retardant',
      },
    ],
    [
      {
        year: 'Scratch Proof',
        position:'Scratch-proof laminate sheets are durable and resilient surface materials commonly used in furniture and flooring applications. These sheets are designed to resist scratches, scuffs, and abrasions, maintaining their appearance and functionality over time. They are a popular choice for their protective properties and aesthetic appeal.',
       
      },
      {
        year: 'Termite Resistant',
        position: 'Termite-resistant laminate sheets are specialized surface materials that offer protection against termite infestations. These sheets are engineered to deter termites from damaging furniture, flooring, or other applications. Their unique composition and treatment make them a reliable choice for environments prone to termite activity.',
      },
    ],
    [
      {
        year: 'Solvent Resistant',
        position: "Solvent-resistant laminate sheets are designed to withstand exposure to various solvents and chemicals without losing their integrity. These sheets are commonly used in industrial and commercial settings where there's a need for surfaces that can handle frequent contact with substances like oils, cleaning agents, and other solvents.",
      },
      {
        year: 'Eco Friendly',
        position: "Eco-friendly laminate sheets are sustainable surface materials crafted with consideration for the environment. These sheets are made from renewable materials and utilize low-impact manufacturing processes. They offer a balance between aesthetics and eco-consciousness, making them a responsible choice.",
    }    ],
  
  ];

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
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}

import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        year: 'Resin Impregnation',
        name: 'Kraft paper layers are infused with melamine and phenolic resins, ensuring durability and wear resistance.',
       
      },
      {
        year: 'Compression',
        name: '  Layers undergo intense compression, applying high pressure and temperature to cure resins, creating a durable composite.',
       
       
      },
    ],
    [
      {
        year: 'Curing',
        name: 'Compressed sheets are cured, using heat to harden resins, bonding layers for a robust material.',
        
      },
      {
        year: 'Layering',
        name: 'Impregnated sheets are stacked with decorative layers for visual appeal—printed designs, textures, or solid colors.',
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

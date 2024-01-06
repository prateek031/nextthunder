import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ModalImage from 'react-modal-image';

export default function MasonryGallery() {
  const [active, setActive] = useState('all');
  const [itemShow, setItemShow] = useState(10);

  const portfolioData = [
    {
      subtitle: 'Shade no:-9968',
      href: '/portfolio/portfolio-details',
      src: '/images/sn1.webp',
      srcLg: '/images/sn1.webp',
      category: 'Brown',
      height: 299,
    },
    {
      subtitle: 'Shade no:-9908',
      href: '/portfolio/portfolio-details',
      src: '/images/sn2.webp',
      srcLg: '/images/sn2.webp',
      category: 'Brown',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9905',
      href: '/portfolio/portfolio-details',
      src: '/images/sn3.webp',
      srcLg: '/images/sn3.webp',
      category: 'White',
      height: 299,
    },
    {
      subtitle: 'Shade no:-9686',
      href: '/portfolio/portfolio-details',
      src: '/images/sn4.webp',
      srcLg: '/images/sn4.webp',
      category: 'Drak Shades',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9964',
      href: '/portfolio/portfolio-details',
      src: '/images/sn5.webp',
      srcLg: '/images/sn5.webp',
      category: 'Tan',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9902',
      href: '/portfolio/portfolio-details',
      src: '/images/sn6.webp',
      srcLg: '/images/sn6.webp',
      category: 'Designs',
      height: 299,
    },
    {
      subtitle: 'Shade no:-9930',
      href: '/portfolio/portfolio-details',
      src: '/images/sn7.webp',
      srcLg: '/images/sn7.webp',
      category: 'Dark Shades',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9967',
      href: '/portfolio/portfolio-details',
      src: '/images/sn8.webp',
      srcLg: '/images/sn8.webp',
      category: 'Brown',
      height: 299,
    },
    {
      subtitle: 'Shade no:-9946',
      href: '/portfolio/portfolio-details',
      src: '/images/sn9.webp',
      srcLg: '/images/sn9.webp',
      category: 'Tan',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9639',
      href: '/portfolio/portfolio-details',
      src: '/images/sn10.webp',
      srcLg: '/images/sn10.webp',
      category: 'Brown',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9963',
      href: '/portfolio/portfolio-details',
      src: '/images/sn11.webp',
      srcLg: '/images/sn11.webp',
      category: 'Designs',
      height: 299,
    },
    {
      subtitle: 'Shade no:-9907',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'Brown',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9971',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'Dark Shades',
      height: 299,
    },
    {
      subtitle: 'Shade no:-9972',
      href: '/portfolio/portfolio-details',
      src: '/images/sn14.webp',
      srcLg: '/images/sn14.webp',
      category: 'Brown',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9973',
      href: '/portfolio/portfolio-details',
      src: '/images/sn15.webp',
      srcLg: '/images/sn15.webp',
      category: 'Tan',
      height: 299,
    },    {
      subtitle: 'Shade no:-9896',
      href: '/portfolio/portfolio-details',
      src: '/images/sn16.webp',
      srcLg: '/images/sn16.webp',
      category: 'Drak Shades',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9867',
      href: '/portfolio/portfolio-details',
      src: '/images/sn17.webp',
      srcLg: '/images/sn17.webp',
      category: 'Brown',
      height: 299,
    },    {
      subtitle: 'Shade no:-9904',
      href: '/portfolio/portfolio-details',
      src: '/images/sn18.webp',
      srcLg: '/images/sn18.webp',
      category: 'Grey',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9955',
      href: '/portfolio/portfolio-details',
      src: '/images/sn19.webp',
      srcLg: '/images/sn19.webp',
      category: 'White',
      height: 299,
    },    {
      subtitle: 'Shade no:-9953',
      href: '/portfolio/portfolio-details',
      src: '/images/sn20.webp',
      srcLg: '/images/sn20.webp',
      category: 'Grey',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9954',
      href: '/portfolio/portfolio-details',
      src: '/images/sn21.webp',
      srcLg: '/images/sn21.webp',
      category: 'Designs',
      height: 299,
    },    {
      subtitle: 'Shade no:-9959',
      href: '/portfolio/portfolio-details',
      src: '/images/sn22.webp',
      srcLg: '/images/sn22.webp',
      category: 'Tan',
      height: 622,
    },
    {
      subtitle: 'Shade no:-9958',
      href: '/portfolio/portfolio-details',
      src: '/images/sn23.webp',
      srcLg: '/images/sn23.webp',
      category: 'Grey',
      height: 299,
    },    {
      subtitle: 'Shade no:-94914',
      href: '/portfolio/portfolio-details',
      src: '/images/sn24.webp',
      srcLg: '/images/sn24.webp',
      category: 'Brown',
      height: 622,
    },
    {
      subtitle: 'Shade no:-94983',
      href: '/portfolio/portfolio-details',
      src: '/images/sn25.webp',
      srcLg: '/images/sn25.webp',
      category: 'Designs',
      height: 299,
    },    {
      subtitle: 'Shade no:-94505',
      href: '/portfolio/portfolio-details',
      src: '/images/sn26.webp',
      srcLg: '/images/sn26.webp',
      category: 'Tan',
      height: 622,
    },
    {
      subtitle: 'Shade no:-94948',
      href: '/portfolio/portfolio-details',
      src: '/images/sn27.webp',
      srcLg: '/images/sn27.webp',
      category: 'Tan',
      height: 299,
    },   
    
  ];
  const categoryMenu = [
    {
      title:'Brown',
      category:'Brown',
    },
    {
      title:'Grey',
      category:'Grey',
    },
    {
      title:'White',
      category:'White',
    },
    {
      title:'Tan',
      category:'Tan',
    },
    {
      title:'Designs',
      category:'Designs',
    },
    {
      title: 'Dark Shades',
      category: 'Dark Shades',
    },
  ];
  return (
    <>
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>
      <Spacing lg="90" md="45" />
      <Div className="cs-masonry_4_col">
        {portfolioData.slice(0, itemShow).map((item, index) => (
          <Div
            className={`${
              active === 'all'
                ? ''
                : !(active === item.category)
                ? 'd-none'
                : ''
            }`}
            key={index}
          >
            <Div
              className="cs-portfolio cs-style1 cs-type2"
              style={{ height: `${item.height}px` }}
            >
              <Div className="cs-lightbox_item">
                <ModalImage
                  small={item.src}
                  large={item.srcLg}
                  alt={item.title}
                />
              </Div>
              <Div className="cs-portfolio_hover" />
              <span className="cs-plus" />
              <Div
                className="cs-portfolio_bg cs-bg"
                style={{ backgroundImage: `url("${item.src}")` }}
              />
              <Div className="cs-portfolio_info">
                <Div className="cs-portfolio_info_bg cs-accent_bg" />
                <h2 className="cs-portfolio_title">{item.title}</h2>
                <Div className="cs-portfolio_subtitle">{item.subtitle}</Div>
              </Div>
            </Div>
          </Div>
        ))}
      </Div>
      <Div className="container">
        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 4)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
    </>
  );
}

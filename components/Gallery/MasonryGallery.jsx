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
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn1.webp',
      srcLg: '/images/sn1.webp',
      category: 'wedding',
      height: 299,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn2.webp',
      srcLg: '/images/sn2.webp',
      category: 'portrait',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn3.webp',
      srcLg: '/images/sn3.webp',
      category: 'fashion',
      height: 299,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn4.webp',
      srcLg: '/images/sn4.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn4.webp',
      srcLg: '/images/sn4.webp',
      category: 'wedding',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn5.webp',
      srcLg: '/images/sn5.webp',
      category: 'fashion',
      height: 299,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn6.webp',
      srcLg: '/images/sn6.webp',
      category: 'landscape',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn7.webp',
      srcLg: '/images/sn7.webp',
      category: 'portrait',
      height: 299,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn8.webp',
      srcLg: '/images/sn8.webp',
      category: 'shortfilm',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn8.webp',
      srcLg: '/images/sn8.webp',
      category: 'fashion',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn9.webp',
      srcLg: '/images/sn9.webp',
      category: 'wedding',
      height: 299,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn10.webp',
      srcLg: '/images/sn10.webp',
      category: 'portrait',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn11.webp',
      srcLg: '/images/sn11.webp',
      category: 'fashion',
      height: 299,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn12.webp',
      srcLg: '/images/sn12.webp',
      category: 'commercial',
      height: 622,
    },
    {
      subtitle: 'View Large',
      href: '/portfolio/portfolio-details',
      src: '/images/sn13.webp',
      srcLg: '/images/sn13.webp',
      category: 'fashion',
      height: 299,
    },
    
    
  ];
  const categoryMenu = [
    {
      title: 'Wedding',
      category: 'wedding',
    },
    {
      title: 'Portrait',
      category: 'portrait',
    },
    {
      title: 'Fashion',
      category: 'fashion',
    },
    {
      title: 'Commercial',
      category: 'commercial',
    },
    {
      title: 'Landscape',
      category: 'landscape',
    },
    {
      title: 'Short film',
      category: 'shortfilm',
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

import React from 'react';
import Div from '../Div';

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/wl1.png',
      alt: 'Partner',
    },
    {
      src: '/images/wl2.png',
      alt: 'Partner',
    },
    {
      src: '/images/wl3.png',
      alt: 'Partner',
    },
    {
      src: '/images/wl4.png',
      alt: 'Partner',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}

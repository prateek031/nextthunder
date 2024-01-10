import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What products does ThunderX Laminates offer?',
      answer: 'ThunderX Laminates specializes in providing a diverse range of high-quality laminates, including but not limited to decorative laminates, industrial laminates, and specialty laminates used across various industries for diverse applications.'
    },
    {
      question: 'How can I purchase ThunderX Laminates products?',
      answer: 'ThunderX Laminates products are available through authorized distributors, retailers, and partners. You can locate the nearest distributor or retailer through our website or by contacting our customer service team.'
    },
    {
      question: 'What makes ThunderX Laminates stand out from other laminate manufacturers?',
      answer: 'ThunderX Laminates distinguishes itself through a commitment to excellence, utilizing cutting-edge technology and innovative designs to produce durable, aesthetically pleasing laminates. We emphasize superior quality, customer satisfaction, and a dedication to sustainability in all our products.'
    },
    {
      question: ' Are ThunderX Laminates environmentally friendly?',
      answer: ' Yes, ThunderX Laminates is dedicated to sustainability. We prioritize eco-friendly materials and production processes aimed at reducing our environmental impact. Our commitment to sustainability extends across our entire product lifecycle.'
    },
    {
      question: 'Can ThunderX Laminates provide custom solutions for specific projects?',
      answer: "Absolutely! ThunderX Laminates offers customizable solutions to meet the unique requirements of different projects. Contact our customer service team to discuss your specific needs, and we'll work with you to create tailored solutions."
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}

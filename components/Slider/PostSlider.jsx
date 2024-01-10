import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    
    {
      url:'https://www.youtube.com/watch?v=PX64i0Wqooo&t=128s', 
      src:'/images/vid2.jpg', 
      alt:'Post', 
      date:'',
      title:'ThunderX Laminates Journey'
    },
    {
      url:'https://www.youtube.com/watch?v=o3XZ-9O4CE4', 
      src:'/images/vid3.jpg', 
      alt:'Post', 
      date:'',
      title:"ThunderX Laminate's Hpl Sheet Advertisement"
    },
    {
      url:'https://www.youtube.com/watch?v=WTawhDtVC7w', 
      src:'/images/vid5.jpg', 
      alt:'Post', 
      date:'', 
      title:'ThunderX Premium'
    },
    {
      url:'https://www.youtube.com/watch?v=bIKiGS9J4b4', 
      src:'/images/vid6.png', 
      alt:'Post', 
      date:'',
      title:'Unleash the Power of ThunderX Laminates!'
    },
    {
      url:'https://www.youtube.com/watch?v=ryN5YpCfgyE', 
      src:'/images/vid4.jpg', 
      alt:'Post', 
      date:'',
      title:'ThunderX Laminates (Premium) Feat - Yukti Kapoor'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}

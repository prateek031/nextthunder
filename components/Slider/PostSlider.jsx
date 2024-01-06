import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'https://www.youtube.com/watch?v=EJJbx1eFsrY', 
      src:'/images/post_1.jpeg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'This content richs video'
    },
    {
      url:'https://www.youtube.com/watch?v=PX64i0Wqooo&t=128s', 
      src:'/images/post_2.jpeg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title:'anjli maam video youtube'
    },
    {
      url:'https://www.youtube.com/watch?v=o3XZ-9O4CE4', 
      src:'/images/post_3.jpeg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'water proof video'
    },
    {
      url:'https://www.youtube.com/watch?v=WTawhDtVC7w', 
      src:'/images/post_1.jpeg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'thunderx premium'
    },
    {
      url:'https://www.youtube.com/watch?v=bIKiGS9J4b4', 
      src:'/images/post_2.jpeg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title:'thunder x premium 2'
    },
    {
      url:'https://www.youtube.com/watch?v=ryN5YpCfgyE', 
      src:'/images/post_3.jpeg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Yukti kapoor'
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

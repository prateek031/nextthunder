import { Icon } from '@iconify/react';
import Head from 'next/head';
import Div from '../components/Div';
import FunFact2 from '../components/FunFact/FunFact2';
import MasonryGallery from '../components/Gallery/MasonryGallery';
import Hero2 from '../components/Hero/Hero2';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import PostSlider from '../components/Slider/PostSlider';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import Spacing from '../components/Spacing';

export default function PhotographyAgency() {
  const heroData = [
    {
      title: 'We are',
      imageUrl: './images/sn5.webp',
      href: '#',
    },
    {
      title: 'Thunder X',
      imageUrl: './images/sn1.webp',
      href: '#',
    },
    {
      title: 'We belive to',
      imageUrl: './images/sn2.webp',
      href: '#',
    },
    {
      title: 'Deliver the best',
      imageUrl: './images/sn4.webp',
      href: '#',
    },
  ];
  const funfaceData = [
    {
      title: 'Project',
      factNumber: '5K',
    },
    {
      title: 'No of states we deliver',
      factNumber: '15',
    },
    {
      title: 'No of orders',
      factNumber: '100k',
    },
    {
      title: 'No of deliveries',
      factNumber: '100k',
    },
  ];
  return (
    <>
      <Head>
        <title>ThunderX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero2
          data={heroData}
          phoneNumber="+91 70240 02407"
          email="sales@thunderx.co.in"
        />
        {/* End Hero Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <img
                  src="/images/sna1.webp"
                  alt="About"
                  className="cs-w100 cs-radius_5"
                  style={{ width: '800px', height: '648px' }}

                />
              </Div>
            </Div>
            <Div className="col-lg-6 offset-lg-1">
              <SectionHeading
                title="We stand as one of the leading manufacturers of High-Pressure Laminate (HPL) sheets in the industry"
                subtitle="About Us"
                btnText="Learn More"
                btnLink="/about"
              />
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
        </Div>
        {/* End About Section */}



        {/* Start Gallery Section */}
        <Spacing lg="145" md="80" />
        <MasonryGallery />
        {/* End Gallery Section */}

      

        {/* Start Testimonial Section */}
        <TestimonialSlider />
        {/* End Testimonial Section */}

        {/* Start Blog Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="Our Blog"
                  btnText="View More Blog"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Blog Section */}

        <Spacing lg="140" md="80" />
        {/* Start FunFact Section */}
        <Div className="container">
          <FunFact2 data={funfaceData} variant="cs-type2" />
        </Div>
        {/* End FunFact Section */}

        {/* Start Contact Section */}
        <Spacing lg="140" md="70" />
        <Div className="container">
          <SectionHeading
            title="Getting touch"
            subtitle="Contact Us"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <Div className="cs-gradient_bg_1">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <Spacing lg="100" md="80" />
                <form action="#" className="row">
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Full Name*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Email*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Project Type*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-6">
                    <label className="cs-primary_color">Mobile*</label>
                    <input type="text" className="cs-form_field" />
                    <Spacing lg="20" md="20" />
                  </Div>
                  <Div className="col-sm-12">
                    <label className="cs-primary_color">Mobile*</label>
                    <textarea
                      cols="30"
                      rows="7"
                      className="cs-form_field"
                    ></textarea>
                    <Spacing lg="25" md="25" />
                  </Div>
                  <Div className="col-sm-12">
                    <button className="cs-btn cs-style1">
                      <span>Send Message</span>
                      <Icon icon="bi:arrow-right" />
                    </button>
                  </Div>
                </form>
                <Spacing lg="100" md="60" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <Div
                  className="cs-google_map cs-type1 cs-bg"
                  data-src="assets/img/map_img_1.jpeg"
                >
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.523567497344!2d75.814108!3d22.752514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963032c05c13edb%3A0xe429adcad9e52828!2sLG%2026%2C%20Mangal%20city%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1642604772702!5m2!1sen!2sin"
                      allowFullScreen
                      title="Google Map"
  
                  />
                </Div>
                <Spacing lg="0" md="80" />
              </Div>
            </Div>
          </Div>
        </Div>
        {/* Start Contact Section */}
      </Layout>
    </>
  );
}

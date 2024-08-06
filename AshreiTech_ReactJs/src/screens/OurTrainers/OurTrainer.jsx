import React from 'react';
import style from './style.module.css';
import Usman from '../../assets/Usman.png';
import Abdullah from '../../assets/abdullah.png';
import Fahad from '../../assets/Fahad.png';
import Shahzaib from '../../assets/Shahzaib.png';
import Tayyab from '../../assets/Tayyab.png';
import Najeeb from '../../assets/Najeeb.png';
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurTrainer() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { TrainerContainer } = style;

  return (
    <div className={`${TrainerContainer} mb-5`}>
      <div className="row" style={{ position: 'relative' }}>
        <div className="gradientCircle d-none d-lg-block"></div>
        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
          <h3 className='text-center text-lg-left text-md-left '>MEET THE EXPERTS</h3>
          <p className='text-center text-lg-left text-md-left '>Our experts are here to empower the future of tech by enabling <br className='d-none d-lg-block d-md-block' />  students and professionals.</p>
          <p className='pt-3 text-center text-lg-left text-md-left'>
            In a short span of time, AshreiTech has established itself as a <br className='d-none d-lg-block d-md-block' />  Center of Excellence, recognized for providing state-of-the-art tech <br className='d-none d-lg-block d-md-block' />  training programs. Our commitment to excellence has made us a <br className='d-none d-lg-block d-md-block' />  trusted name in the tech industry, renowned for our innovative<br className='d-none d-lg-block d-md-block' />  and comprehensive training solutions.
            <br className='d-none d-lg-block d-md-block' />
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <SliderWrapper>
            <Slider {...settings}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style1">
                  <img src={Usman} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h6 className='mt-3'> Usman</h6>
                    <p style={{ fontSize: '14px' }}>Associate SAP Consultant</p>
                    <a href="https://www.linkedin.com/in/theusmansidd/">
                    <i className="fab fa-linkedin mr-2 fa-2x mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style2">
                  <img src={Abdullah} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h6 className='mt-3'>Abdullah</h6>
                    <p style={{ fontSize: '14px' }}>Associate SAP Consultant</p>
                    <a href="https://www.linkedin.com/in/syed-muhammad-abdullah-1724971b0/">
                    <i className="fab fa-linkedin mr-2 fa-2x mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style3">
                  <img src={Fahad} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h6 className='mt-3'> Fahad Khan</h6>
                    <p style={{ fontSize: '14px' }}>Salesforce Consultant</p>
                    <a href="https://www.linkedin.com/in/fahad29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <i className="fab fa-linkedin mr-2 fa-2x mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style4">
                  <img src={Shahzaib} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h6 className='mt-3'>Shahzaib Soomro</h6>
                    <p style={{ fontSize: '14px' }}>Python Driving - AI Engineer</p>
                    <a href="https://www.linkedin.com/in/shahzaibsoomro66/">
                    <i className="fab fa-linkedin mr-2 fa-2x mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style5">
                  <img src={Tayyab} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h6 className='mt-3'>Sayed Tayyab Akhtar</h6>
                    <p style={{ fontSize: '14px' }}>VAPT Analyst</p>
                    <a href="https://www.linkedin.com/in/tayyab-akhtar-06a1383a/">
                    <i className="fab fa-linkedin mr-2 fa-2x mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style6">
                  <img src={Najeeb} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h6 className='mt-3'>Najeeb Ahmed Qureshi</h6>
                    <p style={{ fontSize: '14px' }}>Salesforce Consultant</p>
                    <a href="">
                    <i className="fab fa-linkedin mr-2 fa-2x mt-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </SliderWrapper>
        </div>
      </div>
    </div>
  );
}

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 0 10px; /* Space between slides */
    background-color: transparent;
    
  }
  .card-style1 {
    height:400px;
    width: 18rem;
    border-radius: 16px;
    border: 1px solid #FDD8A3;
    background-color: white;
  }
  .card-style2 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #8FCEC1;
    background-color: white;
  }
  .card-style3 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #c3b25a;
    background-color: white;
  }
  .card-style4 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #60bd92;
    background-color: white;
  }
  .card-style5 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #ac6558;
    background-color: white;
  }
  .card-style6 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #81b5ad;
    background-color: white;
  }
  .slick-prev, .slick-next {
    /* background-color: white; */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 20px;
    color: rgb(90, 140, 117);
  }
`;

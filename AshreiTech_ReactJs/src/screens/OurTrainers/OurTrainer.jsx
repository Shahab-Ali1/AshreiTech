import React from 'react';
import style from './style.module.css';
import Usman from '../../assets/Usman.png';
import Abdullah from '../../assets/abdullah.png';
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import bg2 from '../../assets/Rectangle 17011.png'

export default function OurTrainer() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { TrainerContainer } = style;

  return (
    <div className={`${TrainerContainer}`}>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
          <h3 className='text-center text-lg-left text-md-left '>Nurturing Potential: Our Experts Cultivate Students Excellence</h3>
          <p className='pt-3 text-center text-lg-left text-md-left'>
            500+ Counselors with 20+ years of experience in <br className='d-none d-lg-block d-md-block' /> our team who have helped 1 Million+ students to <br className='d-none d-lg-block d-md-block' /> kick start their Career Journey.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <SliderWrapper>
            <Slider {...settings}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style1">
                  <img src={Usman} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h5 className='mt-3'>Muhammad Usman</h5>
                    <p style={{ fontSize: '14px' }}>Associate SAP Consultant</p>
                    <i className="fab fa-linkedin mr-2 fa-2x"></i>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style2">
                  <img src={Abdullah} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h5 className='mt-3'>Abdullah</h5>
                    <p style={{ fontSize: '14px' }}>Associate SAP Consultant</p>
                    <i className="fab fa-linkedin mr-2 fa-2x"></i>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 m-2 card-style1">
                  <img src={Usman} className="card-img-top" alt="..." />
                  <div className='text-center'>
                    <h5 className='mt-3'>Muhammad Usman</h5>
                    <p style={{ fontSize: '14px' }}>Associate SAP Consultant</p>
                    <i className="fab fa-linkedin mr-2 fa-2x"></i>
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
    background-color: white;
    
  }
  .card-style1 {
    width: 18rem;
    border-radius: 16px;
    border: 1px solid #FDD8A3;
    background-color: white;
  }
  .card-style2 {
    width: 18rem;
    border-radius: 16px;
    border: 1px solid #8FCEC1;
    background-color: white;
  }
  .slick-prev, .slick-next {
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 20px;
    color: black;
  }
`;

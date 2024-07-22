import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import profile1 from '../../assets/Profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  return (
    <div className="mt-5 " style={{ marginTop: "100px !important" }}>
      <SliderWrapper>
        <Slider {...settings}>

          <Card >
            <div className="card-body pb-0">
              <div className="row d-flex justify-content-left align-items-center">
                <div className="col-3">
                  <img
                    src={profile2}
                    alt="Online Shopping VR Glasses"
                    className="rounded-circle custom-img"
                  />
                </div>
                <div className="col-2">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="" >
                  <h5 className="font-weight-bolder"> Muhammad Talib</h5>
                  <h6 className="">Oracle Graduate</h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3 testi_Card_text">Thanks to AshreiTech. Everything I learned from soft skills to technical expertise, has directly helped me in my job at Secure Beans in the HR department. My journey has been amazing.</p>
              <div className="row justify-content-between mt-3">
                <div className="col" style={{ color: '#DBDBDB' }}>
                  08:21 PM - Jan 4, 2023
                </div>
                <div className="col" style={{ display: 'contents' }}>
                  <Rating>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star disable_rating"></i>
                  </Rating>
                </div>
              </div>
            </div>
          </Card>

          <Card >
            <div className="card-body pb-0">
              <div className="row d-flex justify-content-left align-items-center">
                <div className="col-3">
                  <img
                    src={profile3}
                    alt="Online Shopping VR Glasses"
                    className="rounded-circle custom-img"
                  />
                </div>
                <div className="col-2">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="" >
                  <h5 className="font-weight-bolder">Maria Farooqui</h5>
                  <h6 className="">Cybersecurity Student</h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3 testi_Card_text">The courses offered by AshreiTech were very interesting, so I decided to enroll in them. I am glad I made this decision because the trainers are extremely helpful</p>
              <div className="row justify-content-between mt-3">
                <div className="col" style={{ color: '#DBDBDB' }}>
                  08:21 PM - Jan 4, 2023
                </div>
                <div className="col" style={{ display: 'contents' }}>
                  <Rating>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star disable_rating"></i>
                  </Rating>
                </div>
              </div>
            </div>
          </Card>

          <Card >
            <div className="card-body pb-0">
              <div className="row d-flex justify-content-left align-items-center">
                <div className="col-3">
                  <img
                    src={profile3}
                    alt="Online Shopping VR Glasses"
                    className="rounded-circle custom-img"
                  />
                </div>
                <div className="col-2">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="" >
                  <h5 className="font-weight-bolder"> Reena & NoorJehan </h5>
                  <h6 className="">Salesforce Associates
                  </h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3 testi_Card_text">“We had no prior knowledge of IT but after we took admission in AshreiTech we got to learn a lot and both of us secured jobs as soon as we acquired our certifications. 
              </p>
              <div className="row justify-content-between mt-3">
                <div className="col" style={{ color: '#DBDBDB' }}>
                  08:21 PM - Jan 4, 2023
                </div>
                <div className="col" style={{ display: 'contents' }}>
                  <Rating>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star disable_rating"></i>
                  </Rating>
                </div>
              </div>
            </div>
          </Card>
          <Card >
            <div className="card-body pb-0">
              <div className="row d-flex justify-content-left align-items-center">
                <div className="col-3">
                  <img
                    src={profile3}
                    alt="Online Shopping VR Glasses"
                    className="rounded-circle custom-img"
                  />
                </div>
                <div className="col-2">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="" >
                  <h5 className="font-weight-bolder">Arwa Motiwala
                  </h5>
                  <h6 className="">Oracle GL Graduate
                  </h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3 testi_Card_text">I got my first job after I did my course in Oracle Financials General Ledger from AshreiTech. The experience was amazing, the trainers were really helpful.</p>
              <div className="row justify-content-between mt-3">
                <div className="col" style={{ color: '#DBDBDB' }}>
                  08:21 PM - Jan 4, 2023
                </div>
                <div className="col" style={{ display: 'contents' }}>
                  <Rating>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star rating"></i>
                    <i className="fa-solid fa-star disable_rating"></i>
                  </Rating>
                </div>
              </div>
            </div>
          </Card>

        </Slider>
      </SliderWrapper>
    </div>
  );
}

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 10px 10px; /* Space between slides */
  }
`;

const Card = styled.div`
  width: 16 rem; /* Adjust the width as needed */
  margin: 0 auto; /* Center the card */
  background-color: white; /* White background for the card */
  border-radius: 10px; /* Optional: Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Box shadow for a subtle effect */
  padding: 10px; /* Optional: Padding inside the card */
  .card {
    width: 100%;
    margin: 0 10px; /* Space between cards */
  }
`;

const Rating = styled.div`
  .rating {
    color: #FFCF59 !important;
    text-align: end !important;
  }
  .disable_rating {
    color: grey !important;
  }
`;

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
          {/* <Card className="mb-1">
            <div className="card-body ">
              <div className="row d-flex justify-content-left align-items-center">
                <div className="col-3">
                  <img
                    src={profile1}
                    alt="Online Shopping VR Glasses"
                    className="rounded-circle custom-img"
                  />
                </div>
                <div className="col-2">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="" >
                  <h5 className="font-weight-bolder"> Justin Bergson</h5>
                  <h6 className="">Parents of students</h6>
                </div>
              </div>
              <p className="card-text mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie turpis tempus nunc pellentesque blandit. Sed pharetra efficitur ex sit amet ultricies. Nulla facilisi.</p>
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
          </Card> */}

          {/* Repeat for other cards */}
          <Card className="mb-1">
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
                  <h5 className="font-weight-bolder"> Justin Bergson</h5>
                  <h6 className="">Parents of students</h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie turpis tempus nunc pellentesque blandit. Sed pharetra efficitur ex sit amet ultricies. Nulla facilisi.</p>
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
                    src={profile2}
                    alt="Online Shopping VR Glasses"
                    className="rounded-circle custom-img"
                  />
                </div>
                <div className="col-2">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="" >
                  <h5 className="font-weight-bolder"> Justin Bergson</h5>
                  <h6 className="">Parents of students</h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie turpis tempus nunc pellentesque blandit. Sed pharetra efficitur ex sit amet ultricies. Nulla facilisi.</p>
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
                  <h5 className="font-weight-bolder"> Justin Bergson</h5>
                  <h6 className="">Parents of students</h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie turpis tempus nunc pellentesque blandit. Sed pharetra efficitur ex sit amet ultricies. Nulla facilisi.</p>
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
                  <h5 className="font-weight-bolder"> Justin Bergson</h5>
                  <h6 className="">Parents of students</h6>
                </div>
              </div>
              <p className="card-text mb-3 mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie turpis tempus nunc pellentesque blandit. Sed pharetra efficitur ex sit amet ultricies. Nulla facilisi.</p>
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
    padding: 0 10px; /* Space between slides */
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

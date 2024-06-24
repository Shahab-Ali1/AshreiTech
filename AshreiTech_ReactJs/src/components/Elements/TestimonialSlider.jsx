import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    <div className="mt-5 " style={{marginTop:"100px !important"}}>
      <SliderWrapper>
      <Slider {...settings}>
        <Card>
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-2 pr-0 pt-0" style={{height:70}}>
                <img
                  src="https://image.shutterstock.com/image-illustration/online-shopping-vr-glasses-furniture-260nw-2186046439.jpg"
                  alt="Online Shopping VR Glasses"
                  className="img-fluid rounded-circle custom-img"
                />
              </div>
              <div className="col-1 mt-3">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="col" >
                <h4 className="font20 fw-bold"> Justin Bergson</h4>
                <h5 className="font18 mt-1">Parents of students</h5>
              </div>
            </div>
            <p className="card-text mb-3 mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates, dolores cum laboriosam ratione voluptatibus dignissimos fuga. Facilis, praesentium dolore. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="row justify-content-between mt-3">
              <div className="col">
                08:21 PM - Jan 4, 2023
              </div>
              <div className="col" style={{display:'contents'}}>
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

        {/* Repeat for other cards */}
        <Card>
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-2 pr-0 pt-0" style={{height:70}}>
                <img
                  src="https://image.shutterstock.com/image-illustration/online-shopping-vr-glasses-furniture-260nw-2186046439.jpg"
                  alt="Online Shopping VR Glasses"
                  className="img-fluid rounded-circle custom-img"
                />
              </div>
              <div className="col-1 mt-3">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="col">
                <h4 className="font20 fw-bold"> Justin Bergson</h4>
                <h5 className="font18 mt-1">Parents of students</h5>
              </div>
            </div>
            <p className="card-text mb-3 mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates, dolores cum laboriosam ratione voluptatibus dignissimos fuga. Facilis, praesentium dolore. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="row justify-content-between mt-3">
              <div className="col">
                08:21 PM - Jan 4, 2023
              </div>
              <div className="col d-content" style={{display:'contents'}}>
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
        
        <Card>
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-2 pr-0 pt-0" style={{height:70}}>
                <img
                  src="https://image.shutterstock.com/image-illustration/online-shopping-vr-glasses-furniture-260nw-2186046439.jpg"
                  alt="Online Shopping VR Glasses"
                  className="img-fluid rounded-circle custom-img"
                />
              </div>
              <div className="col-1 mt-3">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="col">
                <h4 className="font20 fw-bold"> Justin Bergson</h4>
                <h5 className="font18 mt-1">Parents of students</h5>
              </div>
            </div>
            <p className="card-text mb-3 mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates, dolores cum laboriosam ratione voluptatibus dignissimos fuga. Facilis, praesentium dolore. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="row justify-content-between mt-3">
              <div className="col">
                08:21 PM - Jan 4, 2023
              </div>
              <div className="col d-content" style={{display:'contents'}}>
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
  width: 16rem; /* Adjust the width as needed */
  margin: 0 auto; /* Center the card */
  background-color: white; /* White background for the card */
  border-radius: 10px; /* Optional: Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Box shadow for a subtle effect */
  padding: 20px; /* Optional: Padding inside the card */
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

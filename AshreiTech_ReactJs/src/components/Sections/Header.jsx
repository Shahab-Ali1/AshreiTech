import React, { useEffect } from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import slider1 from "../../assets/slider1.png"
import slider2 from "../../assets/slider2.png"
import slider3 from "../../assets/slider3.png"

export default function Header() {

  return (
    <>
     <div id="carouselExampleIndicators" className="carousel slide" data-wrap="true" data-ride="carousel" data-interval="2000">
      <ol className="carousel-indicators mt-n5">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active slider_control"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="slider_control"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" className="slider_control"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100" style={{ backgroundImage: `url(${slider1})`,height: '700px',  backgroundColor: 'white',  padding: '100px 30px 0px 30px', boxSizing: 'border-box' }}>
            <div className="row justify-content-center align-items-center">
            <div className="col-sm-6 col-xs-12 p-5">
                <h1 className="slider_heading">Complexity <span style={{color:'#008F71'}}>Simplified,</span> Globally</h1>
                <button className="slider_btn mt-n5">Register Now</button>
                <button className="slider_btn ml-3">Explore More</button>
              </div>
                {/* <img src={slider1} alt="" className="img-fluid" /> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100" style={{ height: '700px', backgroundColor: 'white', padding: '90px 30px 0px 30px', boxSizing: 'border-box' }}>
            <div className="row">
              <div className="col-sm-6 col-xs-12 p-5">
                <h1 className="slider_heading">Ready To Become <span style={{color:'#008F71'}}>Data Detective</span></h1>
                <p className="font25">
                   dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
                </p>
                <button className="slider_btn">Getting Started</button>
              </div>
              <div className="col-sm-6 col-xs-12 d-flex justify-content-end">
                <img src={slider2} alt="" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100"  style={{ height: '700px', backgroundColor: 'white', padding: '90px 50px 0px 50px', boxSizing: 'border-box' }}>
            <div className="row">
              <div className="col-6 p-5">
                <h1 className="slider_heading">Complexity <span style={{color:'#008F71'}}>Simplified,</span> Globally</h1>
                <p className="font25">
                   dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
                </p>
                <button className="slider_btn">Getting Started</button>
              </div>
              <div className="col-6  d-flex justify-content-end">
                <img src={slider3} alt="" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="sr-only">Next</span>
      </a>
    </div>
    </>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;



import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import newSlider1 from "../../assets/HeroHome1.png";
import homebannervideo from '../../assets/video/headervideo.mp4'
import InfoCard from "../../screens/InfoCard/InfoCard";
import { infoCardData } from "../../constant";

export default function Header() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carouse-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className=" ative"></li>
          {/* <li data-target="#arouselExampleIndicators" data-slide-to="1" cl></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
        </ol>
        <div className="carousel-inner"> 
          <div className="carousel-item active  mb-3  " style={{  width: '100%', background:"transparent",height: 'auto',backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center' }}>
          <video autoPlay loop muted style={{width:"100%",height:"100%"}}>
          <source src={homebannervideo} type="video/mp4" style={{width:"100%",height:"100%"}} />
          Your Browser Does Not Support The Video Tag.
        </video>
            {/* <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5 ">
              <h1 className="pt-3 text-center text-md-left">
                Complexity <span style={{ color: "#008F71" }}>Simplified,</span>
                <br /> Globally
              <div className="mb-5 pb-5 pl-0">
                <button className="slider_btn py-3 ">Register Now</button>
                <button className="slider_btn mx-3 py-3">Explore More</button>
              </div>
              </h1>
            </div> */}
          </div>
          {/* <div className="carousel-item bg-white p-5">
            <div className="d-flex justify-content-center align-items-center row">
              <div className="col-lg-6 col-sm-12 col-md-6 p-5 text-center text-md-left">
                <h1>
                  Ready To Become <span style={{ color: "#008F71" }}>Data Detective</span>
                </h1>
                <p className="slider_description">
                  Dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
                </p>
                <button className="slider_btn">Getting Started</button>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6  ">
                <img src={slider2} alt="" className="img-fluid  pt-5 pt-lg-0" />
              </div>
            </div>
          </div>
          <div className="carousel-item bg-white p-5">
            <div className="d-flex justify-content-center align-items-center row">
              <div className="col-lg-6 col-sm-12 col-md-6 p-5 text-center text-md-left">
                <h1>
                  Complexity <span style={{ color: "#008F71" }}>Simplified,</span> Globally
                </h1>
                <p className="slider_description">
                  Dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
                </p>
                <button className="slider_btn">Getting Started</button>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 ">
                <img src={slider3} alt="" className="img-fluid pt-5 pt-lg-0" />
              </div>
            </div>
          </div> */}
        </div>
        <a className="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next  d-none" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <InfoCard data={infoCardData} count={true}/>
    </>
  );
}

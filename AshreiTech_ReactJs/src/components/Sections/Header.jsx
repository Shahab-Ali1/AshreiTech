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

export default function Header() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-wrap="true"
        data-ride="carousel"
        data-interval="200000"
      >
        <ol className="carousel-indicators mt-n5">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active slider_control"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            className="slider_control"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            className="slider_control"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="d-block w-100 slider_1"
              style={{
                backgroundImage: `url(${newSlider1})`,
                height: "82.5vh",
                backgroundColor: "white",
                padding: "100px 30px 0px 30px",
                boxSizing: "border-box",
              }}
            >
              <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
                <h1 className="">
                  Complexity <span style={{ color: "#008F71" }}>Simplified,</span>
                  <br /> Globally
                  <div>
                    <button className="slider_btn">Register Now</button>
                    <button className="slider_btn mx-3">Explore More</button>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100 slider_container"
              style={{
                backgroundColor: "white",
                padding: "90px 30px 0px 30px",
                boxSizing: "border-box",
              }}
            >
              <div className="row">
                <div className="col-md-6 col-12">
                  <h1 className="">
                    Ready To Become <span style={{ color: "#008F71" }}>Data Detective</span>
                  </h1>
                  <p className="slider_discription">
                    Dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
                  </p>
                  <button className="slider_btn">Getting Started</button>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-end">
                  <img src={slider2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100 slider_container"
              style={{
                backgroundColor: "white",
                padding: "90px 50px 0px 50px",
                boxSizing: "border-box",
              }}
            >
              <div className="row">
                <div className="col-md-6 col-12">
                  <h1 className="">
                    Complexity <span style={{ color: "#008F71" }}>Simplified,</span> Globally
                  </h1>
                  <p className="slider_discription">
                    Dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
                  </p>
                  <button className="slider_btn">Getting Started</button>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-end">
                  <img src={slider3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}


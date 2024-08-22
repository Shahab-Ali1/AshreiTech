import React from "react";
import style from "./style.module.css";
import LaptopImage from "../../assets/LaptopImage.png";
import ourpartnerbg from '../../assets/Ourpartnerbg.png'
import integration_experts_logo from '../../assets/integration_experts_logo.png'
import avanza_logo from '../../assets/avanza_logo.png'
import QRandndiPh from "../../assets/Frame 7873.png"
import rewterz_logo from '../../assets/rewterz_logo.png'
import nastp_logo from '../../assets/nastp_logo.png'
import EduManBlue from '../../assets/EduManBlue.png'
import al_baraka from '../../assets/al_baraka.png'
import avanza2 from '../../assets/avanza2.png'
import lrnglog from '../../assets/lrnglog.png'
import martin_dow from '../../assets/martin_dow.png'
import strata from '../../assets/strata.png'
import strive from '../../assets/strive.png'
import tpl_map from '../../assets/tpl_map.png'
import Faq from "../Faq/Faq";
import departmentsFaq from "../../constant"
import Slider from "react-slick";
// import  Card  from "@mui/material";
import styled from "styled-components";


const sponsersLogo = [
    { logo: tpl_map, link: 'https://tplmaps.com/' ,width :"71%"},
    { logo: martin_dow, link: 'https://www.martindow.com/',width :"60%" },
    { logo: strive, link: 'https://stryvve.com/',marginTop:-9 ,width :"75%"},
    { logo: integration_experts_logo, link: 'https://integrationxperts.com/' ,width :"100%"},
    { logo: nastp_logo, link: 'https://nastp.gov.pk/' ,width :"100%"},
    { logo: rewterz_logo, link: 'https://www.rewterz.com/' ,width :"100%"},
    { logo: avanza_logo, link: 'https://avanzasolutions.com/' ,width :"100%"},
    { logo: EduManBlue, link: 'https://edu-man.com/',width :"95%" },
    { logo: al_baraka, link: 'https://www.albaraka.com.pk/' ,width :"71%"},
    { logo: lrnglog, link: 'https://www.learningmindsgroup.com/',width :"100%" },
    { logo: strata, link: 'https://www.strata.com/',width :"100%" },
];

const settings = {
    infinite: true,
    speed: 4000, // Slower speed for smooth, continuous scroll
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1, // This can be kept as 1 for continuous scroll
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous autoplay
    cssEase: "linear", 
    arrows: false, // Hide arrows for continuous scroll
    pauseOnHover: true,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
        { breakpoint: 800, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ],
};
const Sponsers = () => {
    const { box, sponsers, sponsers_logo_container, Laptop_Image } = style;
    return (
        <>
            <div style={{
                backgroundImage: `url(${ourpartnerbg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }} className="container-fluid  px-1 px-lg-5 my-5 my-md-0">
                <div className="gradientCircle d-none d-lg-block"></div>
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center " style={{ position: 'relative', zIndex: 2 }}>
                    <div className=" mt-0 mt-lg-5">
                        <div>
                            <h1 className=" text-center  generic_heading" style={{ color: '#000000' }}>
                                {" "}
                                Our Partners
                            </h1>
                            <p className="font20 text-center  mt-4 d-none">
                                Our experts are here to empower the future of tech by enabling students and professionals.
                                ,
                            </p>
                        </div>

                    </div>
                    <div className={`${sponsers} mb-5 mt-4`}>
                  
                    </div>

                </div>
                <div className=" " >
      <SliderWrapper>
        <Slider {...settings}>
          {sponsersLogo.map(({logo,link,width}, index) => (
           
                
              <div className={`${sponsers_logo_container} mb-3`}>
                <a href={link} className="" target="_blank" rel="noopener noreferrer">
                <img
                        src={logo}
                        className="container-fluid"
                        style={{ width, height: "100%", objectFit: "conain" }}
                        alt={`Sponsor Logo ${index + 1}`}
                    />
                                </a>
                            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </div>
                <div className={`${box} container-fluid`}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center text-center text-md-left text-lg-left ">
                            <div className="">
                                <h1 className="mt-4">
                                    Learn Anytime,
                                    <br /> Anywhere!
                                </h1>
                                <div className="mt-4">
                                    <p>Get it on your device now!</p>
                                    {/* <button type="button" className={`${custom_btn_outline_dark} px-4 mt-4`}>
                                    Learn More
                                </button> */}
                                    <div>
                                        <img src={QRandndiPh} alt="" className="pt-4" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                            <img
                                className={`${Laptop_Image}`}
                                style={{ width: "100%", height: "auto" }}
                                src={LaptopImage}
                                alt="Laptop Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Faq data={departmentsFaq} />
        </>
    );
};

export default Sponsers;


const SliderWrapper = styled.div`
  .slick-slide {
    padding: 10px 10px; /* Space between slides */
  }
`;

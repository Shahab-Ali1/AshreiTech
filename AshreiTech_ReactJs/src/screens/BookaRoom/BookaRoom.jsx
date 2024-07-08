import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import BookaScreenHero from '../../assets/BookaScreen/BookaScreenHero.png';
import BookaScreenHeroContainer from '../../assets/BookaScreen/BookaScreenHeroContainer.png';
import Card1 from '../../assets/BookaScreen/pexels-pixabay-159806 1.png';
import wave from '../../assets/BookaScreen/Wave.1.png';
import wave2 from '../../assets/BookaScreen/Wave2.png';
import vector1 from '../../assets/BookaScreen/Group 7899 (1).png';
import vector2 from '../../assets/BookaScreen/Group 7901.png';
import vector3 from '../../assets/BookaScreen/Vector (2).png';
import vector4 from '../../assets/BookaScreen/Vector.png';
import rectangle from '../../assets/BookaScreen/Rectangle 17041.png';
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BookaRoom() {
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
    return (
        <>
            <TopNavbar />
            <div
                className="container-fluid py-4"
                style={{
                    backgroundImage: `url(${BookaScreenHeroContainer})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                }}
            >
                <div className="row">
                    <div
                        className="col-12 py-5 container"
                        style={{
                            backgroundImage: `url(${BookaScreenHero})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: 'auto',
                            width: '100%',
                            borderRadius: '50px',
                        }}
                    >
                        <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5 text-center">
                            <h1 className="font-weight-bold text-white pt-5 mt-5">Elevate the way you meet & work</h1>
                            <h5 className="text-white mt-3">Supporting today's top organizations with inspiring spaces, premium hospitality and the hybrid technology they need to grow.</h5>
                            <button className="slider_btn">Book a tour</button>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row p-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                        <h1>Corporate Event Spaces That Inspire</h1>
                        <p className="mt-3">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                        <button className="slider_btn">Explore Our Rooms</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div
                className="container-fluid"
                style={{
                    backgroundColor: '#5A8C75',
                    backgroundImage: `url(${wave})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                }}
            >
                <div className="container py-4">
                    <div className="row p-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>Packages with everything you need</h1>
                            <p className="mt-3">We simplify everything with thoughtfully curated event packages and a dedicated support team to ensure a seamless planning process. From in-house AV technology, onsite kitchens, furniture, and hospitality staff - we have it all.</p>
                            <button className="slider_btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row p-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                        <p className="mt-3">Our tech tier bundles are curated with simple to complex meetings and events in mind, with multiple levels of in-room equipment and technical support. Work with our team to find the tech tier that’s right for you, or explore our custom offerings.</p>
                        <button className="slider_btn">View Packages</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div
                className="container-fluid py-4 "
                style={{
                    backgroundColor: '#5A8C75',
                    backgroundImage: `url(${wave2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: 0,
                }}
            >
                <div className="row d-flex justify-content-center align-items-center py-4">
                    <div className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center text-white">
                        <h1 className="generic_heading pb-4 pb-lg-0" id="generic_heading_BookRoom">Inclusion</h1>
                        <p className="col-8 pt-2 mt-4">Our tech tier bundles are curated with simple to complex meetings and events in mind, with multiple levels of in-room equipment and technical support. Work with our team to find the tech tier that’s right for you, or explore our custom offerings.</p>
                    </div>
                </div>
                <div className='d-sm-block d-md-none d-lg-none'>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <img src={vector2} alt="" />
                            <h3 className="my-2 font-weight-bolder">PREMIUM SPACE</h3>
                            <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                        </div>

                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <img src={vector2} alt="" />
                            <h3 className="my-2 font-weight-bolder">PREMIUM SPACE</h3>
                            <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <img src={vector2} alt="" />
                            <h3 className="my-2 font-weight-bolder">PREMIUM SPACE</h3>
                            <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <img src={vector2} alt="" />
                            <h3 className="my-2 font-weight-bolder">PREMIUM SPACE</h3>
                            <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                        <img src={vector2} alt="" />
                        <h3 className="my-2 font-weight-bolder">PREMIUM SPACE</h3>
                        <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px' }}>
                        <img src={vector2} alt="" />
                        <h3 className="my-2 font-weight-bolder">IN-HOUSE AV & IT</h3>
                        <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                    </div>
                </div>
                <div className="col-12 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                        <img src={vector2} alt="" />
                        <h3 className="my-2 font-weight-bolder">PREMIUM SPACE</h3>
                        <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px' }}>
                        <img src={vector2} alt="" />
                        <h3 className="my-2 font-weight-bolder">Hybrid Enabled</h3>
                        <p className="line-height-sm">To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-12 p-5">
                <SliderWrapper>
                    <Slider {...settings}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className=" m-2 p-4">
                                <img src={rectangle} className="card-img-top" alt="..." />

                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className=" m-2 p-4">
                                <img src={rectangle} className="card-img-top" alt="..." />

                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className=" m-2 p-4">
                                <img src={rectangle} className="card-img-top" alt="..." />

                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className=" m-2 p-4">
                                <img src={rectangle} className="card-img-top" alt="..." />

                            </div>
                        </div>
                    </Slider>
                </SliderWrapper>
            </div>
            <Footer />
        </>
    );
}

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 0 10px; /* Space between slides */
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
    color: white;
    background-color: black;
    border-radius: 100%;
    bordercolor: white;
    outline: white solid;
  }
`;

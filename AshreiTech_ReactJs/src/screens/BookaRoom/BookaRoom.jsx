import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import BookaScreenHero from '../../assets/BookaScreen/BookaScreenHero.png';
import BookaScreenHeroContainer from '../../assets/BookaScreen/BookaScreenHeroContainer.png';
import Card1 from '../../assets/BookaScreen/pexels-pixabay-159806 1.png';
import wave from '../../assets/BookaScreen/Wave.1.png';
import wave2 from '../../assets/BookaScreen/Wave2.png';
import alrazi from '../../assets/BookaScreen/al-razi.jpg';
import alFarabi from '../../assets/BookaScreen/al-farabi.jpg';
import alkhawarzmi from '../../assets/BookaScreen/al-khawarizmi.jpg';
import alkindi from '../../assets/BookaScreen/al-kindi.jpg';
import heart from '../../assets/BookaScreen/vanue at the heart of the city.svg';
import wifi from '../../assets/BookaScreen/wifi.svg'
import tech from '../../assets/BookaScreen/high tech learning.svg'
import pray from '../../assets/BookaScreen/prayer area.svg'
import Slider from "react-slick";
import vactor1 from '../../assets/BookaScreen/Group 7901.png';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.module.css'
import { AdmissionEnquiry } from '../AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery';
import style from "./style.module.css";
import videoOne from '../../assets/video/video1.mp4'
import videoTwo from '../../assets/video/video2.mp4'
import videoThree from '../../assets/video/video3.mp4'


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
    const { modallg } = style;
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
                            position: 'relative',
                            backgroundImage: `url(${BookaScreenHero})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: 'auto',
                            width: '100%',
                            borderRadius: '50px',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                borderRadius: '50px',
                            }}
                        ></div>
                        <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5 text-center" style={{ position: 'relative' }}>
                            <h1 className="font-weight-bold text-white pt-5 mt-5">The Trusted Venue Partner for all your Corporate
                                Events & Conferences</h1>
                            <h4 className="text-white mt-3">No matters if it’s a 10-person strategy meeting or a
                                1000-person conference, we’ve got your back.</h4>
                            <button className="slider_btn"  >Register Now</button>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                </div>

            </div>
            <div className="container py-4">
                <div className="row p-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                        <h1>Professional Ambiance</h1>
                        <p className="mt-3">Our rooms are meticulously designed to create a professional atmosphere
                            conducive to productivity and focus. <br />
                            Each room is customized to suit various types and room layouts of
                            corporate events and trainings, whether it's a board meeting, seminar,
                            workshop, or training session.
                        </p>
                        <button className="slider_btn d-none">Explore Our Rooms</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <video controls style={{
                            width: '100%',
                            height: 'auto'
                        }}>
                            <source src={videoOne} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                            <video controls style={{
                                width: '100%',
                                height: 'auto'
                            }}>
                                <source src={videoTwo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>High-Tech Equipment</h1>
                            <p className="mt-3">State-of-the-art audiovisual equipment ensures seamless
                                presentations and interactive sessions.
                                <br />
                                High-resolution latest commercial grade screen and traditional
                                whiteboards covers all the training needs of communication and
                                collaboration.
                            </p>
                            <button className="slider_btn d-none">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row p-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                        <h1>Customizable Amenities</h1>
                        <p className="mt-3">We offer customizable amenities such as catering services, coffee stations,
                            and breakout areas to meet specific event requirements.
                            <br />
                            Our dedicated staff is available to assist with setup, technical support, and
                            any other logistical needs, ensuring a seamless event experience.
                        </p>
                        <button className="slider_btn d-none">View Packages</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <video controls style={{
                            width: '100%',
                            height: 'auto'
                        }}>
                            <source src={videoThree} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
                        <h1 className="generic_heading pb-4 pb-lg-0" id="generic_heading_BookRoom">What's Included ?</h1>
                        <p className="col-8 pt-2 mt-4">Our tech tier bundles are curated with simple to complex meetings and events in mind, with multiple levels of in-room equipment and technical support. Work with our team to find the tech tier that’s right for you, or explore our custom offerings.</p>
                    </div>
                </div>
                <div className='d-sm-block d-md-none d-lg-none'>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <div className="col-3">
                                <img src={wifi} alt="" />
                            </div>
                            <i class="fa-solid fa-wifi fa-4x" style={{ color: 'black' }}></i>
                            <h4 className="my-2 font-weight-bolder " style={{ color: 'black !important' }} >24/7 wi-fi</h4>
                            <p className="line-height-sm">Obviously, it’s Not A Luxury – It’s A Necessity!</p>
                        </div>

                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <div className="col-3">
                                <img src={tech} alt="" />
                            </div>
                            <i class="fa-solid fa-book fa-4x" style={{ color: 'black !important' }}></i>
                            <h4 className="my-2 font-weight-bolder">High-Tech Learning Venue</h4>
                            <p className="line-height-sm"> Of course, We Are A Tech Company!</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <div className="col-3">
                                <img src={pray} alt="" />
                            </div>
                            <i class="fa-solid fa-mosque fa-4x" style={{ color: 'black !important' }}></i>
                            <h4 className="my-2 font-weight-bolder">Segregated Prayer Area</h4>
                            <p className="line-height-sm">Neat And Tidy, For Ladies And Gentlemen!</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <div className="col-3">
                                <img src={heart} alt="" />
                            </div>
                            <i class="fa-solid fa-city fa-4x" style={{ color: 'black !important' }}></i>
                            <h4 className="my-2 font-weight-bolder">Venue At The Heart Of The City</h4>
                            <p className="line-height-sm">With Ample Shaded Parking Space!</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                        <div className="col-3">
                            <img src={wifi} alt="" />
                        </div>
                        <h4 className="my-2 font-weight-bolder " style={{ color: 'black !important' }} >24/7 wi-fi</h4>
                        <p className="line-height-sm">Obviously, it’s Not A Luxury – It’s A Necessity!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px' }}>
                        <div className="col-3">
                            <img src={tech} alt="" />
                        </div>
                        <h4 className="my-2 font-weight-bolder">High-Tech Learning Venue</h4>
                        <p className="line-height-sm"> Of course, We Are A Tech Company!</p>
                    </div>
                </div>
                <div className="col-12 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                        <div className="col-3">
                            <img src={pray} alt="" />
                        </div>
                        <h4 className="my-2 font-weight-bolder">Segregated Prayer Area</h4>
                        <p className="line-height-sm">Neat And Tidy, For Ladies And Gentlemen!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px' }}>
                        <div className="col-3">
                            <img src={heart} alt="" />
                        </div>
                        <h4 className="my-2 font-weight-bolder">Venue At The Heart Of The City</h4>
                        <p className="line-height-sm">With Ample Shaded Parking Space!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-12 col-md-6 col-lg-10 p-5 justify-content-center">
                    <SliderWrapper>
                        <Slider {...settings}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="m-2 p-4">
                                    <img src={alrazi} alt="Al-Razi" className='slick-slide' />
                                    <div className="info">
                                        <h1>Al-Razi</h1>
                                    </div>
                                    <div className="overlay">
                                        <h4>Capacity: 15 to 25 Person</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="m-2 p-4">
                                    <img src={alFarabi} alt="Al-Farabi" className='slick-slide' />
                                    <div className="info">
                                        <h1>Al-Farabi</h1>
                                    </div>
                                    <div className="overlay">
                                        <h4>Capacity: 15 to 25 Person</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="m-2 p-4">
                                    <img src={alkhawarzmi} alt="Al-Khawarzmi" className='slick-slide' />
                                    <div className="info">
                                        <h1>Al-Khawarzmi</h1>
                                    </div>
                                    <div className="overlay">
                                        <h4>Capacity: 15 to 25 Person</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="m-2 p-4">
                                    <img src={alkindi} alt="Al-kindi" className='slick-slide' />
                                    <div className="info">
                                        <h1>Al-kindi</h1>
                                    </div>
                                    <div className="overlay">
                                        <h4>Capacity: 15 to 25 Person</h4>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </SliderWrapper>
                </div>
            </div>

            <div className="container">
                <div class="modal fade  " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className={`${modallg} modal-dialog `} id='modalForm' role="document">
                        <div class="modal-content">

                            <div class="modal-body">
                                ...<AdmissionEnquiry />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

const SliderWrapper = styled.div`
  .slick-slide {
    position: relative;
    text-align: center;
    padding: 0 10px;
    border-radius: 25px !important;
  }

  img {
    width: 350px;
    height: 270px;

  }

  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    /* background: rgba(0, 0, 0, 0.5); */
    padding: 10px;
    transition: opacity 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 1;
    left: 23px;
    width: 326px;
    height: 270px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px !important;
  }

  .slick-slide:hover .info {
    opacity: 0;
  }

  .slick-slide:hover .overlay {
    opacity: 1;
  }
`;

// data-toggle="modal" data-target="#exampleModal" 
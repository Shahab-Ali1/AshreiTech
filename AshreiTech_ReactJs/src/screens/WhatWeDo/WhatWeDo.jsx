import React from 'react'
import TopNavbar from '../../components/Nav/TopNavbar'
import Footer from '../../components/Sections/Footer/Footer'
import wave from '../../assets/BookaScreen/Wave2.png'
import Card1 from '../../assets/BookaScreen/pexels-pixabay-159806 1.png';
import wave1 from '../../assets/BookaScreen/green pattern 3.png'

export default function WhatWeDo() {
    return (
        <>
            <TopNavbar />
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
                <div className="container py-2">
                    <div className="row p-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>Discover Our Wide Ranges of Academic Programs for Every Interest</h1>
                            <p className="mt-3">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                            <div className='d-flex pt-4'>
                                <div className="col-6 pl-0">
                                    <h4>Flexible Options</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                                <div className="col-6 ">
                                    <h4>Expert Faculty</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                            </div>
                            <button className="slider_btn">Explore Our Rooms</button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="container-fluid"
                style={{
                    backgroundImage: `url(${wave1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                }}
            >
                <div className="container py-2">
                    <div className="row p-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                            <h1>Discover Our Wide Ranges of Academic Programs for Every Interest</h1>
                            <p className="mt-3">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                            <div className='d-flex pt-4' >
                                <div className="col-6  pl-0">
                                    <h4>Flexible Options</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                                <div className="col-6">
                                    <h4>Expert Faculty</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                            </div>
                            <button className="slider_btn">Explore Our Rooms</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
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
                <div className="container py-2">
                    <div className="row p-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>Transform your workforce for the better with our extensive corporate Training Program</h1>
                            <p className="mt-3">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                            <div className='d-flex pt-4'>
                                <div className="col-6 pl-0">
                                    <h4>Flexible Options</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                                <div className="col-6 ">
                                    <h4>Expert Faculty</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                            </div>
                            <button className="slider_btn">Explore Our Rooms</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-2">
                    <div className="row p-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                            <h1>Unleash Your Potential with Exciting Events</h1>
                            <p className="mt-3">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                            <div className='d-flex pt-4' >
                                <div className="col-6  pl-0">
                                    <h4>Flexible Options</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                                <div className="col-6">
                                    <h4>Expert Faculty</h4>
                                    <p className='pt-2'>Welcome to the first step in your journey towards an inspiring educational experience at our academy.</p>
                                </div>
                            </div>
                            <button className="slider_btn">Explore Our Rooms</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

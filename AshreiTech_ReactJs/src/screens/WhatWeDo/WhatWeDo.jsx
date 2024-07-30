import React from 'react'
import TopNavbar from '../../components/Nav/TopNavbar'
import Footer from '../../components/Sections/Footer/Footer'
import wave from '../../assets/BookaScreen/Wave2.png'
import Card1 from '../../assets/BookaScreen/pexels-pixabay-159806 1.png'
import waveOne from '../../assets/greenpattern.png'
import { useNavigate } from 'react-router-dom';


export default function WhatWeDo() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/CorporateTrainings');
    };
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
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>Enable Yourselves By Becoming A Tech Learner</h1>
                            <p className="mt-3"> Build or enhance your tech
                                career by enrolling in our tech courses and get globally certified. From in-demand areas like cloud computing and cyber security, to coveted platform
                                partner certifications including Microsoft, SAP, Oracle, Salesforce amongst
                                others, we offer a diverse range of courses and training programs tailored to
                                industry demands.
                            </p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h4>Technical Prowess</h4>
                                    <p className='pt-2'>Master the in-demand technical skills required for your chosen career
                                        path in emerging technologies.
                                    </p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Entrepreneurial Mindset</h4>
                                    <p className='pt-2'>Nurture your entrepreneurial spirit with programs designed to
                                        empower you to turn your ideas into reality.</p>
                                </div>
                            </div>
                            <button className="slider_btn">View All Courses </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-2 px-0"
                style={{
                    position: 'relative',
                }}
            >
                <div className=" d-none d-md-block" style={{
                    backgroundImage: `url(${waveOne})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}></div>
                <div className="container">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                            <h1>Rock Your Events With Your Trusted Venue Partner</h1>
                            <p className="mt-3"> Being located precisely in
                                the center of the city, with high end safety and security, and equipped with all
                                the high-tech amenities, you get everything you need to run a successful in-house training, meetings & networking events. Our experienced staff is wellversed in the latest audiovisual technologies, ensuring smooth operations and
                                technical support throughout your event.
                            </p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h4>Convenience and Flexibility</h4>
                                    <p className='pt-2'>With customizable room layouts and amenities, our service offers flexible solutions for
                                        various event formats, ensuring convenience for both organizers and attendees.
                                    </p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Professional Image</h4>
                                    <p className='pt-2'>Hosting your corporate events and trainings in our purpose-built facilities enhances your
                                        professional image and demonstrates your commitment to quality and excellence.</p>
                                </div>
                            </div>
                            <button className="slider_btn">Book Your Space</button>
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
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>Level Up Your Workforce With Our Comprehensive Training Programs</h1>
                            <p className="mt-3">At AshreiTech, we recognize the critical role of continuous learning in maintaining a competitive
                                edge in today’s fast-paced digital landscape. That’s why we partner with industry-renowned
                                experts to offer customized corporate tech training programs tailored to meet the unique
                                needs of every organization.</p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h4>Expert Training Partners </h4>
                                    <p className='pt-2'>Our training programs are led by top industry professionals, ensuring
                                        your employees receive the highest quality education and insights from leaders in their fields.</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Comprehensive Tech Training </h4>
                                    <p className='pt-2'>From foundational skills to advanced tech competencies, our
                                        extensive range of courses covers all your tech training needs, all set to empower your team.</p>
                                </div>
                            </div>
                            <button className="slider_btn" onClick={handleButtonClick} >Explore the Workshops</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-2 px-0"
                style={{
                    position: 'relative',
                }}
            >
                <div className=" d-none d-md-block" style={{
                    backgroundImage: `url(${waveOne})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}></div>
                <div className="container">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                            <h1>Become a Talent Hero</h1>
                            <p className="mt-3">CSR Giving is perhaps one on the most sustainable forms of giving in
                                the overall philanthropic canvas of Pakistan. Yes, investing in healthcare, primary education,
                                social welfare, and habitat is important, but It’s also critically important to invest in domains
                                that strengthens the overall GDP and ultimately benefit everything mentioned above.</p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h4>Empower The Next Generation</h4>
                                    <p className='pt-2'>We are working to make CSR easy and sustainable, whether it be to promote DEI, upskill
                                        marginalized communities, or sponsor a batch.</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h4>Explore Collaborative Avenues</h4>
                                    <p className='pt-2'>We are open to hear creative approaches on how we can collectively work to develop
                                        workforce for future technologies and cater to the global IT outsourcing market.
                                    </p>
                                </div>
                            </div>
                            <button className="slider_btn">Make An Impact
                            </button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img src={Card1} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

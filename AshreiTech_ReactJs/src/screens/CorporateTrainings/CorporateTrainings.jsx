import React, { useEffect } from 'react'
import TopNavbar from '../../components/Nav/TopNavbar'
import Footer from '../../components/Sections/Footer/Footer'
import cp_header from '../../assets/CorporateTraining/CP_Header.png'
import style from "./CorporateTrainings.module.css"
import future_training from "../../assets/CorporateTraining/future_training.png"
import ITGovernance from '../../assets/pdf/ITGovernance.pdf';
import CyberSecurity from '../../assets/pdf/Cybersecurity Essentials A Hands-On Introduction.pdf';
import AiFundamentals from '../../assets/pdf/AI Fundamentals for Business Leaders  - AshreiTech.pdf';
import SAPerp from '../../assets/pdf/SAP ERP Finance and Cost Controlling Module.pdf';
import SAPanalytics from '../../assets/pdf/SAP Analytics Cloud (SAC) Workshop.pdf';
import SAPmaterial from '../../assets/pdf/SAP Material Management (MM).pdf';
import AI from '../../assets/pdf/AI.png';
import ERP from '../../assets/pdf/ERP.png';
import SAC from '../../assets/pdf/SAC.png';
import Governance from '../../assets/pdf/Governance.png';
import cyberSecurity from '../../assets/pdf/cyberSecurity.png';
import Material from '../../assets/pdf/Material.png';
import { useLocation } from 'react-router-dom'


export default function CorporateTrainings() {
    const { generic_heading_left, generic_heading_center, training_container, training_container_img, future_training_btn, training_container_white, card_style, p_color, gradientCircle, gradientCircleRow, bgF7FDE8, card, gradientCircleLeft, gradientCircleLeftcontainer, rectangle_box, cDateTime, rectangle_boxOne } = style;

    const future_Card_Data = [
        {
            title: 'IT GOVERNANCE',
            subtitle: 'IT GOVERNANCE AND RISK MANAGEMENT',
            description: 'Core concepts and principles of IT Governance and IT Risk Management',
            image: Governance,
            startDate: '2024-08-28',
            endDate: '2024-08-28',
            dndt: '28th Aug, 2024',
            pdfs: ITGovernance
        },
        {
            title: 'Cybersecurity Essentials',
            subtitle: 'Cybersecurity Essentials: A Hands-On Introduction',
            description: 'Unlocking the Fundamentals of Cybersecurity for Aspiring Professionals',
            image: cyberSecurity,
            startDate: '2024-09-04',
            endDate: '2024-09-04',
            dndt: '4th Sep, 2024 9:30 AM - 5:30PM',
            pdfs: CyberSecurity
        },
        {
            title: 'AI for Business Leaders',
            subtitle: 'AI FUNDAMENTALS FOR BUSINESS LEADERS',
            description: 'Unlocking the Power of AI for Enterprise Success, Transformation, and Innovation',
            image: AI,
            startDate: '2024-09-12',
            endDate: '2024-09-12',
            dndt: '12th September 2024',
            pdfs: AiFundamentals

        },
        {
            title: 'SAP FICO Fundamentals',
            subtitle: 'SAP ERP Finance and Cost Controlling Module',
            description: 'Gain practical skills in financial accounting and controlling through hands-on exercises.',
            image: ERP,
            startDate: '2024-08-23',
            endDate: '2024-08-24',
            dndt: '23rd & 24th August 2024 10:00 AM - 5:00 PM ',
            pdfs: SAPerp

        },
        {
            title: 'SAP Analytics Bootcamp',
            subtitle: 'Bootcamp For: SAP Analytics Cloud (SAC)',
            description: 'Unlock the power of data with expert, hands-on training in SAP Analytics Cloud.',
            image: SAC,
            startDate: '2024-09-06',
            endDate: '2024-09-07',
            dndt: '6th & 7th Sept 2024 10:00 am to 5:00 pm ',
            pdfs: SAPanalytics

        },
        {
            title: 'SAP MM Bootcamp',
            subtitle: 'Boot Camp For: SAP Material Management (MM)',
            description: 'Master procurement and inventory management through expert training in SAP MM.',
            image: Material,
            startDate: '2024-08-23',
            endDate: '2024-08-24',
            dndt: '23rd & 24th August 2024 10:00 am to 5:00 pm',
            pdfs: SAPmaterial

        },
    ];

    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    
    const handleScrollToTrainings = () => {
        const element = document.getElementById('trainings');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleLearnMoreClick = (pdfUrl) => {
        return (
            window.open(pdfUrl, '_blank')
        );
    };

    const getUpcomingTrainings = () => {
        const today = new Date();
        const sortedTrainings = future_Card_Data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        return sortedTrainings.filter(training => new Date(training.startDate) >= today).slice(0, 2);
    };

    const getFutureTrainings = () => {
        const today = new Date();
        const sortedTrainings = future_Card_Data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        return sortedTrainings.filter(training => new Date(training.startDate) > today).slice(2);
    };

    const upcomingTrainings = getUpcomingTrainings();
    const futureTrainings = getFutureTrainings();



    return (
        <>
            <TopNavbar />

            <div className={`${bgF7FDE8} container-fluid py-5`}>
                <div className="row px-4">
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-left text-center text-md-left">
                        <h1 className='my-3'>AshreiTech has industry renowned names as training partners, covering all your tech training needs!</h1>
                        <p className={`${p_color}`}>We understand the unique needs of every organization. That's why we offer customized
                            corporate tech training programs designed to help companies upskill their employees,
                            fostering growth and maintaining a competitive edge in the ever-evolving digital landscape.</p>
                        <p className={`${p_color}`}>AshreiTech is always open to collaborations with training partners interested in jointly
                            developing courses and providing skilled instructors.</p>
                        <div><button className='slider_btn' onClick={handleScrollToTrainings}>View Workshops</button></div>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end  align-items-center">
                        <img src={cp_header} alt="" style={{ width: '80%', height: 'auto' }} />
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0 px-md-4 mb-5">
                <div className={`${gradientCircleRow} row mt-3 mb-4 px-3 ml-1`}>
                    <div className={`${gradientCircle} d-none d-md-block`}></div>
                    <div className="col-12">
                        <h2 className={`${generic_heading_left} text-center text-md-left`}>Upcoming Trainings</h2>
                    </div>
                </div>
                {upcomingTrainings.map((training, index) => (
                    <div className='px-5 py-4' key={index}>
                        <div className={`${index % 2 === 0 ? style.training_container : style.training_container_white} row p-3`}>
                            <div className="col-sm-12 col-md-4 p-3">
                                <img src={training.image} alt="" className={`${style.training_container_img}`} />
                            </div>
                            <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-left flex-column text-center text-md-left">
                                <div>
                                    <h2>{training.title} - {training.subtitle}</h2>
                                    <h2 className='mt-3 d-none'>{training.subtitle}</h2>
                                    <p className='mt-3'>{training.description}</p>
                                    <div className='mt-3 d-flex flex-md-row flex-column justify-content-between align-items-center'>
                                        <button className={`${index % 2 === 0 ? style.future_training_btn : style.card_style} p-2`} onClick={() => handleLearnMoreClick(training.pdfs)}>Learn more</button>
                                        <div className={`${index % 2 === 0 ? rectangle_box : rectangle_boxOne} px-3 py-2 col-12 col-md-5 mb-2`}>
                                            {training.dndt}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className={`${gradientCircleLeftcontainer} row px-5 d-flex justify-content-center align-items-center `} id="trainings">
                    <div className={`${gradientCircleLeft} d-none d-md-block`}></div>
                    <div className="col-12 d-none">
                        <h1 className={`${generic_heading_center} text-center text-md-left `}>Future Trainings</h1>
                    </div>
                    <div className='mt-5 row d-flex justify-content-center align-items-center flex-column flex-md-row text-center text-md-left'>
                        {futureTrainings.map((training, index) => (
                            <div className="col-md-3 col-sm-12 mb-4" key={index}>
                                <div className={`${card} card`}>
                                    <img className="card-img-top " src={training.image} alt="Card image cap" style={{ width: '100%', height: '200px' }} />
                                    <div className="card-body">
                                        <div className={`${card_style} p-1 pl-2 mb-2 font-12`} style={{ fontSize: '10px' }}>{training.dndt}</div>
                                        <h5 className="card-title">{training.title}</h5>
                                        <p className="card-text">{training.description}</p>
                                        <button className={`${card_style} p-1 px-2 mt-2`} onClick={() => handleLearnMoreClick(training.pdfs)}>View More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
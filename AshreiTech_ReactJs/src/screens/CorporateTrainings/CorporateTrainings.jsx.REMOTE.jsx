import React from 'react'
import TopNavbar from '../../components/Nav/TopNavbar'
import Footer from '../../components/Sections/Footer/Footer'
import cp_header from '../../assets/CorporateTraining/CP_Header.png'
import style from "./CorporateTrainings.module.css"
import future_training from "../../assets/CorporateTraining/future_training.png"
import orange_card from '../../assets/CorporateTraining/orange_card.png'
import green_card from '../../assets/CorporateTraining/green_card .png'

export default function CorporateTrainings() {
    const { generic_heading_left, generic_heading_center, training_container, training_container_img, future_training_btn, training_container_white, card_style } = style;
    const training_Card_Data = [
        {
            title: 'Ariba Procurement',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: orange_card
        },
        {
            title: 'Another Training',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: orange_card
        },
        {
            title: 'Another Training',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: orange_card
        },
        {
            title: 'Another Training',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: orange_card
        },
        {
            title: 'Another Training',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: green_card
        },
        {
            title: 'Another Training',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: green_card
        },
        {
            title: 'Another Training',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: green_card
        },
        {
            title: 'Another Training',
            description: 'Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.',
            image: green_card
        },
    ];
    return (
        <>
            <TopNavbar />
            
            <div className="container-fluid px-0 px-md-4 mb-5">
                <div className="row px-4">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-left text-center text-md-left">
                        <h4 className='mb-3'>For the last 3 Years</h4>
                        <h1 className='my-3'>AshreiTech has been at the center of your training needs</h1>
                        <p >Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                        <div><button className='slider_btn'>AshreiTech Academy</button></div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end  align-items-center">
                        <img src={cp_header} alt="" style={{ width: '80%', height: 'auto' }} />
                    </div>
                </div>
                <div className="row mt-3 mb-5 px-4">
                    <div className="col-12">
                        <h1 className={`${generic_heading_left} text-center text-md-left`}>Future Trainings</h1>
                    </div>
                </div>
                <div className='px-5 py-4'>
                    <div className={`${training_container} row pb-3 pb-md-0 `}>
                        <div className="col-sm-12 col-md-4 p-3">
                            <img src={future_training} alt="" className={`${training_container_img}`} />
                        </div>
                        <div className="col-sm-12 col-md-8  d-flex justify-content-center align-items-center flex-column text-center text-md-left">
                            <div>
                                <h1>APICS - Certified In Logistics, Transportation &
                                    Distribution</h1>
                                <p className='mt-3'>Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                                <div className='mt-3'><button className={`${future_training_btn} p-2`}>Learn more</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-4">
                    <div className={`${training_container_white} row pb-3 pb-md-0`}>
                        <div className="col-sm-12 col-md-4 p-3">
                            <img src={future_training} alt="" className={`${training_container_img}`} />
                        </div>
                        <div className="col-sm-12 col-md-8 d-flex justify-content-center align-items-center flex-column text-center text-md-left">
                            <div>
                                <h1>APICS - Certified In Logistics, Transportation &
                                    Distribution</h1>
                                <p className='mt-3'>Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                                <div className='mt-3'><button className={`${card_style} p-2`}>Learn more</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-5 py-4 d-flex justify-content-center align-items-center ">
                    <div className="col-12">
                        <h1 className={`${generic_heading_center} text-center text-md-left`}>Past Trainings</h1>
                    </div>
                    <div className='mt-5 row d-flex justify-content-center align-items-center flex-column flex-md-row text-center text-md-left'>
                        {training_Card_Data.map((training, index) => (
                            <div className="col-md-3 col-sm-12 mb-4" key={index}>
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={training.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{training.title}</h5>
                                        <p className="card-text">{training.description}</p>
                                        <button className={`${card_style} p-1 px-2 mt-2`}>View More</button>
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

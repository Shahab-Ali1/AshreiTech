import React from 'react';
import style from './style.module.css';
import Usman from '../../assets/Usman.png'
import Abdullah from '../../assets/abdullah.png'

const OurTrainer = () => {
    const { TrainerContainer } = style;

    return (
        <div className={`${TrainerContainer}`}>
            <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                    <h1>Nurturing Potential: Our Trainers Cultivate Students Excellence</h1>
                    <p>
                        500+ Counselors with 20+ years of experience in <br /> our team who have helped 1 Million+ students to <br /> kick start their Career Journey.
                    </p>
                </div>
                <div className="col-6 d-flex justify content-center align-items-center">
                    <div className="p-5 m-2" style={{ width: '18rem', borderRadius: '16px', border: '1px solid #FDD8A3' }}>
                        <img src={Usman} className="card-img-top" alt="..." />
                        <div className='text-center'>
                            <h5>Muhammad Usman</h5>
                            <p style={{ fontSize: '14px ' }}>Associate SAP Consultant</p>
                            <i class="fab fa-linkedin mr-2 fa-2x"></i>
                        </div>
                    </div>
                    <div className="p-5 m-2" style={{ width: '18rem', borderRadius: '16px', border: '1px solid #FDD8A3' }}>
                        <img src={Abdullah} className="card-img-top" alt="..." />
                        <div className='text-center'> <h5>Muhammad Usman</h5>
                            <p style={{ fontSize: '14px ' }}>Associate SAP Consultant</p>
                            <i class="fab fa-linkedin mr-2 fa-2x"></i></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurTrainer;

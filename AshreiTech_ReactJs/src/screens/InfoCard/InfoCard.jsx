import React, { useState } from 'react';
import style from "./style.module.css";
import vector1 from '../../assets/Vector1.png';
import vector2 from '../../assets/Vector2.png';
import vector3 from '../../assets/Vector3.png';
import vector4 from '../../assets/Vector4.png';
import vector5 from '../../assets/Vector5.png';
import Countup from "react-countup"
import ScrollTrigger from 'react-scroll-trigger';

const InfoCard = () => {
    const { Info_container, vector, gradientCircle, gradientCircleLeft } = style;
    const [counter, setCounter] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            <div className=''>
                <div className={`${Info_container}  p-1 mt-5 mx-lg-5`}>
                    <div className={`${gradientCircleLeft} d-none d-lg-block`}></div>
                    <div className="row d-flex justify-content-center align-items-center  pt-4">
                        <div className="col-12 col-md-3 col-lg-2 d-flex align-items-center justify-content-center mb-3">
                            <div>
                                <img src={vector4} className={`${vector} mr-2`} style={{ width: '44px', height: '44px' }} alt="Students" />
                            </div>
                            <div>
                                <h6 style={{ fontWeight: '' }}>Students</h6>
                                {counter &&
                                    <h6 style={{ fontWeight: 'bold' }}> <Countup
                                        start={0}
                                        end={95}
                                    ></Countup>+</h6>
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2 d-flex align-items-center justify-content-center mb-3">
                            <div>
                                <img src={vector1} className={`${vector} mr-2`} style={{ width: '44px', height: '44px' }} alt="Trainer" />
                            </div>
                            <div>
                                <h6 style={{ fontWeight: '' }}>Courses</h6>
                                {counter &&
                                    <h6 style={{ fontWeight: 'bold' }}>
                                        <Countup
                                            start={0}
                                            end={18}
                                        ></Countup>+</h6>
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2 d-flex align-items-center justify-content-center mb-3">
                            <div>
                                <img src={vector5} className={`${vector} mr-2`} style={{ width: '44px', height: '44px' }} alt="Employees" />
                            </div>
                            <div>
                                <h6 style={{ fontWeight: '' }}>International Certifications</h6>
                                {counter &&
                                    <h6 style={{ fontWeight: 'bold' }}>
                                        <Countup
                                            start={0}
                                            end={100}
                                        ></Countup>+</h6>
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2 d-flex align-items-center justify-content-center mb-3">
                            <div>
                                <img src={vector3} className={`${vector} mr-2`} style={{ width: '52px', height: '44px' }} alt="Alumni" />
                            </div>
                            <div>
                                <h6 style={{ fontWeight: '', position: "relative", zIndex: 1 }}>Alumni</h6>
                                {counter &&
                                    <h6 style={{ fontWeight: 'bold', position: "relative", zIndex: 1 }}>
                                        <Countup
                                            start={0}
                                            end={100}
                                        ></Countup>+</h6>
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-3 col-lg-2  align-items-center justify-content-center mb-3 d-none d-lg-flex">
                            <div>
                                <img src={vector2} className={`${vector} mr-2`} style={{ width: '44px', height: '44px' }} alt="Cities" />
                            </div>
                            <div>
                                <h6 style={{ fontWeight: '', position: "relative", zIndex: 1 }}>Cities</h6>
                                {counter &&
                                    <h6 style={{ fontWeight: 'bold', position: "relative", zIndex: 1 }}>
                                        <Countup
                                            start={0}
                                            end={3}
                                        ></Countup>+
                                    </h6>
                                }
                            </div>
                        </div>
                    </div>
                    {/* Circle with Gradient */}
                    <div className={`${gradientCircle} d-none d-lg-block `}></div>
                </div>
            </div>
        </ScrollTrigger>
    );
}

export default InfoCard;

import React, { useState } from 'react';
import style from "./style.module.css";
import Countup from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const InfoCard = (props) => {
    const { Info_container, vector, gradientCircle, item } = style;
    const [counter, setCounter] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            <div className={`${Info_container} p-1 mt-5 mx-0 mx-lg-5`}>
                <div className={`d-flex  ${props?.data?.length === 4 ? 'px-5 justify-content-between' : 'flex-wrap justify-content-center'} align-items-center pt-4`}>
                    {props?.data?.map(({ image, heading, discription }, index) => {
                        const updatedDescription = parseInt(discription.replace(/[K+]/g, ''), 10);
                        return (
                            <div key={index} className={`${item} ${props?.data?.length === 4 ? '' : 'col-6 col-md-3 col-lg-2'} d-flex flex-column flex-lg-row align-items-center justify-content-center mb-3 text-center text-lg-left`}>
                                <div>
                                    <img src={image} className={`${vector} mr-2`} style={{ width: '65%' }} alt="Students" />
                                </div>
                                <div className='ml-n3'>
                                    <h6>{heading}</h6>
                                    {!props.count && <h6 style={{ fontWeight: 'bold' }}>{discription}</h6>}
                                    {props.count && counter &&
                                        <h6 style={{ fontWeight: 'bold' }}>
                                            <Countup start={0} end={updatedDescription} />+
                                        </h6>
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>
                {props?.gradient !== false && <div className={`${gradientCircle} d-none d-lg-block`}></div>}
            </div>
        </ScrollTrigger>
    );
};

export default InfoCard;

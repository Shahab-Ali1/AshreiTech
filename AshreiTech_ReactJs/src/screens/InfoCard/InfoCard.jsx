import React from 'react';
import style from "./style.module.css";
import vector1 from '../../assets/Vector1.png';
import vector2 from '../../assets/Vector2.png';
import vector3 from '../../assets/Vector3.png';
import vector4 from '../../assets/Vector4.png';
import vector5 from '../../assets/Vector5.png';

const InfoCard = () => {
    const { Info_container, vector, gradientCircle } = style;

    return (
        <div className={`${Info_container} container p-4 mt-5`} >
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2 d-flex align-items-center">
                    <div >
                        <img src={vector4} className={`${''} mr-2`} alt="" srcSet="" />
                    </div>
                    <div >
                        <h6>Students</h6>
                        <h5>10K+</h5>
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <div className="">
                        <img src={vector1} className={`${''} mr-2`} alt="" srcSet="" />
                    </div>
                    <div className="">
                        <h6>Trainer</h6>
                        <h5>100+</h5>
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <div className="">
                        <img src={vector5} className={`${''} mr-2`} alt="" srcSet="" />
                    </div>
                    <div className="">
                        <h6>Employees</h6>
                        <h5>500+</h5>
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <div className="">
                        <img src={vector3} className={`${''} mr-2`}  alt="" srcSet="" />
                    </div>
                    <div className="">
                        <h6>Alumni</h6>
                        <h5>100+</h5>
                    </div>
                </div>
                <div className=" col-2 d-flex align-items-center">
                    <div className="">
                        <img src={vector2} className={`${vector5} mr-2`} alt="" srcSet="" />
                    </div>
                    <div className="">
                        <h6>Cities</h6>
                        <h5>5+</h5>
                    </div>
                </div>
                <div className="col-1 |"></div>
            </div>



            {/* Circle with Gradient */}
            <div className={`${gradientCircle}`}></div>
        </div>
    );
}

export default InfoCard;

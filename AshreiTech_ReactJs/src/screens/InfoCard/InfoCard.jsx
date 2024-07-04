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
        <div className={`${Info_container} container p-1 mt-5`}>
            <div className="row d-flex justify-content-center align-items-center pl-5 ml-3 pt-4">
                <div className="col-6 col-md-3 col-lg-2 d-flex align-items-center mb-3">
                    <div>
                        <img src={vector4} className={`${vector} mr-2`} style={{width:'44px', height:'44px'}} alt="Students" />
                    </div>
                    <div>
                        <h6>Students</h6>
                        <h5>10K+</h5>
                    </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 d-flex align-items-center mb-3">
                    <div>
                        <img src={vector1} className={`${vector} mr-2`} style={{width:'44px', height:'44px'}} alt="Trainer" />
                    </div>
                    <div>
                        <h6>Trainer</h6>
                        <h5>100+</h5>
                    </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 d-flex align-items-center mb-3">
                    <div>
                        <img src={vector5} className={`${vector} mr-2`} style={{width:'44px', height:'44px'}} alt="Employees" />
                    </div>
                    <div>
                        <h6>Employees</h6>
                        <h5>500+</h5>
                    </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 d-flex align-items-center mb-3">
                    <div>
                        <img src={vector3} className={`${vector} mr-2`} style={{width:'52px', height:'44px'}} alt="Alumni" />
                    </div>
                    <div>
                        <h6>Alumni</h6>
                        <h5>100+</h5>
                    </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2 d-flex align-items-center mb-3">
                    <div>
                        <img src={vector2} className={`${vector} mr-2`} style={{width:'44px', height:'44px'}} alt="Cities" />
                    </div>
                    <div>
                        <h6>Cities</h6>
                        <h5>5+</h5>
                    </div>
                </div>
            </div>
            {/* Circle with Gradient */}
            <div className={`${gradientCircle}`}></div>
        </div>
    );
}

export default InfoCard;

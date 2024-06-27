import React from 'react'
import style from "./style.module.css"
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/Vector2.png'
import vector3 from '../../assets/Vector3.png'
import vector4 from '../../assets/Vector4.png'
import vector5 from '../../assets/Vector5.png'

const InfoCard = () => {
    const { Info_container, vector } = style
    return (
        <div className={`${Info_container}`}>
            <div className="col">
                <div className="d-flex">
                    <div className="">
                        <img src={vector4} className={`${vector} mr-2`} alt="" srcset="" />
                    </div>
                    <div className="">
                        <h4>Students</h4>
                        <h3>10K+</h3>
                    </div>
                </div>

            </div>
            <div className="col">
                <div className="d-flex">
                    <div className="">
                        <img src={vector1} className={`${vector} mr-2`} alt="" srcset="" />
                    </div>
                    <div className="">
                        <h4>Trainer</h4>
                        <h3>100+</h3>
                    </div>
                </div>

            </div><div className="col">
                <div className="d-flex">
                    <div className="">
                        <img src={vector5} className={`${vector} mr-2`} alt="" srcset="" />
                    </div>
                    <div className="">
                        <h4>Employees</h4>
                        <h3>500+</h3>
                    </div>
                </div>

            </div><div className="col">
                <div className="d-flex">
                    <div className="">
                        <img src={vector3} className={`${vector} mr-2`} style={{height:'54px',width:"71px"}} alt="" srcset="" />
                    </div>
                    <div className="">
                        <h4>Alumini</h4>
                        <h3>100+</h3>
                    </div>
                </div>

            </div><div className="col">
                <div className="d-flex">
                    <div className="">
                        <img src={vector2} className={`${vector} mr-2`} alt="" srcset="" />
                    </div>
                    <div className="">
                        <h4>Cities</h4>
                        <h3>5+</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard
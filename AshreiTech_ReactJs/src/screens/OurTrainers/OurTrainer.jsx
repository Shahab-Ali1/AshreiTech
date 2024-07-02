import React from 'react'
import style from "./style.module.css";


const OurTrainer = () => {
    const { TrainerContainer } = style;
  return (
   <>
   <div  className={`${TrainerContainer}`}>
    <div className="row">
        <div className="col-6">
            <h1>Nurturing Potential: Our Trainers Cultivate Students Excellence</h1>
            <p>500+ Counselors with 20+ years of experience in <br /> our team who have helped 1 Million+ students to <br />kick start their Career Journey.</p>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
            
        </div>
    </div>
   </div>
   </>
  )
}

export default OurTrainer
import React from 'react'
import CurrentstudentsImage from "../../assets/CurrentstudentsImage.png"
import style from "./style.module.css"
import TestimonialSlider from '../../components/Elements/TestimonialSlider'

const Currentstudents = () => {
  const {heading,current_student_image}=style
  return (
    <div>
      <div className=" row justify-content-center m-auto" style={{width:"50%",}}>

        <h1 className={`font45 text-center  w-75  mt-5`}> Transforming Students into<span className='' style={{color:'#008F71'}}> professionals</span></h1>
      </div>
        <div className="mt-5 w-100">
          <img src={CurrentstudentsImage}  className={`${current_student_image}`}alt="" />
        </div>

    
    <div className="lightBg" style={{ padding: '50px 0' }}>
      <div className="" style={{ padding: '0 25px' }} >
          <h1 className="font40 mb-5 extraBold text-center generic_heading">Turning Goals Into  <span style={{color:'#008F71'}}>Wins!</span></h1>
        <TestimonialSlider />
      </div>
    </div>
    </div>
  )
}

export default Currentstudents
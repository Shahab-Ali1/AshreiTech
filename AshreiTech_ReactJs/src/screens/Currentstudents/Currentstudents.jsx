import React from 'react'
import CurrentstudentsImage from "../../assets/CurrentstudentsImage.png"
import style from "./style.module.css"
import TestimonialSlider from '../../components/Elements/TestimonialSlider'
import bg4 from '../../assets/bg4.png'


const Currentstudents = () => {
  const { current_student_image } = style
  return (
    <>
      <div style={{backgroundImage: `url(${bg4})`}}>
        <div className='container' >

          <div className="w-100 pb-4">
            <h1 className="text-center  mt-5" style={{ fontSize: '40px' }}> <span style={{ color: '#000000' }}>Transforming Students Into</span> </h1>
            <div className='text-center  generic_heading mt-5'> <span style={{ color: '#008F71' }}>Professionals</span></div>
          </div>

          <div className="mt-5 w-100">
            <img src={CurrentstudentsImage} className={`${current_student_image}`} alt="" />
          </div>


          <div className="lightBg col-12 mt-5 py-5 ">
            <h1 className=" text-center generic_heading "> <span style={{ color: '#000000' }}>Turning Goals Into </span> <span style={{ color: '#008F71' }}>&nbsp;Wins!</span></h1>
            <TestimonialSlider />
          </div>

        </div>
      </div>
    </>
  )
}

export default Currentstudents
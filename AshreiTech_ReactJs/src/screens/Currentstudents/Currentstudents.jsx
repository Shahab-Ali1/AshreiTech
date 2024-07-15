import React from 'react'
import CurrentstudentsImage from "../../assets/CurrentstudentsImage.png"
import style from "./style.module.css"
import TestimonialSlider from '../../components/Elements/TestimonialSlider'
import bg4 from '../../assets/bg4.png'
import transformingbg from "../../assets/turningbg.png"


const Currentstudents = () => {
  const { current_student_image } = style
  return (
    <>
    <div className="container-fluid"
    style={{
      backgroundImage: `url(${transformingbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: 0,
        position:'relative'
    }}
    >

      <div style={{backgroundImage: `url(${bg4})`,position:"relative"}}>
        <div className='containe mx-lg-5'  >

          <div className="w-100 pb-4">
            <h1 className="text-center  mt-5" style={{ fontSize: '40px' }}> <span style={{ color: '#000000' }}>Transforming Students Into</span> </h1>
            <div className='text-center  generic_heading mt-5'> <span style={{ color: '#008F71' }}>Professionals</span></div>
          </div>

          <div className="mt-5 w-100">
            <img src={CurrentstudentsImage} className={`${current_student_image}`} alt="" />
          </div>


          <div className=" col-12 mt-5 py-3 ">
            <h1 className=" text-center generic_heading "> <span style={{ color: '#000000' }}>Turning Goals Into </span> <span style={{ color: '#008F71' }}>&nbsp;Wins!</span></h1>
            <TestimonialSlider />
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Currentstudents
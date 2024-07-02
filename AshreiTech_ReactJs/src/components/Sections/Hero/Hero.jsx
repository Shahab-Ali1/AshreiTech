import React from 'react'
import style from "./style.module.css"
import Hero_banner from "../../../assets/Hero_banner.png"
const Hero = () => {
  const { box, custom_btn_outline_dark,Hero_image } = style
  return (
    <>
    <div className={`${box}`}>
      <div className="row">
        <div className="col d-flex pr-5" >
          <div className="row align-items-center" >
          <div className="">
            <h1 className="font40  mb-5">AshreiTech Academy - Empowering Your Tech Dreams</h1>
            <p className='font20' style={{ lineHeight: 2 }}>The Academy is meticulously designed to provide organizations and individuals with comprehensive training and instructions on the latest technology and industry best practices.  
            </p>
            <button type="button" class={`${custom_btn_outline_dark} mt-5`}>Learn More</button>
          </div>
          </div>
          
        </div>
        <div className="col">
          <div className="" >
            <img
              style={{ borderRadius: 50, width: "100%", height:"540px"}}
              src={Hero_banner}
              className={`${Hero_image}`}
              alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Hero
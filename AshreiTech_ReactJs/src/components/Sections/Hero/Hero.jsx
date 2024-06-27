import React from 'react'
import style from "./style.module.css"
import Hero_banner from "../../../assets/Hero_banner.png"
const Hero = () => {
  const { box, custom_btn_outline_dark } = style
  return (
    <div className={`${box}`}>
      <div className="row">
        <div className="col d-flex" >
          <div className="row align-items-center" >
          <div className="">
            <h1 className="font40 extraBold mb-5">AshreiTech Academy - Empowering Your Tech Dreams</h1>
            <p className='font20' style={{ lineHeight: 2 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries.</p>
            <button type="button" class={`${custom_btn_outline_dark} mt-5`}>Learn More</button>
          </div>
          </div>
          
        </div>
        <div className="col">
          <div className="" >
            <img
              style={{ borderRadius: 50, width: "100%", height:"700px"}}
              src={Hero_banner}
              alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
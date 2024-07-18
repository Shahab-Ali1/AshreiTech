import React from 'react'
import style from "./style.module.css"
import Hero_banner from "../../../assets/Hero_banner.png"
import herobg from "../../../assets/herobg.png"
import herovideo from "../../../assets/video/herovideo.mp4"

const Hero = () => {
  const { box, custom_btn_outline_dark, Hero_image } = style
  return (
    <>
      <div className="container-fluid" style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: 0,
      }}>
        <div className='mx-lg-5  p-4' style={{ backgroundColor: '#5A8C75', padding: '60px', borderRadius: '50px', position: "relative", zIndex: 1, marginTop: 35 }}>
          <div className="row p-lg-5 p-3 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 mt-md-5 d-flex align-items-center text-center text-md-left" style={{ paddingRight: 68 }}>
              <div className="row " >
                <div className="">
                  <h1 className="text-white">AshreiTech Academy Empowering Your Tech Dreams! </h1>
                  <p className=' text-white my-2  pr-5' style={{ lineHeight: 2 }}>The Academy is meticulously designed to provide organizations and individuals with comprehensive training and instructions on the latest technology and industry best practices.  
                  </p>
                  <button type="button" class={`${custom_btn_outline_dark} mt-lg-4 mt-3 mb-5 px-4`}>Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <video autoPlay loop muted style={{ width: "100%", height: "100%", borderRadius:'50px' }}>
                <source src={herovideo} type="video/mp4" style={{ width: "100%", height: "auto" }} />
                Your Browser Does Not Support The Video Tag.
              </video>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Hero
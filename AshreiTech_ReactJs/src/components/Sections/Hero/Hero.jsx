import React from 'react'
import style from "./style.module.css"
import Hero_banner from "../../../assets/Hero_banner.png"
const Hero = () => {
  const { box ,custom_btn_outline_dark} = style
  return (
    <div className={`${box}`}>
      <div className="row">
        <div className="col" style={{paddingRight:200}}>
          <h1 className="font40 extraBold mb-5">Welcome to AshreiTech Academy – Pakistan’s Leading Tech Academy!</h1>

          <p className='font20' style={{ lineHeight: 2 }}>Ignite your tech passion with our cutting-edge programs, expertly designed to fuse vital technical and soft skills. Whether you're aiming for a global career or advancing your current path, our academy provides the perfect launchpad. Gain a competitive edge with opportunities for international certifications that elevate your professional profile. Dive into a world of innovation and collaboration, where endless possibilities await.
            <br />
            <br />
            Begin your journey to a tech-centric future right here at AshreiTech Academy @ NASTP.</p>

          <button type="button" class={`${custom_btn_outline_dark} mt-5`}>Learn More</button>
        </div>
        <div className="col">
          <div className="" >
            <img
              style={{ borderRadius: 50, width: "100%", height: "700px" }}
              src={Hero_banner}
      alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
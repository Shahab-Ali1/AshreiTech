import React from 'react'
import style from "./style.module.css"
import AshrieTechWhiteLogo from "../../../assets/AshrieTechWhiteLogo.png"

const Footer = () => {
    const {footer_container}=style
  return (
    <div className={`${footer_container}`}> 
   <div className="row">
    <div className="col-4">
        <img src={AshrieTechWhiteLogo} alt="" />
        <p className='w-75 mt-4'>
        To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!
        </p>
    </div>
    <div className="col-2">

    <h3 className="font18 mb-4 extraBold">Company</h3>

    <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Teacher</li>
            <li>Review</li>
            <li>Contact</li>
        </ul>
    </div>
    <div className="col-2">
    <h3 className="font18 mb-4 extraBold">Social Media</h3>

    <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            
        </ul>
    </div>
    <div className="col-2">
    <h3 className="font18 mb-4 extraBold">Legal</h3>

    <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Licenses</li>
            <li>Security</li>
            
        </ul>
    </div>
    <div className="col-2">
    <h3 className="font18 mb-4 extraBold">Contact</h3>

    <ul>
            <li>Info@ashreitech.com</li>
            <li>1545 Torp Keys, </li>
            <li>Memphis, MO 38119, </li>
            <li>United States</li>
            
        </ul>
    </div>
   </div>
  <div className="">
  <hr style={{color:"white",background:"white"}}/>
   <div className="copyright">
   <h3 className="font18 mb-4 extraBold  text-center">   © Copyright ASHREITECH 2024
   </h3>
   </div>
  </div>
    </div>
  )
}

export default Footer
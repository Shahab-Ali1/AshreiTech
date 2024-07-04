import React from 'react'
import style from "./style.module.css"
import AshrieTechWhiteLogo from "../../../assets/AshrieTechWhiteLogo.png"
import sponser2 from "../../../assets/sponser2.png"
import sponser3 from "../../../assets/sponser3.png"
import sponser4 from "../../../assets/sponser4.png"
import styled from "styled-components";


const Footer = () => {
    const { footer_container, containerOne, containerOnePiece, containerTwo, containerTwoPiece } = style
    return (
        <div className={`${footer_container} footer_container`}>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div className='pb-5 mb-5'> <img src={AshrieTechWhiteLogo} alt="" /></div>
                    <div className="row">
                        <div className="col-4">
                            <ul>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Home</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'> About</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Service</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Teacher</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Review</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Contact</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Terms of Services</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Privacy Policy</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Licenses</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Security</li>

                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'><i class="fab fa-facebook mr-2 " style={{ color: 'white' }}></i>Facebook</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'><i class="fab fa-x-twitter mr-2 " style={{ color: 'white' }}></i>Twitter</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'><i class="fab fa-instagram mr-2 " style={{ color: 'white' }}></i>Instagram</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'><i class="fab fa-linkedin mr-2 " style={{ color: 'white' }}></i>Linkedin</li >

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 d-flex flex-column justify-content-center align-items-center">
                    <div className={`${containerOne} `}>
                        <h5>GET INSHIGHTS FROM OUR BLOG</h5>
                        <div className="row pt-2 d-flex justify-content-between align-items-center ">
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                        </div>
                        <div className="row pt-2 d-flex justify-content-between align-items-center ">
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                            <div className={`${containerOnePiece} col-2 `}>Academic</div>
                        </div>
                    </div>
                    <div className={`${containerTwo} `}>
                        <h5>PROUD MEMBERS OF</h5>
                        <div className="row  pt-4 d-flex justify-content-between align-items-center ">
                            <div className={`${containerTwoPiece} col-4`}><img src={sponser2} className='img-fluid' alt="" /></div>
                            <div className={`${containerTwoPiece} col-4`}><img src={sponser3} className='img-fluid' alt="" /></div>
                            <div className={`${containerTwoPiece} col-4 mt-2 pt-4`}><img src={sponser4} className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                </div>


                {/* <div className="col-4">
                    <img src={AshrieTechWhiteLogo} alt="" />
                    <p className='w-75 mt-4'>
                        To find out more about our services and how we can assist you in utilizing technology to spur growth and innovation, get in touch with us right away!
                    </p>
                </div> */}
                {/* <div className="col-2">

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
                        <li><i class="fab fa-facebook mr-2"></i>Facebook</li>
                        <li><i class="fab fa-x-twitter mr-2"></i>Twitter</li>
                        <li><i class="fab fa-instagram mr-2"></i>Instagram</li>
                        <li><i class="fab fa-linkedin mr-2"></i>Linkedin</li>

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
                </div> */}
            </div>
            <div className="">
                <hr style={{ color: "white", background: "white" }} />
                <div className="container my-3">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-sm-8 ">
                            COMPLIANCE PRIVACY TERMS TRADEMARK
                        </div>
                        <div className="col-12 col-sm-4">
                            <li style={{ listStyle: 'none' }}><i class="fa-solid fa-circle mr-2" style={{ color: '#00FFCA' }}></i> All System Operational  &nbsp; &nbsp; 2024 ASHRIETECH</li>
                        </div>
                    </div>
                </div>
                {/* <div className="copyright">
                    <h3 className="font18 mb-4 extraBold  text-center">   © Copyright ASHREITECH 2024
                    </h3>
                </div> */}
            </div>
        </div>
    )
}

export default Footer

const footer_container = styled.div`
  .liClass{
  margin-bottom: 20px;
  }
`;
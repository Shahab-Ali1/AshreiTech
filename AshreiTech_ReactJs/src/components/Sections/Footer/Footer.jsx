import React from 'react'
import style from "./style.module.css"
import AshrieTechWhiteLogo from "../../../assets/AshrieTechWhiteLogo.png"   
import styled from "styled-components";
import eduman from "../../../assets/eduMan.webp"


const Footer = () => {
    const { footer_container, containerOne, containerOnePiece, containerTwo, containerTwoPiece } = style
    return (
        <div className={`${footer_container}`}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className='pb-4 mb-4 pt-1 d-flex justify-content-center justify-content-lg-start'>
                        <img src={AshrieTechWhiteLogo} alt="" className='pt-5 pt-lg-0' />
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <ul>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>Home</li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>About</li>
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
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>
                                    <i className="fab fa-facebook mr-2" style={{ color: 'white' }}></i>Facebook
                                </li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>
                                    <i className="fab fa-twitter mr-2" style={{ color: 'white' }}></i>Twitter
                                </li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>
                                    <i className="fab fa-instagram mr-2" style={{ color: 'white' }}></i>Instagram
                                </li>
                                <li style={{ color: '#DBDBDB' }} className='pb-3'>
                                    <i className="fab fa-linkedin mr-2" style={{ color: 'white' }}></i>LinkedIn
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                    <div className={`${containerOne}`}>
                        <h5 className='text-center text-md-left'>GET INSIGHTS FROM OUR BLOG</h5>
                        <div className="row pt-2 d-flex justify-content-between align-items-center">
                            <div className={`${containerOnePiece} col-lg-2 col-md-4 col-sm-12`}>Academic</div>
                            <div className={`${containerOnePiece} col-lg-2 col-md-4 col-sm-12`}>Academic</div>
                            <div className={`${containerOnePiece} col-lg-2 col-md-4 col-sm-12`}>Academic</div>
                            <div className={`${containerOnePiece} col-lg-2 col-md-4 col-sm-12`}>Academic</div>
                        </div>
                        <div className="row pt-2 justify-content-between align-items-center d-none   d-lg-flex ">
                            <div className={`${containerOnePiece} col-2`}>Academic</div>
                            <div className={`${containerOnePiece} col-2`}>Academic</div>
                            <div className={`${containerOnePiece} col-2`}>Academic</div>
                            <div className={`${containerOnePiece} col-2`}>Academic</div>
                        </div>
                    </div>
                    <div className={`${containerTwo} mt-4`}>
                        <h5 className='text-center text-md-left'>Developed By Edu-Man</h5>
                        <div className="row pt-4 d-flex justify-content-lg-start justify-content-center">
                            <div className={`${containerTwoPiece} col-6  mt-2 ml-1`}><img src={eduman} className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none">
                <hr style={{ color: "white", background: "white" }} />
                <div className="container my-3">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-sm-8 text-center text-md-left">
                            COMPLIANCE PRIVACY TERMS TRADEMARK
                        </div>
                        <div className="col-12 col-sm-4">
                            <li style={{ listStyle: 'none' }}>
                                <i className="fa-solid fa-circle mr-2" style={{ color: '#00FFCA' }}></i>
                                All System Operational &nbsp; 2024 ASHRIETECH
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

const FooterContainer = styled.div`
  .liClass {
    margin-bottom: 20px;
  }
`;

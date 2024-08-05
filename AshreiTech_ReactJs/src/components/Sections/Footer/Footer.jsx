import React from 'react';
import style from "./style.module.css";
import AshrieTechWhiteLogo from "../../../assets/AshrieTechWhiteLogo.svg";
import Minar from "../../../assets/minar.png";
import Map from "../../../assets/map.png";
import PhoneIcon from "../../../assets/PhoneIcon.png";
import pakistanIcon from "../../../assets/pakistanIcon.png";
import mosqueIcon from "../../../assets/mosqueIcon.png";
import wmap from "../../../assets/wmap.png";
import FedumanLogo from "../../../assets/FeduManLogo.png";
import GetitonIcon from '../../../assets/GetitonIcon.png';
import apple_playstore from "../../../assets/apple_playstore.png"

const Footer = () => {
    const { footer_container, containerOne, containerOnePiece, containerTwo } = style;
    return (
        <div className={`${footer_container} container-fluid  px-3 px-md-3 px-lg-5  pt-0 pt-md-5`}>
            <div className="row px-0 px-md-5 py-0 py-md-5 ">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="row pb-4 mb-4 pt-1 pl-0 pl-lg-3 d-flex justify-content-center justify-content-lg-start">
                        <img src={AshrieTechWhiteLogo} alt="AshrieTech Logo" className="pt-5 pt-lg-0" style={{ width: '40%', height: 'auto' }} />
                    </div>
                    <div className="row  justify-content-center justify-content-lg-start d-none d-md-flex">
                        <div className="mr-5 px-3">
                            <ul>
                                {["About the company", "About the team", "Book-A-Room", "Corporate Trainings"].map((item, index) => (
                                    <li key={index} className="pb-3 ">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mr-5 px-3">
                            <ul>
                                {["Get In Touch", "Partner With Us", "Insights", "What We Do",].map((item, index) => (
                                    <li key={index} className="pb-3">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mr-5 px-3">
                            <ul>
                                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
                                    <li key={index} className="pb-3">
                                        <i className={`fab fa-${platform.toLowerCase()} mr-3`} style={{ color: 'white' }}></i>
                                        {platform}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-lg-start  d-md-none">
                        <div className="col-4">
                            <ul>
                                {["About the company", "About the team", "Book-A-Room", "Corporate Trainings"].map((item, index) => (
                                    <li key={index} className="pb-3 ">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                {["Get In Touch", "Partner With Us", "Insights", "What We Do",].map((item, index) => (
                                    <li key={index} className="pb-3">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
                                    <li key={index} className="pb-3">
                                        <i className={`fab fa-${platform.toLowerCase()} mr-2 mr-lg-4`} style={{ color: 'white' }}></i>
                                        {platform}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 px-md-0"
                    style={{
                        backgroundImage: `url(${wmap})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: 'auto',

                    }}
                >
                    <div className='row'>
                        <div className='col-lg-12 mt-3 text-center text-md-left px-2'><h3>Our Branches</h3></div>
                    </div>
                    <div className="row p-0">
                        <div className="col-12 col-md-4 my-4">
                            <div className="row align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={Minar} alt="minar" className="" style={{ height: "31px" }} /></div>
                                <div className="col-10"><div>Lahore Branch</div></div>
                            </div>
                            <div className="row my-3 align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={Map} alt="Map" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>
                                NASTP Delta, 69 Abid Majeed Road (Old Airport Building).
                                </div></div>
                            </div>
                            <div className="row ">
                                <div className="col-2 d-flex justify-content-center align-items-center"><img src={PhoneIcon} alt="PhoneIcon" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>03004406163</div></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 my-4">
                            <div className="row align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={pakistanIcon} alt="minar" className="" style={{ height: "31px" }} /></div>
                                <div className="col-10 "><div>Karachi Branch</div></div>
                            </div>
                            <div className="row my-3 align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={Map} alt="Map" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div> NASTP Silicon, 2nd Floor,Main Shahrah e Faisal, Adj. PAF S&RC. </div></div>
                            </div>
                            <div className="row ">
                                <div className="col-2 d-flex justify-content-center align-items-center"><img src={PhoneIcon} alt="PhoneIcon" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>03332775771</div></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 my-4">
                            <div className="row align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={mosqueIcon} alt="minar" className="" style={{ height: "31px" }} /></div>
                                <div className="col-10"><div>Islamabad Branch</div></div>
                            </div>
                            <div className="row my-3 align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={Map} alt="Map" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>
                                NASTP Alpha, Main Terminal Complex, Chaklala Cantt.
                                </div></div>
                            </div>
                            <div className="row">
                                <div className="col-2 d-flex justify-content-center align-items-center"><img src={PhoneIcon} alt="PhoneIcon" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>03004406163</div></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid p-0 my-5 my-md-0">
                <div className="row p-0">
                    <div className="col-6 d-none d-md-block">
                    {/* <i class="fa-brands fa-google-play"></i> */}
                    <img src={GetitonIcon} alt="" srcset=""  style={{height:31 ,marginRight:16}}/>
                    <img src={apple_playstore} alt="" srcset=""  style={{height:31}}/>
                    </div>
                    <div className="col-12 col-md-6  d-flex justify-content-center justify-content-md-end align-items-center ">
                        <h3 className='text-center text-md-left d-flex flex-column flex-md-row justify-content-md-end align-items-center font15'>POWERED <br className='d-block d-md-none' /> BY <br className='d-block d-md-none' /><img src={FedumanLogo} alt="" className='mx-md-3 mx-0' style={{ width: '35%', height: 'auto' }} /> </h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0" >
                <hr style={{ color: "white", background: "white" }} className='container-fluid p-0' />
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-8 text-center text-md-left">
                        Copyright © 2024 AshreiTech
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-end">
                        <li style={{ listStyle: 'none' }}>
                            <i className="fa-solid fa-circle " style={{ color: '#00FFCA' }}></i>
                            All System Operational &nbsp; 2024 ASHRIETECH
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

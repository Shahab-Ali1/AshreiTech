import React from 'react';
import style from "./style.module.css";
import AshrieTechWhiteLogo from "../../../assets/AshrieTechWhiteLogo.svg";
import Minar from "../../../assets/minar.png";
import Map from "../../../assets/map.png";
import PhoneIcon from "../../../assets/PhoneIcon.png";
import pakistanIcon from "../../../assets/pakistanIcon.png";
import mosqueIcon from "../../../assets/mosqueIcon.png";
import FedumanLogo from "../../../assets/FeduManLogo.png";

const Footer = () => {
    const { footer_container, containerOne, containerOnePiece, containerTwo } = style;
    return (
        <div className={`${footer_container} container-fluid  px-3 px-md-5 pt-0 pt-md-5 `}>
            <div className="row px-0 px-md-5 py-0 py-md-5">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="row pb-4 mb-4 pt-1 pl-0 pl-lg-3 d-flex justify-content-center justify-content-lg-start">
                        <img src={AshrieTechWhiteLogo} alt="AshrieTech Logo" className="pt-5 pt-lg-0" style={{width:'60%', height:'auto'}}/>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-lg-start ">
                        <div className="col-3">
                            <ul>
                                {["Home", "About", "Service", "Teacher", "Review", "Contact"].map((item, index) => (
                                    <li key={index} style={{ color: '#DBDBDB' }} className="pb-3 ">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                {["Terms of Services", "Privacy Policy", "Licenses", "Security"].map((item, index) => (
                                    <li key={index} style={{ color: '#DBDBDB' }} className="pb-3">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
                                    <li key={index} style={{ color: '#DBDBDB' }} className="pb-3">
                                        <i className={`fab fa-${platform.toLowerCase()} mr-2`} style={{ color: 'white' }}></i>
                                        {platform}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center"> */}
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className='row'>
                        <div className='col-lg-12'><h3>Our Branches</h3></div>
                    </div>
                    <div className="row mt-5">
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={Minar} alt="minar" className="pt-5 pt-lg-0" style={{height: "35px"}} />
                                <span className='mt-3'> Lahore Branch </span>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={pakistanIcon} alt="pakistanIcon" className="pt-5 pt-lg-0" style={{height: "27px"}}/>
                                <span className='mt-1'>Karachi Branch</span>

                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={mosqueIcon} alt="mosqueIcon" className="pt-5 pt-lg-0" style={{height: "35"}}/>
                                <span className='mt-3'>Islamabad Branch</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className=" d-flex pb-3">
                                <img src={Map} alt="Map" className="pt-5 pt-lg-0" style={{ height: "27px" }} />
                                <span className='ml-2'>
                                    G99P+Q28, Cantt, Lahore,
                                    Punjab
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={Map} alt="Map" className="pt-5 pt-lg-0" style={{ height: "27px" }} />
                                <span className='ml-2'>
                                    NASTP Building, Main
                                    Shahrah-e-Faisal Rd,
                                    Faisal Cantonment,
                                    Karachi City, Sindh
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={Map} alt="Map" className="pt-5 pt-lg-0" style={{ height: "27px" }} />
                                <span className='ml-2'>
                                    J453+GPQ, Old Airport Rd,
                                    Chaklala Cantt., Rawalpindi,
                                    Punjab 46000
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={PhoneIcon} alt="PhoneIcon" className="pt-5 pt-lg-0" style={{ height: "23px" }} />
                                <span className='ml-2'>
                                    03004406163
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={PhoneIcon} alt="PhoneIcon" className="pt-5 pt-lg-0" style={{ height: "23px" }} />
                                <span className='ml-2'>
                                    03332775771
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex pb-3">
                                <img src={PhoneIcon} alt="PhoneIcon" className="pt-5 pt-lg-0" style={{ height: "23px" }} />
                                <span className='ml-2'>
                                    03004406163
                                </span>

                            </div>
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
    );
}

export default Footer;

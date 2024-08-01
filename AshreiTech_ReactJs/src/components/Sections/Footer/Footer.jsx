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

const Footer = () => {
    const { footer_container, containerOne, containerOnePiece, containerTwo } = style;
    return (
        <div className={`${footer_container} container-fluid  px-3 px-md-5 pt-0 pt-md-5`}>
            <div className="row px-0 px-md-5 py-0 py-md-5">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="row pb-4 mb-4 pt-1 pl-0 pl-lg-3 d-flex justify-content-center justify-content-lg-start">
                        <img src={AshrieTechWhiteLogo} alt="AshrieTech Logo" className="pt-5 pt-lg-0" style={{ width: '40%', height: 'auto' }} />
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
                <div className="col-lg-6 col-md-6 col-sm-12 "
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
                        <div className='col-lg-12 mt-3'><h3>Our Branches</h3></div>
                    </div>
                    <div className="row  d-flex justify-content-center align-items-center" style={{ marginTop: 24 }}>

                        <div className='col-lg-4 p-1'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex j align-items-baseline">
                                <img src={Minar} alt="minar" className="mx-2" style={{ height: "31px" }} />
                                <span className=''> Lahore Branch </span>
                            </div>
                        </div>
                        <div className='col-lg-4 px-0 px-lg-3 my-3 my-md-0'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex  align-items-baseline">
                                <img src={pakistanIcon} alt="pakistanIcon" className="mx-2" style={{ height: "27px" }} />
                                <span className=''>Karachi Branch</span>

                            </div>
                        </div>
                        <div className='col-lg-4  px-2 px-lg-2'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex  align-items-baseline">
                                <img src={mosqueIcon} alt="mosqueIcon" className="" style={{ height: "25", marginRight: 7 }} />
                                <span className=''>Islamabad Branch</span>

                            </div>
                        </div>

                    </div>
                    <div className="row d-flex  my-md-2 px-2 my-4 my-md-3 justify-content-center align-items-start ">
                        <div className='col-lg-4 px-1'>
                            <div style={{ color: '#DBDBDB' }} className=" d-flex justify-content-center align-items-start ">
                                <img src={Map} alt="Map" className="mr-2 ml-1" style={{ height: "17px" }} />
                                <span className='ml-1'>
                                    G99P+Q28, Cantt, Lahore, Punjab, Pakistan , Near PAF IT <br /> University
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4 px-2 px-md-1 my-3 my-md-0'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex justify-content-center align-items-start">
                                <img src={Map} alt="Map" className=" mr-1  ml-md-4" style={{ height: "17px" }} />
                                <span className='ml-2 ml-md-2'>
                                    NASTP Building, Main
                                    Shahrah-e-Faisal Rd,
                                    Faisal Cantonment,
                                    Karachi
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4 px-0 px-md-3'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex justify-content-center align-items-start">
                                <img src={Map} alt="Map" className="mr-3 ml-2" style={{ height: "17px" }} />
                                <span className=''>
                                    J453+GPQ, Old Airport Rd,
                                    Chaklala Cantt., Rawalpindi,
                                    Punjab 46000
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-start ">
                        <div className='col-lg-4 p-1'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex justify-content-start  align-items-center">
                                <img src={PhoneIcon} alt="PhoneIcon" className="ml-2" style={{ height: "17px" }} />
                                <span className='ml-3   '>
                                    03004406163
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4  p-1 my-4 my-md-0'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex  px-sm-4 px-2 align-items-center">
                                <img src={PhoneIcon} alt="PhoneIcon" className="mr-3" style={{ height: "17px" }} />
                                <span className=''>
                                    03332775771
                                </span>

                            </div>
                        </div>
                        <div className='col-lg-4  p-1 p-md-0'>
                            <div style={{ color: '#DBDBDB' }} className="d-flex px-sm-4 px-2  align-items-center">
                                <img src={PhoneIcon} alt="PhoneIcon" className="mr-3" style={{ height: "17px" }} />
                                <span className=''>
                                    03004406163
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0" >
                <hr style={{ color: "white", background: "white" }} className='container-fluid p-0' />
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-8 text-center text-md-left">
                        COMPLIANCE PRIVACY TERMS TRADEMARK
                    </div>
                    <div className="col-12 col-md-4">
                        <li style={{ listStyle: 'none' }}>
                            <i className="fa-solid fa-circle mr-2" style={{ color: '#00FFCA' }}></i>
                            All System Operational &nbsp; 2024 ASHRIETECH
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

import React from 'react';
import style from "./style.module.css";
import AshrieTechWhiteLogo from "../../../assets/AshrieTechWhiteLogo.svg";
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
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                    <div className={`${containerOne}`}>
                        <h5 className="text-center text-md-left">GET INSIGHTS FROM OUR BLOG</h5>
                        <div className="row pt-2 d-flex justify-content-between align-items-center">
                            {["Academic", "Academic", "Academic", "Academic"].map((category, index) => (
                                <div key={index} className={`${containerOnePiece} col-lg-2 col-md-3 col-sm-12 my-3 py-1 d-flex justify-content-center align-items-center`}>{category}</div>
                            ))}
                        </div>
                        <div className="row pt-2 justify-content-between align-items-center d-none d-lg-flex ">
                            {["Academic", "Academic", "Academic", "Academic"].map((category, index) => (
                                <div key={index} className={`${containerOnePiece} col-lg-2 col-md-3 col-sm-12 py-1 d-flex justify-content-center align-items-center `}>{category}</div>
                            ))}
                        </div>
                    </div>
                    <div className={`${containerTwo} mt-4`}>
                        <h5 className="text-center text-md-left">Developed By Edu-Man</h5>
                        <div className="row pt-4 d-flex justify-content-lg-start justify-content-center">
                            <div className="col-6 mt-2 ml-1">
                                <img src={FedumanLogo} className="img-fluid" alt="Edu-Man" />
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

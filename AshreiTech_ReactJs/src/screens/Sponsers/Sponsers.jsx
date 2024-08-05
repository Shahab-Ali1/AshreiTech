import React from "react";
import style from "./style.module.css";
import LaptopImage from "../../assets/LaptopImage.png";
import ourpartnerbg from '../../assets/Ourpartnerbg.png'
import integration_experts_logo from '../../assets/integration_experts_logo.png'
import avanza_logo from '../../assets/avanza_logo.png'
import QRandndiPh from "../../assets/Frame 7873.png"
import rewterz_logo from '../../assets/rewterz_logo.png'
import nastp_logo from '../../assets/nastp_logo.png'
import Faq from "../Faq/Faq";
import departmentsFaq from "../../constant"

const Sponsers = () => {
    const { box, sponsers, sponsers_logo_container, Laptop_Image } = style;
    return (
        <>
            <div style={{
                backgroundImage: `url(${ourpartnerbg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }} className="container-fluid  px-1 px-lg-5">
                <div className="gradientCircle d-none d-lg-block"></div>
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center " style={{ position: 'relative', zIndex: 2 }}>
                    <div className=" mt-0 mt-lg-5">
                        <div>
                            <h1 className=" text-center  generic_heading" style={{ color: '#000000' }}>
                                {" "}
                                Our Partners
                            </h1>
                            <p className="font20 text-center  mt-4 d-none">
                                Our experts are here to empower the future of tech by enabling students and professionals.
                                ,
                            </p>
                        </div>

                    </div>
                    <div className={`${sponsers} mb-5 mt-4`}>
                        <div className={`${sponsers_logo_container} col-3`}>
                            <a href="https://integrationxperts.com/" target="_blank" rel="noopener noreferrer">
                                <img src={integration_experts_logo} className="" alt="Integration Experts Logo" />
                            </a>
                        </div>

                        <div className={`${sponsers_logo_container} col-3`}>
                            <a href="https://nastp.gov.pk/" target="_blank" rel="noopener noreferrer">
                                <img src={nastp_logo} alt="" className="p-4" />
                            </a>
                        </div>
                        <div className={`${sponsers_logo_container} col-3`}>
                            <a href="https://www.rewterz.com/" target="_blank" rel="noopener noreferrer">
                                <img src={rewterz_logo} alt="" />
                            </a>
                        </div>
                        <div className={`${sponsers_logo_container} col-3`}>
                            <a href="https://avanzasolutions.com/?gad_source=1&gclid=Cj0KCQjw8MG1BhCoARIsAHxSiQlH7jdzhY8JxctgkpHdef8D3FVbbtUe4Q06vE2MJ84Vchwzmx5pg9YaAi8eEALw_wcB"target="_blank" rel="noopener noreferrer">
                            <img src={avanza_logo} alt="" />
                            </a>
                        </div>
                    </div>

                </div>
                <div className={`${box} container-fluid`}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center text-center text-md-left text-lg-left ">
                            <div className="">
                                <h1 className="mt-4">
                                    Learn Anytime,
                                    <br /> Anywhere!
                                </h1>
                                <div className="mt-4">
                                    <p>Get it on your device now!</p>
                                    {/* <button type="button" className={`${custom_btn_outline_dark} px-4 mt-4`}>
                                    Learn More
                                </button> */}
                                    <div>
                                        <img src={QRandndiPh} alt="" className="pt-4" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                            <img
                                className={`${Laptop_Image}`}
                                style={{ width: "100%", height: "auto" }}
                                src={LaptopImage}
                                alt="Laptop Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Faq data={departmentsFaq} />
        </>
    );
};

export default Sponsers;

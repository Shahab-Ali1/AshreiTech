import React from "react";
import style from "./style.module.css";
import LaptopImage from "../../assets/LaptopImage.png";
import sponser1 from "../../assets/sponser1.png"
import sponser2 from "../../assets/sponser2.png"
import sponser3 from "../../assets/sponser3.png"
import sponser4 from "../../assets/sponser4.png"
 
const Sponsers = () => {
    const { box, custom_btn_outline_dark, sponsers, sponsers_logo_container, Laptop_Image } = style;
    return (
        <>
            <div className="w-100  justify-content-center" >
                <div className=" mt-5 ">
                    <h1 className=" text-center  generic_heading">
                        {" "}
                        <span style={{ color: '#000000' }}>Our Partners</span>
                    </h1>
                    <p className="font20 mt-4 mb-3 text-center pt-4">
                        Our experts are here to empower the future of tech by enabling students and professionals.
                        ,
                    </p>
                </div>

                <div className={`${sponsers} `}>
                    <div className={`${sponsers_logo_container}`}>
                        <img src={sponser1} className="" alt="" />
                    </div>
                    <div className={`${sponsers_logo_container}`}>
                        <img src={sponser2} alt="" />
                    </div>
                    <div className={`${sponsers_logo_container}`}>
                        <img src={sponser3} alt="" />
                    </div>
                    <div className={`${sponsers_logo_container}`}>
                        <img src={sponser4} alt="" />
                    </div>
                </div>
            </div>

            <div className={`${box} container d-flex mt-5`}>
                <div className="row px-4 d-flex justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex flex-column justify-content-center text-center text-md-left text-lg-left">
                        <div className=" ">
                            <h1 className="mt-4">
                                Learn Anytime,
                                <br /> Anywhere!
                            </h1>
                            <div className="mt-4">
                                <p>Get it on your device now!</p>
                                <button type="button" className={`${custom_btn_outline_dark} px-4 mt-4`}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <img
                            className={`${Laptop_Image}`}
                            style={{ width: "100%", height: "auto" }}
                            src={LaptopImage}
                            alt="Laptop Image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sponsers;

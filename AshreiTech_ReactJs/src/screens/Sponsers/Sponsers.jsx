import React from "react";
import style from "./style.module.css";
import LaptopImage from "../../assets/LaptopImage.png";
import sponser1 from "../../assets/sponser1.png"
import sponser2 from "../../assets/sponser2.png"
import sponser3 from "../../assets/sponser3.png"
import sponser4 from "../../assets/sponser4.png"

const Sponsers = () => {
    const { box, custom_btn_outline_dark, sponsers, sponsers_logo_container } = style;
    return (
        <>
            <div className="w-100 mt-5 justify-content-center">
                <h1 className="font40 text-center extraBold generic_heading mt-5">
                    {" "}
                    Our Partners
                </h1>
                <p className="font20 mt-4 mb-5 text-center mt-2">
                There are many variations of passages of Lorem Ipsum available,     
                </p>

                <div className={`${sponsers}`}>
                    <div className={`${sponsers_logo_container}`}>
                        <img src={sponser1} alt="" />
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
            <div className={`${box} d-flex`}>
                <div className="row align-items-center">
                    <div className="col-5 d-flex">
                        <div className="row align-items-center">
                            <div className="">
                                <h1 className="font40 extraBold mb-4">
                                    Learn Anytime,
                                    <br /> Anywhere!
                                </h1>
                                <p className="font20" style={{ lineHeight: 2 }}>
                                    Get it on your device now!
                                </p>
                                <button type="button" class={`${custom_btn_outline_dark} mt-5`}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-6">
                        <div className="">
                            <img
                                className="ml-n3"
                                style={{ width: "125%", height: "125%" }}
                                src={LaptopImage}
                                alt=""
                                srcset=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sponsers;

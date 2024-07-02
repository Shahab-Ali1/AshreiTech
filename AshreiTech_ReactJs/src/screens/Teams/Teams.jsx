import React from "react";
import style from "./style.module.css";
import TopNavbar from "../../components/Nav/TopNavbar";
import teams_banner from "../../assets/teams_banner.png";
import teams_member_1 from "../../assets/teams_member_1.png";
import Footer from "../../components/Sections/Footer/Footer";

const Teams = () => {
    const { team_comtainer, banner_container, teams_image, gradientCircle, members_container } = style;
    return (
        <>
            <TopNavbar />
            <div className={`${team_comtainer}`}>
                <div className={`${banner_container}`}>
                    <img src={teams_banner} alt="" srcset="" />
                </div>
                <div className={`${members_container}`}>
                    <h1 className="text-center my-5">With over years of experience combined.</h1>
                    <div className="row px-2">
                        <div className="col-12 mb-5 col-sm-6 col-md-4 col-lg-3">
                            <img src={teams_member_1} alt="Team Member 1" className={`img-flui ${teams_image}`} />
                        </div>
                        <div className="col-12 mb-5 col-sm-6 col-md-4 col-lg-3">
                            <img src={teams_member_1} alt="Team Member 2" className={`img-flui ${teams_image}`} />
                        </div>
                        <div className="col-12 mb-5 col-sm-6 col-md-4 col-lg-3">
                            <img src={teams_member_1} alt="Team Member 3" className={`img-flui ${teams_image}`} />
                        </div>
                        <div className="col-12 mb-5 col-sm-6 col-md-4 col-lg-3">
                            <img src={teams_member_1} alt="Team Member 4" className={`img-flui ${teams_image}`} />
                        </div>
                        <div className="col-12 mb-5 col-sm-6 col-md-4 col-lg-3">
                            <img src={teams_member_1} alt="Team Member 4" className={`img-flui ${teams_image}`} />
                        </div>
                        <div className="col-12 mb-5 col-sm-6 col-md-4 col-lg-3">
                            <img src={teams_member_1} alt="Team Member 4" className={`img-flui ${teams_image}`} />
                        </div>
                        <div className={`${gradientCircle}`}></div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Teams;

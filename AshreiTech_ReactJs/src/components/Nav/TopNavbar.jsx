import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import Logo from "../../assets/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";
import QRTopNav from '../../assets/QRTopNav.png'
import Androi_QR from '../../assets/Android.png'
import IOS_QR from '../../assets/IOS.png'
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

export default function TopNavbar() {
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgb(236, 246, 244)',
      color: '#008f71',
      border: '1px solid #008f71',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: 'rgb(236, 246, 244)',
      color: '#008f71',
      top: '25px'
    },
  }));


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <div className="justify-content-end align-items-center top_menu d-none d-lg-flex" style={{ padding: "10px 45px", gap: "30px", height: 50, background: "#ecf6f4" }}>
        <Link style={{ padding: "10px 15px" }} to="/services" spy={true} smooth={true} offset={-80}>
          <span className="animated_link" style={{ color: '#008F71' }}>
            Find Tech Talent
          </span>
        </Link>
        <Link style={{ padding: "10px 15px" }} to="/services" spy={true} smooth={true} offset={-80}>
          <span className="animated_link" style={{ color: '#008F71' }}>
            Digital Academy
          </span>
        </Link>
        <Link style={{ padding: "10px 15px" }} to="/services" spy={true} smooth={true} offset={-80}>
          <span className="animated_link" style={{ color: '#008F71' }}>
            Sign In
          </span>
        </Link>
        <UlWrapperRight className="flexNullCenter">
          <li onClick={() => navigate("/GetInTouch")} className=" navbtn p-2 ml-2">
            Get In Touch
          </li>
        </UlWrapperRight>
      </div>
      <div className="d-flex justify-content-between align-items-center py-3 px-lg-5 px-0 " >
        <div className="d-flex justify-content-between  ">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <img src={Logo} className="main_logo ml-4 ml-lg-0" alt="" srcSet="" style={{ width: '200px', height: 'auto' }} />
          </Link>
          <BurderWrapper className="pointer mt-1 mt-lg-0 ml-5 ml-lg-0" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon className=" ml-5 ml-lg-0" />
          </BurderWrapper>
        </div>
        <div className="d-flex">
          <UlWrapper className="flexNullCenter header_menu">
            <li className="HeaderPaddingRight">
              <div className="dropdown">
                <span className="link2 font15 pointer">
                  Who We Are
                </span>
                <i
                  style={{ marginTop: "0px", marginLeft: "10px" }}
                  className="dropbtn hover-rotate fa fa-chevron-right"
                ></i>
                <div className="dropdown-content">
                  <Link className="" to={"/aboutthecompany"} style={{ fontSize: '15.008px' }}>
                    About The Company
                  </Link>
                  <Link className="" to={"/teams"} style={{ fontSize: '15.008px' }}>
                    About The Team
                  </Link>
                </div>
              </div>
            </li>
            <li className="font15 pointer">
              <Link style={{ padding: "10px 15px" }} to={"/WhatWeDo"} spy={true} smooth={true} offset={-80}>
                <span className="animated_link">
                  What We Do
                </span>
              </Link>
            </li>
            <li className="font15 pointer">
              <Link style={{ padding: "10px 15px" }} to={"/BookaRoom"} spy={true} smooth={true} offset={-80}>
                <span className="animated_link">
                  Book A Room
                </span>
              </Link>
            </li>
            <li className="font15 pointer">
              <Link style={{ padding: "10px 15px" }} to={"/CorporateTrainings"} spy={true} smooth={true} offset={-80}>
                <span className="animated_link">
                Corporate Trainings
                </span>
              </Link>
            </li>
            <li className="font15 pointer">
              <Link style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                <span className="animated_link">
                  Partner With Us
                </span>
              </Link>
            </li>
            <li className="font15 pointer">
              <Link style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                <span className="animated_link">
                  Insights
                </span>
              </Link>
            </li>
            <li className="font15 pointer" >
              <LightTooltip title="Click to get our app" placement="top" arrow>
              <img src={QRTopNav} alt="QR Code Icon" data-toggle="modal" data-target="#qrCodeModal" style={{ width: '35px', height: 'auto' }} />
              </LightTooltip>
            </li>
          </UlWrapper>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade bd-example-modal-lg" id="qrCodeModal" tabIndex="-1" role="dialog" aria-labelledby="qrCodeModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#5A8C75' }}>
                <h5 className="modal-title" id="qrCodeModalLabel" style={{ color: 'white' }}>QR Codes For IOS & Android</h5>
            </div>
            <div className="modal-body pt-4 bordr-0" style={{ backgroundColor: 'rgb(236, 246, 244)', width: '100%', height: '300px' }}>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                            <img src={IOS_QR} alt="iOS QR Code" className="pt-5 mt-5" />
                            <div style={{ color: "#008F71" }}>iOS</div>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                            <img src={Androi_QR} alt="Android QR Code" className="pt-5 mt-5" />
                            <div style={{ color: "#008F71" }}>Android</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer" style={{ backgroundColor: 'rgb(236, 246, 244)', borderTop: 'none' }}>
                <button type="button" className="btn" style={{ backgroundColor: '#5A8C75', color: 'white' }} data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>


    </>
  );
}



const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

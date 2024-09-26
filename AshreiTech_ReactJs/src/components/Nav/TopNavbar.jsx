



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
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
  const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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

  const links = [
    { to: "/CommingSoonPage", text: "Find Tech Talent" },
    { to: "/CommingSoonPage", text: "Digital Academy" },
    { to: "/CommingSoonPage", text: "Sign In" },
    { to: "/WhatWeDo", text: "What We Do" },
    { to: "/BookaRoom", text: "Book A Room" },
    { to: "/CorporateTrainings", text: "Corporate Trainings" }
  ];
 
 

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <div className="justify-content-end align-items-center top_menu d-none d-lg-flex" style={{ padding: "10px 45px", gap: "30px", height: 50, background: "#ecf6f4" }}>
        {links.slice(0, 3).map((link, index) => (
          <NavLink
            key={index}
            style={{ padding: "10px 15px" }}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
          >
            <span
              className="animated_link"
              style={{color: "#008f71"}}
            >
              {link.text}
            </span>
          </NavLink>
        ))}
        <UlWrapperRight className="flexNullCenter">
          <li onClick={() => navigate("/GetInTouch")} className="navbtn p-2 ml-2">
            Get In Touch
          </li>
        </UlWrapperRight>
      </div>
      <div className="d-flex justify-content-center justify-content-md-between align-items-center py-3 px-md-5 px-2">
        <div className="row">
          <div className="col-8">
            <Link className="pointer" to={"/"} smooth={true}>
              <img src={Logo} className="" alt="" srcSet="" style={{ width: '100%', height: 'auto' }} />
            </Link>
          </div>
          <div className="col-2"></div>
          <div className="col-2 d-flex justify-content-center p-0 align-items-center">
            <BurderWrapper className="pointer p-0" onClick={() => toggleSidebar(!sidebarOpen)}>
              <BurgerIcon className="p-0 " />
            </BurderWrapper>
          </div>
        </div>
        <div className="d-flex">
          <UlWrapper className="flexNullCenter header_menu">
          <li className="HeaderPaddingRight">
                  <div className="dropdown">
                  <span
                    className=""
                    style={{
                      color: hoveredIndex ===   0 ? '#000000' : hoveredIndex !== null ? '#808080' : '#000000', transition: 'color 0.3s ease',
                    }}
                  >
                    Who We Are
                  </span>
                    <i
                      style={{ marginTop: "0px", marginLeft: "10px"}}
                      className="dropbtn hover-rotate fa fa-chevron-right "
                    ></i>
                    <div className="dropdown-content">
                      <NavLink className="" to={"/teams"} style={{ fontSize: '15.008px' }}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                      >
                        About The Team
                      </NavLink>
                      <NavLink className="" to={"/aboutthecompany"} style={{ fontSize: '15.008px' }}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                      >
                        About The Company
                      </NavLink>
                    </div>
                  </div>
                </li>
            {links.slice(3).map((link, index) => (
              <li key={index} className="font15 pointer">
                <NavLink
                  style={{ padding: "10px 15px" }}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onMouseEnter={() => handleMouseEnter(index + 3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className="animated_link"
                    style={{
                      color: hoveredIndex === index + 3 ? '#000000' : hoveredIndex !== null ? '#808080' : '#000000',
                    }}
                  >
                    {link.text}
                  </span>
                </NavLink>
              </li>
            ))}
            <li className="font15 pointer">
              <LightTooltip title="Click to get our app" placement="top" arrow>
                <img src={QRTopNav} alt="QR Code Icon" data-toggle="modal" data-target="#qrCodeModal" style={{ width: '35px', height: 'auto', }} />
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
                    <img src={Androi_QR} alt="iOS QR Code" className="pt-5 mt-5" height={"200px"} />
                    <div style={{ color: "#008F71" }}>iOS</div>
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                    <img src={IOS_QR} alt="Android QR Code" className="pt-5 mt-5" height={"200px"} />
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

// Add your styled-components here
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







import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import Logo from "../../assets/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";
import Team from '../../screens/Teams/Teams'
import BookaRoom from '../../screens/BookaRoom/BookaRoom'

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


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <div className="justify-content-end align-items-center top_menu d-none d-lg-flex" style={{ padding: "10px 60px", gap: "30px", height: 50 }}>
        <Link style={{ padding: "10px 15px" }} to={"/CommingSoon"} spy={true} smooth={true} offset={-80}>
          <span className="animated_link" style={{ color: '#008F71' }}>
            Find Tech Talent
          </span>
        </Link>
        <Link style={{ padding: "10px 15px" }} to={"/CommingSoon"} spy={true} smooth={true} offset={-80}>
          <span className="animated_link" style={{ color: '#008F71' }}>
            Digital Academy
          </span>
        </Link>
        <Link style={{ padding: "10px 15px" }} to={"/CommingSoon"} spy={true} smooth={true} offset={-80}>
          <span className="animated_link" style={{ color: '#008F71' }}>
            Sign In
          </span>
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center py-3 px-lg-5 px-0" >
        <div className="d-flex justify-content-between  ">
        <Link className="pointer flexNullCenter" to="/" smooth={true}>
          <img src={Logo} className="main_logo ml-4 ml-lg-0" alt="" srcSet=""  style={{width:'200px' , height:'auto'}}/>
        </Link>
        <BurderWrapper className="pointer mt-1 mt-lg-0 ml-5 ml-lg-0" onClick={() => toggleSidebar(!sidebarOpen)}>
          <BurgerIcon className=" ml-5 ml-lg-0"/>
        </BurderWrapper>
        </div>
        <UlWrapper className="flexNullCenter header_menu">
          <li className="font15 pointer">
            {/* <Link style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
              Home
            </Link> */}
          </li>
          <li className="HeaderPaddingRight">
            <div className="dropdown">
              <span className="link2 font15 pointer">
                Who Are We
              </span>
              <i
                style={{ marginTop: "0px", marginLeft: "10px" }}
                className="dropbtn hover-rotate fa fa-chevron-right"
              ></i>
              <div className="dropdown-content">
                <Link className="" to={"/"}>
                  About The Company
                </Link>
                <Link className="" to={"/teams"}>
                  About The Team
                </Link>
              </div>
            </div>
          </li>
          <li className="font15 pointer">
            <Link style={{ padding: "10px 15px" }} to={"/BookaRoom"} spy={true} smooth={true} offset={-80}>
              <span className="animated_link">
                Book A Room
              </span>
            </Link>
          </li>
          <li className="font15 pointer">
            <Link style={{ padding: "10px 15px" }} to={"/CommingSoon"} spy={true} smooth={true} offset={-80}>
              <span className="animated_link">
                Partner With Us
              </span>
            </Link>
          </li>
          <li className="font15 pointer">
            <Link style={{ padding: "10px 15px" }} to={"/CommingSoon"} spy={true} smooth={true} offset={-80}>
              <span className="animated_link">
                Insights
              </span>
            </Link>
          </li>
        </UlWrapper>
        <UlWrapperRight className="flexNullCenter">
          <li onClick={() => navigate("/GetInTouch")} className="font15 radius8 lightBg get_in_touch_btn  " >
            Get In Touch
          </li>
         
        </UlWrapperRight>
      </div>
    </>
  );
}

const NavInner = styled.div`
  width: 100%;
  height: 100%;
`;

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

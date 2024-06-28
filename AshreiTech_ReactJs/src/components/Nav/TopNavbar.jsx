import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import Logo from "../../assets/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";

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
      {/* <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}> */}
      <div className="d-flex  justify-content-end align-items-center " style={{padding:"10px 60px",gap:"32px",height:50}}>
        <div className="font20 link" style={{color:'#008F71'}}>Find Tech Talent</div>
        <div className="font20 link" style={{color:'#008F71'}}>Digital Academy</div>
        <div className="font20 link" style={{color:'#003650'}}>Sign In</div>
        
      </div>
        <div className="d-flex justify-content-between align-items-center py-3" style={{padding:"0 60px"}}>
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            {/* <LogoIcon /> */}
            <img src={Logo} alt="" srcset="" />
           
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter header_menu">
            <li className=" font15 pointer">
              {/* <Link style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link> */}
            </li>
            <li className="HeaderPaddingRight">
                  <div class="dropdown">
                    <span
                      style={{ marginRight: "5px",fontSize:18 }}
                      title=""
                      className={"link2 font15 pointer "}
                    >
                       Who Are We
                    </span>
                    <i
                      style={{ marginTop: "0px", marginLeft: "3px" }}
                      class=" dropbtn hover-rotate fa fa-chevron-right"
                    ></i>
                    <div class="dropdown-content">
                      <Link className={""} to={"/"}>
                        <a target="_blank" href="">
                          About The Company
                        </a>
                      </Link>
                      <Link className={""} to={"/"}>
                        <a href="#"> About The Team </a>
                      </Link>
                      {/* <Link className={""} to={"/"}>
                        <a href="#"> Achievements  </a>
                      </Link> */}
                    </div>
                  </div>
                </li>
            <li className=" font15 pointer">
              <Link style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
              <span className="link">
                 Who Are We
              </span>
              </Link>
            </li>
            <li className=" font15 pointer">
              <Link  style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
              <span className="link">
               Book A Room
              </span>
              </Link>
            </li>
            <li className=" font15 pointer">
              <Link  style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
              <span className="link">
                 Partner With Us
              </span>
              </Link>
            </li>
            <li className=" font15 pointer">
              <Link  style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
               <span className="link">
                 Insights
               </span>
              </Link>
            </li>
            {/* <li className=" font15 pointer">
              <Link style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li> */}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li  onClick={()=>navigate("/GetInTouch")} className=" font15  radius8 lightBg get_in_touch_btn pointer flexCenter" style={{ padding: "10px 15px",background:"#008F71",color:"white"}}>
                Get In Touch
            </li>
          </UlWrapperRight>
          {/* <div className="" style={{height:"100%",width:'100%',background:"red"}}>
            asdasd
          </div> */}
        </div>
      {/* </Wrapper> */}
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  width:100%,
  height: 100%;
`
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



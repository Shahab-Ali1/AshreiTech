import React, { useState } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import Currentstudents from "../../screens/Currentstudents/Currentstudents";
import bg1 from '../../assets/bg1.png'

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "SAP",
    "Oracle",
    "Salesforce",
    "EC Council",
    "Cyber Security"
  ];
  const handleClick = (index) => {

    setActiveIndex(index);

  };
  return (
    <div className="container-fluid px-5 mt-5" 
    style={{
      backgroundImage: `url(${bg1})`,
    }}
    >

      <div className="w-100">
        <h1 className="text-center  generic_heading" > <span style={{ color: '#000000' }}>Courses we</span> <span style={{ color: '#008F71' }}> &nbsp; Offer</span></h1>
        <p className="font20 mt-4 pt-3 mb-5 text-center">
          Join the Academy and become a driving force in Pakistan's digital revolution!
        </p>
      </div>

      <div className="row ">

        <div className="col-12 col-md-4 col-lg-4" >
          <div className="catergory_container " style={{ backgroundColor: 'white' }}>
            <h3 className="mb-4 text-center text-lg-left text-md-left">Categories</h3>
            <ul className="catergory_menu  ">
              {categories.map((category, index) => (
                <li
                key={index}
                className={`${activeIndex === index ? "active_category" : ""}  justify-content-center justify-content-lg-start   `}
                onClick={() => handleClick(index)}
                >

                  <p className="d-flex font20 justify-content-between align-items-center ">{category} {activeIndex === index && <i class="fa-solid fa-arrow-right ml-3"></i>}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-8 col-lg-8 pt-5 " >
          <div className="row " style={{display:'relative'}}>

            <div className="col-sm-12 col-md-6  col-lg-4  d-none d-lg-block" >
              <div class="card" style={{  borderBottom:'3px solid rgba(0, 0, 0, 0.25)', borderRadius:'0 0 100px 100px;' }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body d-flex flex-column  align-items-center align-items-lg-start ">
                  <p class="mb-3 p-1 text-center col-10" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '12px' }}>50,000+ Certified Students</p>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 text-center text-lg-left text-md-left">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <p class="p-1 text-center col-6" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '14px' }}>View More</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6  col-lg-4 d-lg-block " >
              <div class="card" style={{  borderBottom:'3px solid rgba(0, 0, 0, 0.25)', borderRadius:'0 0 100px 100px;' }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body d-flex flex-column  align-items-center align-items-lg-start ">
                  <p class="mb-3 p-1 text-center col-10" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '12px' }}>50,000+ Certified Students</p>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 text-center text-lg-left text-md-left">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <p class="p-1 text-center col-6" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '14px' }}>View More</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6  col-lg-4  d-none d-lg-block " >
              <div class="card" style={{  borderBottom:'3px solid rgba(0, 0, 0, 0.25)', borderRadius:'0 0 100px 100px;' }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body d-flex flex-column  align-items-center align-items-lg-start ">
                  <p class="mb-3 p-1 text-center col-10" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '12px' }}>50,000+ Certified Students</p>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 text-center text-lg-left text-md-left">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <p class="p-1 text-center col-6" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '14px' }}>View More</p>
                </div>
              </div>
            </div>
            
            <div className="col-sm-12 col-md-6  col-lg-4  d-none d-lg-block" >
              <div class="card" style={{  borderBottom:'3px solid rgba(0, 0, 0, 0.25)', borderRadius:'0 0 100px 100px;' }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body d-flex flex-column  align-items-center align-items-lg-start ">
                  <p class="mb-3 p-1 text-center col-10" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '12px' }}>50,000+ Certified Students</p>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 text-center text-lg-left text-md-left">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <p class="p-1 text-center col-6" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '14px' }}>View More</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6  col-lg-4 d-lg-block " >
              <div class="card" style={{  borderBottom:'3px solid rgba(0, 0, 0, 0.25)', borderRadius:'0 0 100px 100px;' }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body d-flex flex-column  align-items-center align-items-lg-start ">
                  <p class="mb-3 p-1 text-center col-10" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '12px' }}>50,000+ Certified Students</p>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 text-center text-lg-left text-md-left">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <p class="p-1 text-center col-6" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '14px' }}>View More</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6  col-lg-4 d-lg-block" >
              <div class="card" style={{  borderBottom:'3px solid rgba(0, 0, 0, 0.25)', borderRadius:'0 0 100px 100px;' }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body d-flex flex-column  align-items-center align-items-lg-start ">
                  <p class="mb-3 p-1 text-center col-10" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '12px' }}>50,000+ Certified Students</p>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 text-center text-lg-left text-md-left">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <p class="p-1 text-center col-6" style={{ background: '#5A8C75', color: "white", borderRadius: 50, fontSize: '14px' }}>View More</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }

`;


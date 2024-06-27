import React, { useState } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import Currentstudents from "../../screens/Currentstudents/Currentstudents";

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "SAP",
    "Salesforce",
    "Cybersecurity",
    "Data & Programming",
    "Microsoft Azure (Cloud)"
  ];
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="row mt-5" style={{padding:'0 100px'}}>
     <div className="w-100">
            <h1 className="font40 text-center extraBold generic_heading mt-5"> Courses we <span style={{color:'#008F71'}}> Offer</span></h1>
            <p className="font20 mt-4 mb-5 text-center">
            There are many variations of passages of Lorem Ipsum available,     
            </p>
     </div>
      <div className="row">
      <div className="col-4">
        <div className="catergory_container">
          <h3 className="mb-4 ">Categories</h3>
          <ul className="catergory_menu ">
          {categories.map((category, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active_category " : ""}
            onClick={() => handleClick(index)}
          >
           
            <p className="d-flex font20 justify-content-between align-items-center">{category} {activeIndex === index&&<i class="fa-solid fa-arrow-right"></i>}</p> 
          </li>
        ))}
          </ul>
        </div>
      </div>
      <div className="col-8 pt-5">
      <div className="whiteBg">
        <div className="">
         
          <div className="row">
            {/* <div className="col-4"></div> */}
            <div className="col">
            <div className="row ">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body">
                <a href="#" class="mb-3" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>50,000+ Certified Students</a>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 ">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <a href="#" class="" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>View More</a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body">
                <a href="#" class="mb-3" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>50,000+ Certified Students</a>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 ">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <a href="#" class="" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>View More</a>
                </div>
              </div>
            </div><div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body">
                <a href="#" class="mb-3" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>50,000+ Certified Students</a>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 ">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <a href="#" class="" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>View More</a>
                </div>
              </div>
            </div><div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body">
                <a href="#" class="mb-3" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>50,000+ Certified Students</a>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 ">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <a href="#" class="" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>View More</a>
                </div>
              </div>
            </div><div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body">
                <a href="#" class="mb-3" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>50,000+ Certified Students</a>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 ">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <a href="#" class="" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>View More</a>
                </div>
              </div>
            </div><div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="https://images.ctfassets.net/hrltx12pl8hq/1SOYk8vr3SXlQjbdvjhrfF/01a56dbce5cccbfe8858f31ba6bf5283/thumb_sept22_04.jpg" alt="Card image cap" />
                <div class="card-body">
                <a href="#" class="mb-3" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>50,000+ Certified Students</a>
                  <h5 class="card-title mt-4">Ariba Procurement</h5>
                  <p class="card-text mb-4 ">Learn how to use SAP Ariba for managing procurement  and purchase orders.</p>
                  <a href="#" class="" style={{background:'#5A8C75',color:"white",padding:"5px 15px 5px 15px",borderRadius:50}}>View More</a>
                </div>
              </div>
            </div>
          </div>
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
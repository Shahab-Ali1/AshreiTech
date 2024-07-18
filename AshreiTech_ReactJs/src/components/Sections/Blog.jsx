import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import Currentstudents from "../../screens/Currentstudents/Currentstudents";
import offerbg from '../../assets/offerbg.png';
import { getMethod, codeError, ClientId } from "../../utils/services";
export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ImagesData, setImagesData] = useState([]);
  const [Categories, setCategories] = useState([]);
  const categories = [
    "SAP",
    "Oracle",
    "Salesforce",
    "EC Council",
    "Cyber Security"
  ];
  const handleClick = (index) => {
    loadCourses(index)
    setActiveIndex(index);

  };
  const loadCategory = () => {
    try {
      getMethod(`SMCourse/V2/Coursecategory/`)
        .then((data) => {
          if (data?.IsSuccess) {
            setCategories(data.Data)
            handleClick(data.Data[0]?.Id)
          }
        })
        .catch(error => {
          codeError(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const loadCourses = (vtype) => {
    try {
      getMethod(`SMCourse/V2/ClientCourseWithoutToken/${ClientId}/${vtype}`)
        .then((data) => {
          if (data?.IsSuccess) {
            setImagesData(data.Data)
          }
        })
        .catch(error => {
          codeError(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadCategory();
  }, [])

  return (
    <div className="container-fluid px-5 pt-5"
      style={{
        backgroundImage: `url(${offerbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position:'relative'
      }}
    >
      <div className="w-100">
        <h1 className="text-center  generic_heading" > <span style={{ color: '#000000' }}>Courses we</span> <span style={{ color: '#008F71' }}>&nbsp;Offer</span></h1>
        <p className=" mt-4 pt-3 mb-5 text-center">
          Join the Academy and become a driving force in Pakistan's digital revolution!
        </p>
      </div>

      <div className="row " style={{position:"relative"}}>
      <div className="gradientCircleLeft"></div>

        <div className="col-12 col-md-4 col-lg-4" >
          <div className="catergory_container " style={{ backgroundColor: 'white' }}>
            <h3 className="mb-4 text-center text-lg-left text-md-left">Categories</h3>
            <ul className="catergory_menu  ">
              {Categories && Categories.map((item, index) => (
                <li
                  key={index}
                  value={item?.Id}
                  className={`${activeIndex === item?.Id ? "active_category" : ""}  justify-content-center justify-content-lg-start   `}
                  onClick={() => handleClick(item?.Id)}
                >

                  <p className="d-flex font20 justify-content-between align-items-center ">{item?.category} {activeIndex === item?.Id && <i class="fa-solid fa-arrow-right ml-3"></i>}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-8 col-lg-8 pt-5 " >
          <div className="row " style={{ display: 'relative' }}>
            {
              ImagesData && ImagesData.map((item, index) => (
                <div key={index} className="col-sm-12 col-md-6  col-lg-4 d-lg-block d-none" >
                  <div class="card" style={{ borderBottom: '3px solid rgba(0, 0, 0, 0.25)', borderRadius: '0 0 100px 100px;' }}>
                    <img class="card-img-top" 
                    src={`https://sma.edu-man.com/sm/Images/Actual/${item?.stdimagefilename}`} alt="Card image cap" />
                    <div class="card-body d-flex flex-column  align-items-center align-items-lg-start ">
                      <WrapperForP className="d-flex flex-column align-items-center align-items-lg-start" >
                        <div className="pclass p-1 d-flex justify-content-center"><p>50,000+ Certified Students</p></div>
                        <h5 class="card-title mt-4 text-center text-lg-left text-md-left">{item?.stxt}</h5>
                        <p class="card-text mb-4 text-center text-lg-left text-md-left">{item?.discription}</p>
                        <div className="pclass p-1 text-center col-6"><p style={{ fontSize: '14px' }}>View More</p></div>
                      </WrapperForP>
                    </div>
                  </div>
                </div>
              ))
            }
          
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

const WrapperForP = styled.div`
  .pclass{
    background-color: #5A8C75;
    color: #fff;
    border-radius:50px;
    font-size:12px;
    }
  .pclass:hover {
    background-color: #00194e;
    color: #fff;
    }
`;


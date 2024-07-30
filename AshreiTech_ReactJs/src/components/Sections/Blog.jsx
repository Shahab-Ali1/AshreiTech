import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import offerbg from '../../assets/offerbg.png';
import { getMethod, codeError, ClientId } from "../../utils/services";

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ImagesData, setImagesData] = useState([]);
  const [Categories, setCategories] = useState([]);

  const handleClick = (index) => {
    setImagesData([]); // Clear previous data
    setActiveIndex(index);
    loadCourses(index);
  };

  const loadCategory = () => {
    try {
      getMethod(`SMCourse/V2/Coursecategory/`)
        .then((data) => {
          if (data?.IsSuccess) {
            setCategories(data.Data);
            handleClick(data.Data[0]?.Id);
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
            setImagesData(data.Data);
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
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid px-5 py-5"
      style={{
        backgroundImage: `url(${offerbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="w-100">
        <h1 className="text-center  generic_heading" > <span style={{ color: '#000000' }}>Courses We</span> <span style={{ color: '#008F71' }}>&nbsp;Offer</span></h1>
        <p className="mt-4 pt-3 mb-5 text-center">
          Join the Academy and become a driving force in Pakistan's digital revolution!
        </p>
      </div>

      <div className="row" style={{ position: "relative" }}>
        <div className="gradientCircleLeft"></div>

        <div className="col-12 col-md-4 col-lg-4">
          <div className="catergory_container" style={{ backgroundColor: 'white' }}>
            <h3 className="mb-4 text-center text-lg-left text-md-left">Categories</h3>
            <ul className="catergory_menu">
              {Categories && Categories.map((item, index) => (
                <li
                  key={item?.Id}
                  value={item?.Id}
                  className={`${activeIndex === item?.Id ? "active_category" : ""} justify-content-center justify-content-lg-start`}
                  onClick={() => handleClick(item?.Id)}
                >
                  <p className="d-flex font20 justify-content-between align-items-center">{item?.category} {activeIndex === item?.Id && <i className="fa-solid fa-arrow-right ml-3"></i>}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-8 col-lg-8 mt-5 mt-lg-0">
          {ImagesData.length > 0 ? (
            ImagesData.length > 3 ? (
              <Slider {...settings}>
                {ImagesData.map((item, index) => (
                  <div key={item?.Id} className="px-2">
                    <div className="card" style={{ borderBottom: '3px solid rgba(0, 0, 0, 0.25)', borderRadius: '0 0 100px 100px;', marginBottom:"0px" }}>
                      <img className="card-img-top"
                        src={`https://sma.edu-man.com/sm/Images/Actual/${item?.stdimagefilename}`} alt="Card image cap" />
                      <div className="card-body d-flex flex-column align-items-center align-items-lg-start">
                        <WrapperForP className="d-flex flex-column align-items-center align-items-lg-start">
                          <div className="pclass p-1 d-flex justify-content-center px-3"><p>50,000+ Certified Students</p></div>
                          <h5 className="card-title mt-4 text-center text-lg-left text-md-left" id='odder_card-h'>{item?.stxt}</h5>
                          <p className="card-text mb-4 text-center text-lg-left text-md-left" id="offer_card">{item?.discription}</p>
                          <div className="pclass p-1 text-center col-6"><p style={{ fontSize: '14px' }}>View More</p></div>
                        </WrapperForP>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="row">
                {ImagesData.map((item, index) => (
                  <div key={item?.Id} className="col-sm-12 col-md-6 col-lg-4 px-2">
                    <div className="card" style={{ borderBottom: '3px solid rgba(0, 0, 0, 0.25)', borderRadius: '0 0 100px 100px;' }}>
                      <img className="card-img-top"
                        src={`https://sma.edu-man.com/sm/Images/Actual/${item?.stdimagefilename}`} alt="Card image cap" />
                      <div className="card-body d-flex flex-column align-items-center align-items-lg-start">
                        <WrapperForP className="d-flex flex-column align-items-center align-items-lg-start">
                          <div className="pclass p-1 d-flex justify-content-center px-3"><p>50,000+ Certified Students</p></div>
                          <h5 className="card-title mt-4 text-center text-lg-left text-md-left" id='odder_card-h'>{item?.stxt}</h5>
                          <p className="card-text mb-4 text-center text-lg-left text-md-left" id="offer_card">{item?.discription}</p>
                          <div className="pclass p-1 text-center col-6"><p style={{ fontSize: '14px' }}>View More</p></div>
                        </WrapperForP>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <p>No courses available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const WrapperForP = styled.div`
  .pclass{
    background-color: #5A8C75;
    color: #ffffff;
    border-radius:50px;
    font-size:12px;
  }
  .pclass:hover {
    background-color: #00194e;
    color: #fff;
  }
`;

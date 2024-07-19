import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import heroImage from '../../assets/single-course-screen/shopify universe 1 1.png';
import HerobackImg from'../../assets/single-course-screen/singleCourseHeroImage.png'
import Faq from '../Faq/Faq';
import TestimonialSlider from '../../components/Elements/TestimonialSlider';
import departmentsFaq  from '../../constant'
import profile2 from '../../assets/profile2.png'
import vector1 from '../../assets/aboutAnimation1.png'
import ladder_background from '../../assets/ladder.png'
import InfoCard from '../InfoCard/InfoCard';

const SingleCourse = () => {
  
  return (
    <>
      <TopNavbar />
  


      <div className="container-fluid pb-5  pt-5"
      style={{
        backgroundImage: `url(${HerobackImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position:'relative'
      }}
    >
          <div className="container p-5 " style={{ backgroundImage: `url(${HerobackImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="row">
          <div className="col-12 ">
            <div className="row">
              <div className="col-6">
                <div>
                  <button>SAP</button>
                </div>
                <div className='mt-5'>
                  <h1>Ariba Procurement</h1>
                  <p className='mt-2'>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
                  <div className='d-flex'>
                    <div>5.0</div>
                    <div className='mx-3'>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                    </div>
                    <div>2000 ratings</div>
                  </div>
                </div>
                <div className='d-flex mt-5 align-items-center'>
                  <div>
                    <button className='slider_btn px-2 font20'>Ready To Upskill</button>
                  </div>
                  <div className="testimonials- d-flex">
                      <img src={vector1} alt="User 1" className="user-icon  h-50" />
                      <img src={vector1}  alt="User 2" className="user-ico h-50" />
                      <img src={vector1}  alt="User 3" className="user-ico h-50" />
                  </div>
                  <div>4,000 Learners Enrolled</div>
                </div>
              </div>
              <div className="col-6" >
                <img src={heroImage} className='w-100 w-100' alt="Course"  />
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>

    <InfoCard/>
    </div>

















      <div className="container-fluid  pt-5"
      style={{
        backgroundImage: `url(${ladder_background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position:'relative'
      }}
    >
      <div className="w-100">
        <h1 className="text-center  generic_heading" > <span style={{ color: '#000000' }}>How Do You decide This Course Suits You</span> </h1>
          <div className="container d-flex justify-content-center">
            <div className="row mt-sm-5 justify-content-center bg-primar">
            <div  className="col-sm-3 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow rounded">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow rounded">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow rounded">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow rounded">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow rounded">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow rounded">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
            </div>
         

                      </div>
        </div>


    </div>
      <div className="container-fluid bg_green py-5">
        <div className="container  bg-white">
          <div className="row  rounded-5 px-sm-5 px-2 align-items-center">
            <div className="col-sm-4">
              <h1>Meet the trainer
              of the course</h1>
             <a href="" className='text-decoration-underline'>Meet the full team</a>
            </div>
            <div className="col-sm-8">
            <div className="card-body pb-0">
              <div className="row d-flex justify-content-left align-items-center">
                <div className="col-3">
                  <img
                    src={profile2}
                    alt="Online Shopping VR Glasses"
                    className="rounded-circle custom-img"
                  />
                </div>
                <div className="" >
                  <h5 className="font-weight-bolder"> Muhammad Usman</h5>
                  <h6 className="text-secondary">Associate SAP Consultant</h6>
                </div>
              </div>
              <p className=" mb-3 mt-3"> Ignite your tech passion with our cutting-edge programs, expertly designed to fuse vital technical and soft skills. Whether you're aiming for a global career or advancing your current path, our academy provides the perfect launchpad. Gain a competitive edge with opportunities for international certifications that elevate your professional profile. Dive into a world of innovation and collaboration, where endless possibilities await.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <TestimonialSlider />
      </div>
      <Faq data={departmentsFaq}/>
      <Footer />
    </>
  );
}

export default SingleCourse;

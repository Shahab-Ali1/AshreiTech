import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import heroImage from '../../assets/single-course-screen/shopify universe 1 1.png';
import HerobackImg from'../../assets/single-course-screen/singleCourseHeroImage.png'
import Faq from '../Faq/Faq';
import TestimonialSlider from '../../components/Elements/TestimonialSlider';
import departmentsFaq, { courseInfoCardData }  from '../../constant'
import profile2 from '../../assets/profile2.png'
import vector1 from '../../assets/aboutAnimation1.png'
import ladder_background from '../../assets/ladder.png'
import InfoCard from '../InfoCard/InfoCard';
import style from './style.module.css'
import  gradeint_background from '../../assets/gradeint_background.png'
import shopify_coins from '../../assets/shopify_coins.png'

const SingleCourse = () => {
  const {sap_btn,ready_to_upskill_btn}=style

  return (
    <>
      <TopNavbar />
  


      <div className="container-fluid   d-lex  flex-column align-items-center pb-5 pt-5"
  style={{
    backgroundImage: `url(${HerobackImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  }}
>
  <div className=" p-4 shadow-lg custom-rounded m-auto" style={{ backgroundImage: ``, width:'85%',backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:50 }}>
    <div className="row p-2">
      <div className="col-12">
        <div className="row">
          <div className="col-7">
            <div>
              <button className={` font18 bg_khaigreen border-0 text-white custom-rounded px-5 py-1`}>SAP</button>
            </div>
            <div className='mt-5'>
              <h1 className='' style={{fontSize:58}}>Ariba Procurement</h1>
              <p className='mt-2 font13'>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
              <div className='d-flex font11 mt-1'>
                <div>5.0</div>
                <div className='-3'>
                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                </div>
                <div>2000 ratings</div>
              </div>
            </div>
            <div className='d-flex row mt-5 align-items-center'>
              <div className=''>
                <button className={`${ready_to_upskill_btn}`}>Ready To Upskill</button>
              </div>
              <div className="d-flex justify-content-end">
<div className=" position-relative d-flex">
  <div className="testimonial position-relative" shtyle={{  left: '0' }}>
    <img src={profile2} alt="User 1" className="user-icon" style={{width:50}} />
  </div>
  <div className="testimonial position-relative" style={{  right: '30px' }}>
    <img src={profile2} alt="User 2" className="user-icon" style={{width:50}} />
  </div>
  <div className="testimonial position-relative" style={{  right: '60px' }}>
    <img src={profile2} alt="User 3" className="user-icon" style={{width:50}} />
  </div>
              </div>
              </div>
              
              <div className=' position-relative'>4,000 Learners Enrolled</div>
            </div>
          </div>
          <div className="col-5 d-flex justify-content-center align-items-center">
            <img src={heroImage} className='' style={{width:'110%',height:"auto"}} alt="Course" />
          </div>
        </div>
      </div>
    </div>
    <div className="row"></div>
  </div>
  <div className="container-fluid px-5" style={{width:""}}>

  <InfoCard data={courseInfoCardData} count={false} gradient={false}/> 
  </div>

</div>

    <div className="container gutter-0 py-5 px-0 pl-5"  style={{width:"83%",background:""}}>
      <div className="row gutter-0 p-0" >
        <div className="col-sm-6 col-md-8  col-lg-7 p-0">
          <h1 className='left_underline'>About This Course</h1>
          <p className='my-5 font13'>Ignite your tech passion with our cutting-edge programs, expertly designed to fuse vital technical and soft skills. Whether you're aiming for a global career or advancing your current path, our academy provides the perfect launchpad. Gain a competitive edge with opportunities for international certifications that elevate your professional profile. Dive into a world of innovation and collaboration, where endless possibilities await.</p>
        </div>
        <div className="col-sm-6 p-0 col-md-4 col-lg-5  d-flex justify-content-end align-items-center ">
          <div className="">
          <h1 className='left_underline'>Skills You’ll Gain</h1>
          <ul className='my-5'>
            <li className='font13'><i class="fa-solid fa-circle-check mr-1" style={{color:'#008F71'}}></i> skills</li>
            <li className='font13'><i class="fa-solid fa-circle-check mr-1" style={{color:'#008F71'}}></i> skills</li>
            <li className='font13'><i class="fa-solid fa-circle-check mr-1" style={{color:'#008F71'}}></i> skills</li>
          </ul>
          </div>
        
       
        </div>
      </div>
      <div className="row gutter-0">
       <div className=" col-sm-6 col-md-8  col-lg-7 bg-white mb-4  d-flex flex-column text-black  shadow custom-rounded border border-dark " style={{position:'relative',zIndex:1}}>
  <div className="row ">
    <div className="col px-sm-4 py-sm-4 text-bold border-bottom border-dark"><h3>Syllabus</h3></div>
  </div>
  <div className="d-flex flex-column py-sm-5 py-3 px-sm-4 justify-content-center h-100">
    <h4 className=''>Intro to Generative AI</h4>
    <h5 className='text-disable mb-sm-5 mb-2'>Learn About the Different Types Of Generative AI!</h5>
  <p className='font13'>Ignite your tech passion with our cutting-edge programs, expertly designed to fuse vital technical and soft skills. Whether you're aiming for a global career or advancing your current path, our academy provides the perfect launchpad. Gain a competitive edge with opportunities for international certifications that elevate your professional profile. Dive into a world of innovation and collaboration, where endless possibilities </p>
  <br />
  <p className='font13'>Ignite your tech passion with our cutting-edge programs, expertly designed to fuse vital technical and soft skills. Whether you're aiming for a global career or advancing your current path, our academy provides the perfect launchpad. Gain a competitive edge with opportunities for international certifications that elevate your professional profile. Dive into a world of innovation and collaboration, where endless possibilities </p>
  <br />

  <p className='font13'>Ignite your tech passion with our cutting-edge programs, expertly designed to fuse vital technical and soft skills. Whether you're aiming for a global career or advancing your current path, our academy provides the perfect launchpad. Gain a competitive edge with opportunities for international certifications that elevate your professional profile. Dive into a world of innovation and collaboration, where endless possibilities </p>
  </div>
</div>
        <div className="col-sm-6 p-0 col-md-4 col-lg-5 d-flex justify-content-end align-items-center">
          <div className="coursegradientCircle"></div>
          <img src={shopify_coins} className='' style={{height:"auto",width:"80%",marginLeft:'30px',position:"relative",zIndex:3}} alt="" srcset="" />
        </div>
      </div>

<div className="row justify-content-center mt-sm-1">
      <button className={`${ready_to_upskill_btn}`}>Enroll Now</button>
</div>
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
            <div  className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
         <div  className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
           <img src={vector1} alt="" />
           <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
         </div>
            </div>
         

                      </div>
        </div>


    </div>
      <div className="container-fluid bg_green py-5">
        <div className="container custom-rounded bg-white">
          <div className="row  rounded-5 px-sm-5 px-2 align-items-center" >
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
      <div className="container-fluid  pt-5"
      style={{
        backgroundImage: `url(${gradeint_background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position:'relative'
      }}
    >
      <div className="w-100 py-5">
        <h1 className="text-center  generic_heading" > <span style={{ color: '#000000' }}>Looking For Something Else?</span> </h1>
          <div className=" d-flex justify-content-center">
            <div className="row mt-sm-5 justify-content-center bg-primar py-sm-5">

         
<div className="col-sm-3 bg-white mb-4 mx-lg-4 mx-sm-2 d-flex flex-column text-black  shadow custom-rounded border border-dark fixed-height">
  <div className="row ">
    <div className="col px-3 py-1 text-bold border-bottom border-dark">Article</div>
  </div>
  <div className="d-flex flex-column justify-content-center h-100">
    <h4>Detective Hallucinations in Generative AI</h4>
    <p className="line-height-sm">We embrace continuous for growth.</p>
  </div>
</div>
<div className="col-sm-3 bg-white mb-4 mx-lg-4 mx-sm-2 d-flex flex-column text-black  shadow custom-rounded border border-dark fixed-height">
  <div className="row ">
    <div className="col px-3 py-1 text-bold border-bottom border-dark">Article</div>
  </div>
  <div className="d-flex flex-column justify-content-center h-100">
    <h4>Detective Hallucinations in Generative AI</h4>
    <p className="line-height-sm">We embrace continuous for growth.</p>
  </div>
</div>
<div className="col-sm-3 bg-white mb-4 mx-lg-4 mx-sm-2 d-flex flex-column text-black  shadow custom-rounded border border-dark fixed-height">
  <div className="row ">
    <div className="col px-3 py-1 text-bold border-bottom border-dark">Article</div>
  </div>
  <div className="d-flex flex-column justify-content-center h-100">
    <h4>Detective Hallucinations in Generative AI</h4>
    <p className="line-height-sm">We embrace continuous for growth.</p>
  </div>
</div>

        
            </div>
         

                      </div>
        </div>


    </div>


   
      <Footer />
    </>
  );
}

export default SingleCourse;

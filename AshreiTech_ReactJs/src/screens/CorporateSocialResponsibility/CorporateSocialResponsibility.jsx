import React from 'react'
import Footer from '../../components/Sections/Footer/Footer'
import TopNavbar from '../../components/Nav/TopNavbar'
import TestimonialSlider from '../../components/Elements/TestimonialSlider'
import companyLogo4 from '../../assets/aboutTheCompany/companyLogo4.png';
import AshrieTechBanner from '../../assets/AshrieTechBanner.png'
import AnraizUncle from '../../assets/CorporateSocialResponsibilty/AnraizUncle.png';
import CardImage1 from '../../assets/CorporateSocialResponsibilty/CardImage1.png';
import CardImage2 from '../../assets/CorporateSocialResponsibilty/CardImage2.png';
import CardImage3 from '../../assets/CorporateSocialResponsibilty/CardImage3.png';
import CardImage4 from '../../assets/CorporateSocialResponsibilty/CardImage4.png';
import wave from '../../assets/WhatWeDo/Wave2.png'
import style from "./style.module.css"
import chandImage from '../../assets/CorporateSocialResponsibilty/chandImage.png'
import { Barchart } from '../../components/Sections/Barchart/Barchart';
import offerbg from '../../assets/offerbg.png';

export default function CorporateSocialResponsibility() {
    const {gradientCircle,gradientCircle1}=style
    const {box,generic_heading_left}=style
    const data = {
        labels: ['January', 'February', 'March', 'April',],
        datasets: [
          {
            label: 'SAP',
            data: [81, 56, 55, 40],
            backgroundColor: 'rgba(244, 165, 45)',
      
          },
          {
            label: 'Saleforce',
            data: [ 19, 86, 27, 90],
            backgroundColor: 'rgba(208, 181, 42)',
      
          },
          {
            label: 'Tableau',
            data: [ 50, 90, 65, 80], 
            backgroundColor: 'rgba(85, 185, 159)',
      
          },
        ],
      };
      const singleBardata = {
        labels: ['January',],
        datasets: [
          {
            label: 'Leadership Academy',
            data: [81, ],
            backgroundColor: 'rgba(244, 165, 45)',
      
          },
          {
            label: 'Interveiw Prep',
            data: [ 19, ],
            backgroundColor: 'rgba(208, 181, 42)',
      
          },
          {
            label: 'Work Prep',
            data: [ 50, ], 
            backgroundColor: 'rgba(85, 185, 159)',
      
          },
          {
            label: 'Hiring Summit',
            data: [ 50, ], 
            backgroundColor: 'rgba(0,142,112,255)',
      
          },
        ],
      };
  return (
    <>
      <TopNavbar />


      <div className="container-fluid" style={{backgroundColor:"#f7fde8"}}>
        <div className="row px-4 mb-4 d-flex justify-content-center align-items-cente">
          <div className="col-lg-6 p-0 py-3">
            <h1 style={{lineHeight:'0.9'}} className=''>Meet Our</h1>
            <h1 className='mb-4 mt-2' style={{fontSize:'28px', backgroundColor:'#053750', padding:'5px 12px',  borderRadius:'5px', color:'white' , letterSpacing:'4px',display:'inline-block'}}>Founder</h1>
            <p className='font20'>Sohail is on a mission to "create a world of work where everyone can be their natural best, feel belonged and experience advancement."
              He has devoted his life to sharing his thinking in order to help other leaders and organizations develop an agile learning culture.
              Sohail's unconventional and disruptive views on talent, learning
              leadership and business have attracted significant attention.
              Sohail spends a significant time studying individuals, teams and organizations to understand what makes world-class performers, summarizing it, and sharing it with the world.</p>
          </div>
          <div className="col-6 d-inline-flex align-items-end">
            <img src={chandImage} alt="" className='p-0'  style={{ width:'100%' , height:'auto' }}/>
          </div>
        </div>
      </div>
        {/* <div className="gradientCircle"></div> */}
      <div
                className="container-fluid mt-4"
                style={{
                    backgroundColor: '#5A8C75',
                    backgroundImage: `url(${wave})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                }}
            >
                <div className="container py-md-5 ">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                      
                        <div className="col-lg-9 col-md-10 col-sm-12 pb-4 pb-lg-0 text-center ">
                            <h1 className='text-center ' id="generic_heading_BookRoom">Our approach to build a Tech-able Pakistan</h1>
                            <br />
                            <p className="mt-md-3 text-center text-white">Through the rigorous marketing and outreach efforts across Pakistan, we were able to create awareness and generate 10,000 leads. <br />
                            Within a period of 9 months, over 6000 students were provided free tech mentorship, over 500 students have been trained so far, out of which, over 300 students were sponsored for high-tech courses. By now, over 40 students have been globally certified, and over ___ students have been hired in companies, namely, Interation Xperts, Macpac Films, TMC, SuperNova, and Rewterz.</p>
                        </div>
                    </div>
                </div>
            </div>
      {/* <div className="container-fluid py-5"
      // style={{backgroundColor:'#5A8C75', backgroundImage:`url(${CSRbg})`, backgroundRepeat:'no-repeat', backgroundPosition:" right " , width:'100%', height:'auto'}} 
      >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Our approach to build a Tech-able Pakistan</h1>
            <p>Through the rigorous marketing and outreach efforts across Pakistan, we were able to create awareness and generate 10,000 leads. 
            Within a period of 9 months, over 6000 students were provided free tech mentorship, over 500 students have been trained so far, out of which, over 300 students were sponsored for high-tech courses. By now, over 40 students have been globally certified, and over ___ students have been hired in companies, namely, Interation Xperts, Macpac Films, TMC, SuperNova, and Rewterz.</p>
          </div>
        </div>
      </div>
      </div> */}
      <div    style={{
        backgroundImage: `url(${offerbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }} className="row position-relative mt-sm-5 mt-4">
      <div className="gradientCircleLeft"></div>
      {/* <div className="gradientCircle d-none d-lg-block"></div> */}
      <div className={`${gradientCircle} d-none d-lg-block`}></div>
      <Barchart data={data}/>
      </div>
 
      <div className="d-none d-sm-block" style={{marginTop:90}}></div>
      <div
                className="container-fluid py-4 "
                style={{
                    backgroundColor: '#F7FDE8',
                    // backgroundImage: `url(${companyLogo4})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    position:"relative"
                }}
            >
      

                <div className="row d-flex justify-content-center align-items-center py-md-4">
                    <div  className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center  ">
                        <h1 className="pb-md-4 pb-lg-0 generic_heading mt-lg-2"  style={{color:'#5A8C75'}}>LET’S TALK NUMBERS</h1>
                        <br />
                        <p className="col-lg-8 col-md-12 pt-md-2 mt-md-4 p-0  mt-lg-2"  style={{color:'black'}}>Our tech tier bundles are curated with simple to complex meetings and events in mind, with multiple levels of in-room equipment and technical support. Work with our team to find the tech tier that’s right for you, or explore our custom offerings.</p>
                    </div>
                </div>
                <div className='d-sm-block d-md-none d-lg-none '>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-md-5 my-3" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <div  className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <p className="line-height-sm">Projection of Revenue in the IT Outsourcing market (2028)
                            </p>
                            <h4 className="my-2 " style={{color:'#5A8C75'}}>US$783.60m (0.15% of the total share)
                            </h4>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <p className="line-height-sm">Pakistan’s contribution (2028)
                            <h4 className="my-2 "style={{color:'#5A8C75'}}>US$1,523.00m (0.19% of the total share)           </h4>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                        <p className="line-height-sm">Projection of Revenue in the IT Outsourcing market (2028)
                        </p>
                            <h4 className="my-2 "style={{color:'#5A8C75'}}>US$783.60m (0.15% of the total share)
                            </h4>
                           
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-4" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                        <p className="line-height-sm">Pakistan’s contribution (2028)
                        </p>
                            <h4 className="my-2 "style={{color:'#5A8C75'}}>US$1,523.00m (0.19% of the total share)                           </h4>
                        </div>
                    </div>
                </div>
 
                <div className="row  px-5 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 " style={{ borderRadius: '24px',border:'3px solid #5A8C75' }}>
                        
                        <p className="line-height-sm w-75 pt-4">Projection of Revenue in the IT Outsourcing market (2024)</p>
                        <h4 className="my-2 pb-4" style={{color:'#5A8C75'}}>US$512.50bn</h4>
                    </div>
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-lg-5 mt-5 mt-lg-0" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <p className="line-height-sm pt-4 w-75">Projection of Revenue in the IT Outsourcing market (2024)</p>
                        <h4 className="my-2 pb-4" style={{color:'#5A8C75'}}>US$512.50bn</h4>
                    </div>
                </div>
                <div className='d-none d-lg-block' style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#525FE1',
                    borderRadius: '50%',
                    marginLeft: '100px',
                    position: 'relative',

                }}>
                    <div
                        className='d-none d-lg-block' style={{
                            width: '15px',
                            height: '15px',
                            backgroundColor: '#FFCF59',
                            borderRadius: '50%',
                            border: '1px solid white',
                            top: '-40px',
                            left: '-50px',
                            position: 'absolute'

                        }}>

                    </div>
                </div>
                <div className="row px-5  justify-content-center align-items-center  pb-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-5 mt-4 mt-lg-0 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <p className="line-height-sm pt-4 w-75">Projection of Revenue in the IT Outsourcing market (2028)</p>
                        <h4 className="my-2  pb-4" style={{color:'#5A8C75'}}>US$783.60m (0.15% of the total share)</h4>
                    </div>
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-lg-5 mt-5 mt-lg-0" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                      {/* <div className="co-lg-9"> */}
                      <p className="line-height-sm pt-5 w-75">Pakistan’s contribution (2028)</p>
                      <h4 className="my-2 pb-4 text-center" style={{color:'#5A8C75'}}>US$1,523.00m (0.19% of the total share)</h4>

                      {/* </div> */}
                    </div>
                </div>





       <div className="d-none d-sm-block" style={{marginTop:140,width:"100%",position:"relative"}}>
       </div>
                <div
                className="container-flud"
            >
                <div className="containe px-3 py-2 position-relative">
       <div className={`${gradientCircle1}  d-none d-lg-block`}></div>
                 
                  <h1>That’s not low – that is embarrassingly low. <span style={{color:'#5A8C75'}}> But there’s a <br className='d-none d-sm-block'/> hope!</span> </h1>
                    <div className="row  mb-sm-5 mb-3  d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 py-2">
                                <img src={AshrieTechBanner} alt=""  className='container-fluid p-0 py-md-4 pr-md-5'/>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 pb-md-4 pb-lg-0 text-center text-lg-left ">
                            <h1>This is where AshreiTech Academy comes in!</h1>
                            <p className="mt-md-3">With a laser-sharp focus of developing workforce for future technologies and catering to <br />
                            the global IT outsourcing market, we are on a mission to take this share from 0.15% to at-least 1% by 2030.</p>
                          
                        </div>
                    </div>
                    <br className='d-none d-sm-block'/>
                    <h3 className='text-center  mb-3'>And this can’t be done alone.</h3>
                    <h1 className='text-center'>And that’s where <span style={{color:'#5A8C75'}}>YOU</span>   come in.</h1>

                </div>
            </div>
            </div>
            <div className="mt-2">
            <h1 className='text-center py-sm-5 py-4'>Short-term Outcomes</h1>
            <Barchart data={singleBardata}/>
            <h3 className='text-center py-4'> Trust in their ability to succeed in the technical internship.</h3>
            </div>
            <div className="container-fluid px-sm-5 ">
                    <h1 className='text-center py-sm-5 py-4'>A Word from our Partners</h1>
                <div className={`${box} container-fluid `}>
                    <div className="row py-sm-0 py-4 px-sm-3 px-xm-0">
                        <div className="col-lg-8 col-md-8 p-0 p-sm-3 col-sm-12 d-flex flex-column justify-content-center text-center text-md-left text-lg-left ">
                            <div className="">
                                <h3 className='mb-sm-3' style={{color:"#5A8C75"}}>NASTP</h3>
                                <h1  className={`${generic_heading_left} mt-4`} style={{color:"#5A8C75"}}>
                                Run this course in-house
                                </h1>
                                <div className="mt-sm-5 mt-3">
                                    <p>Informa Connect Academy’s customised training solutions have helped organisations deliver tailored learning in different languages to suit every requirement.</p>
                                    <br />
                                    <p>Bespoke training designed for your organisation only, combining traditional classroom setting, blended and online learning models</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 py-sm-5 py-3 col-sm-12 d-flex justify-content-center align-items-center">
                            <img
                                className={`${"Laptop_Image"}`}
                                style={{ width: "100%", height: "auto" }}
                                src={AnraizUncle}
                                alt="Laptop Image"
                            />
                        </div>
                    </div>
                </div>
                </div>
           <div className="container-fluid mt-5">
           <div className="row d-flex justify-content-center align-items-center py-sm-4">
                    <div className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center ">
                        <h1 className=" mb-md-3 pb-lg-0" id="generic_heading_BookRoom">How you can Partner with us</h1>
                        {/* <p className="col-sm-8 pt-2 mt-4 font25">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p> */}
                    </div>
                </div>
           <div className="row px-5 justify-content-end">
                    <div className="col-sm-6 col-md-3  px-sm-5 d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={CardImage2} alt="" style={{height:"auto",width:"45%"}}/>
                      
                        <p className="line-height-sm mt-2 text-muted">Support on exisiting
                        state-level intervention
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3   px-sm-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={CardImage1} alt="" style={{height:"auto",width:"45%"}}/>
                        <p className="line-height-sm mt-2 text-muted">Facilitate Career guidance
                        for existing students
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3  px-sm-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={CardImage3} alt="" style={{height:"auto",width:"45%"}}/>
                        <p className="line-height-sm mt-2 text-muted">Sponsor Scholarships and
                        Finance Assistance</p>
                    </div>
                    <div className="col-sm-6 col-md-3  px-sm-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={CardImage4} alt="" style={{height:"auto",width:"45%"}} />
                        <p className="line-height-sm mt-2 text-muted">Co-create adolescent 
                        expowerment & intervention
</p>
                    </div>

                </div>
           </div>
            
               
  <div className="mt-sm-5">
    <h1 className='text-center'>Stories of impact</h1>
    <div className="mt-n3 pb-sm-5">
    <TestimonialSlider/>
    </div>
  </div>
      
      <Footer />
    </>
  )
}

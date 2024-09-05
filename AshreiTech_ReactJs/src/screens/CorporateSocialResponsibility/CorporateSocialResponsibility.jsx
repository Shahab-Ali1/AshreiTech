import React from 'react'
import Footer from '../../components/Sections/Footer/Footer'
import TopNavbar from '../../components/Nav/TopNavbar'
import TestimonialSlider from '../../components/Elements/TestimonialSlider'
import companyLogo4 from '../../assets/aboutTheCompany/companyLogo4.png';
import AshrieTechBanner from '../../assets/AshrieTechBanner.png'
import vector1 from '../../assets/vector1.gif';
import vector2 from '../../assets/vector2.gif';
import vector3 from '../../assets/vector3.gif';
import vector4 from '../../assets/vector4.gif';
import wave from '../../assets/WhatWeDo/Wave2.png'



// import Sohail_zindani from '../../assets/Sohail_zindani.png'
// import CSRbg from '../../assets/CSRbg.png'

export default function CorporateSocialResponsibility() {
  return (
    <>
      <TopNavbar />


      <div className="container-fluid" style={{backgroundColor:"#f7fde8"}}>
        <div className="row px-4 mb-4 d-flex justify-content-center align-items-center">
          <div className="col-lg-6 p-0">
            <h1 style={{lineHeight:'0.9'}} className='mb-4'>Meet Our <br /> <span style={{fontSize:'28px', backgroundColor:'#053750', padding:'5px 12px',  borderRadius:'5px', color:'white' , letterSpacing:'4px'}}>Founder</span> </h1>
            <p>Sohail is on a mission to "create a world of work where everyone can be their natural best, feel belonged and experience advancement."
              He has devoted his life to sharing his thinking in order to help other leaders and organizations develop an agile learning culture.
              Sohail's unconventional and disruptive views on talent, learning
              leadership and business have attracted significant attention.
              Sohail spends a significant time studying individuals, teams and organizations to understand what makes world-class performers, summarizing it, and sharing it with the world.</p>
          </div>
          <div className="col-6">
            {/* <img src={Sohail_zindani} alt=""  style={{ width:'100%' , height:'auto' }}/> */}
          </div>
        </div>
      </div>
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
                <div className="container py-5 ">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                      
                        <div className="col-lg-9 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center ">
                            <h1 className='text-center ' id="generic_heading_BookRoom">Our approach to build a Tech-able Pakistan</h1>
                            <br />
                            <p className="mt-3 text-center text-white">Through the rigorous marketing and outreach efforts across Pakistan, we were able to create awareness and generate 10,000 leads. <br />
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
      <div
                className="container-fluid py-4 "
                style={{
                    backgroundColor: '#F7FDE8',
                    // backgroundImage: `url(${companyLogo4})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="row d-flex justify-content-center align-items-center py-4">
                    <div  className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center  ">
                        <h1 className="pb-md-4 pb-lg-0 generic_heading mt-lg-2"  style={{color:'#5A8C75'}}>LET’S TALK NUMBERS</h1>
                        <br />
                        <p className="col-lg-8 col-md-12 pt-md-2 mt-md-4 p-0  mt-lg-2"  style={{color:'black'}}>Our tech tier bundles are curated with simple to complex meetings and events in mind, with multiple levels of in-room equipment and technical support. Work with our team to find the tech tier that’s right for you, or explore our custom offerings.</p>
                    </div>
                </div>
                <div className='d-sm-block d-md-none d-lg-none '>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={companyLogo4} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 ">Venue At The Heart Of The City –
                            </h4>
                            <p className="line-height-sm">Located inside NASTP, Karachi, with shaded parking space for up to 500 cars!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={companyLogo4} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 ">Segregated Prayer Area –                            </h4>
                            <p className="line-height-sm">Neat and tidy, for ladies and gentlemen, with ample rest rooms on every floor!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={companyLogo4} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 " style={{ color: 'black !important' }} >24/7 Wi-Fi –
                            </h4>
                            <p className="line-height-sm">Obviously, it’s not a luxury – it’s a necessity, because we are serving a global world!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={companyLogo4} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 ">High-Tech Learning Venue –                            </h4>
                            <p className="line-height-sm">Of Course, we are a tech company, and we know the importance of tech amenities!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12  px-5 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 " style={{ borderRadius: '24px',border:'3px solid #5A8C75' }}>
                        
                        <p className="line-height-sm w-75 pt-4">Projection of Revenue in the IT Outsourcing market (2024)</p>
                        <h4 className="my-2 pb-4" style={{color:'#5A8C75'}}>US$512.50bn</h4>
                    </div>
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
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
                <div className="col-12 px-5  justify-content-center align-items-center  pb-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <p className="line-height-sm pt-4 w-75">Projection of Revenue in the IT Outsourcing market (2028)</p>
                        <h4 className="my-2  pb-4" style={{color:'#5A8C75'}}>US$783.60m (0.15% of the total share)</h4>
                    </div>
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                      <div className="co-lg-9">
                      <p className="line-height-sm pt-5 w-75">Pakistan’s contribution (2028)</p>
                      <h4 className="my-2 pb-4 text-center" style={{color:'#5A8C75'}}>US$1,523.00m (0.19% of the total share)</h4>

                      </div>
                    </div>
                </div>






                <div
                className="container-flud"
            >
                <div className="containe px-3 py-2">
                 
                  <h1>That’s not low – that is embarrassingly low. <span style={{color:'#5A8C75'}}> But there’s a <br /> hope!</span> </h1>
                    <div className="row  mb-5  d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 py-2">
                                <img src={AshrieTechBanner} alt=""  className='container-fluid p-0 py-md-4 pr-md-5'/>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 pb-md-4 pb-lg-0 text-center text-lg-left ">
                            <h1>This is where AshreiTech Academy comes in!</h1>
                            <p className="mt-md-3">With a laser-sharp focus of developing workforce for future technologies and catering to <br />
                            the global IT outsourcing market, we are on a mission to take this share from 0.15% to at-least 1% by 2030.</p>
                          
                        </div>
                    </div>
                    <br />
                    <h3 className='text-center  mb-3'>And this can’t be done alone.</h3>
                    <h1 className='text-center'>And that’s where <span style={{color:'#5A8C75'}}>YOU</span>   come in.</h1>

                </div>
            </div>
            </div>
            <div className="row px-5 justify-content-end">
                    <div className="col-sm-3 px-5 d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector1} alt="" style={{height:"auto",width:"25%"}}/>
                      
                        <p className="line-height-sm  text-muted">Support on exisiting
                        state-level intervention
                        </p>
                    </div>
                    <div className="col-sm-3  px-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector2} alt="" style={{height:"auto",width:"25%"}}/>
                        <p className="line-height-sm  text-muted">Facilitate Career guidance
                        for existing students
                        </p>
                    </div>
                    <div className="col-sm-3 px-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector3} alt="" style={{height:"auto",width:"25%"}}/>
                        <p className="line-height-sm  text-muted">Sponsor Scholarships and
                        Finance Assistance</p>
                    </div>
                    <div className="col-sm-3 px-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector4} alt="" style={{height:"auto",width:"25%"}} />
                        <p className="line-height-sm  text-muted">Co-create adolescent 
                        expowerment & intervention
</p>
                    </div>

                </div>
      <TestimonialSlider/>
      <Footer />
    </>
  )
}

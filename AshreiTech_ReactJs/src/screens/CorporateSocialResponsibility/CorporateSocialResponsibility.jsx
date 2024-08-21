import React from 'react'
import Footer from '../../components/Sections/Footer/Footer'
import TopNavbar from '../../components/Nav/TopNavbar'
// import Sohail_zindani from '../../assets/Sohail_zindani.png'
// import CSRbg from '../../assets/CSRbg.png'

export default function CorporateSocialResponsibility() {
  return (
    <>
      <TopNavbar />
      <div className="container-fluid" style={{backgroundColor:"#f7fde8"}}>
        <div className="row px-4 mb-5 d-flex justify-content-center align-items-center">
          <div className="col-8">
            <h1 style={{lineHeight:'0.9'}} className='mb-4'>Meet Our <br /> <span style={{fontSize:'28px', backgroundColor:'#053750', padding:'5px 12px',  borderRadius:'5px', color:'white' , letterSpacing:'4px'}}>Founder</span> </h1>
            <p>Sohail is on a mission to "create a world of work where everyone can be their natural best, feel belonged and experience advancement."
              He has devoted his life to sharing his thinking in order to help other leaders and organizations develop an agile learning culture.
              Sohail's unconventional and disruptive views on talent, learning
              leadership and business have attracted significant attention.
              Sohail spends a significant time studying individuals, teams and organizations to understand what makes world-class performers, summarizing it, and sharing it with the world.</p>
          </div>
          <div className="col-4">
            {/* <img src={Sohail_zindani} alt=""  style={{ width:'100%' , height:'auto' }}/> */}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5"
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
      </div>
      <Footer />
    </>
  )
}

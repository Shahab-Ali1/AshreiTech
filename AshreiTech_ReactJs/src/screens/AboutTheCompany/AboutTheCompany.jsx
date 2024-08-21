import React, { useState } from 'react'
import style from "./style.module.css"
import TopNavbar from '../../components/Nav/TopNavbar'
import section2banner from '../../assets/aboutSection2banner.png'
import section1banner from '../../assets/aboutSection1banner.png'
import Footer from '../../components/Sections/Footer/Footer'

import vector1 from '../../assets/aboutcard1.png'
import vector2 from '../../assets/aboutcard2.png'
import vector3 from '../../assets/aboutcard3.png'
import vector4 from '../../assets/aboutcard4.png'
import BookaScreenHeroContainer from '../../assets/BookaScreen/BookaScreenHeroContainer.png';
import BookaScreenHero from '../../assets/BookaScreen/BookaScreenHero.png';
import bg from '../../assets/missonbackground.png'
import animation1 from '../../assets/aboutAnimation1.png'
import animation2 from '../../assets/aboutAnimation2.png'
import animation3 from '../../assets/aboutAnimation3.png'
import animation4 from '../../assets/aboutAnimation4.png'
 import azharAli from '../../assets/aboutTheCompany/azharAli.png'
 import azharAliabout from '../../assets/aboutTheCompany/azharAliAbout.png'
 import shohailZindaniAbout from '../../assets/aboutTheCompany/shohailZindaniAbout.png'
 import haiderWaheedAbout from '../../assets/aboutTheCompany/haiderWaheedAbout.png'
 import rahimIqbalAbout from '../../assets/aboutTheCompany/rahimIqbalAbout.png'
 import EhsanSayaAbout from '../../assets/aboutTheCompany/EhsanSayaAbout.png'
 import ibrahiShamsiAbout from '../../assets/aboutTheCompany/ibrahiShamsiAbout.png'
 import companyLogo1 from '../../assets/aboutTheCompany/companyLogo1.png'
 import companyLogo2 from '../../assets/aboutTheCompany/companyLogo2.png'
 import companyLogo3 from '../../assets/aboutTheCompany/companyLogo3.png'
 import companyLogo4 from '../../assets/aboutTheCompany/companyLogo4.png'
 import companyLogo5 from '../../assets/aboutTheCompany/companyLogo5.png'
 import companyLogo6 from '../../assets/aboutTheCompany/companyLogo6.png'
 import companyLogo7 from '../../assets/aboutTheCompany/companyLogo7.png'
//  import azharali2 from '../../assets/aboutTheCompany/azharAli2.png'

 const card=[
    {
        logo:animation1,
        title:"Learning is our choice.",
        discription:"We embrace continuous learning and view every challenge as an opportunity for growth."
    },
    {
        logo:animation2,
        title:"Learning is our choice.",
        discription:"We embrace continuous learning and view every challenge as an opportunity for growth."
    },
    {
        logo:animation3,
        title:"Learning is our choice.",
        discription:"We embrace continuous learning and view every challenge as an opportunity for growth."
    },
    {
        logo:animation3,
        title:"Learning is our choice.",
        discription:"We embrace continuous learning and view every challenge as an opportunity for growth."
    },
 ]
 const cardColors = ['#ffd393', '#9fffeb', '#eae1b0', '#93c7af',];
 const images = [
    { thumbnail: azharAli, full: azharAliabout },
    { thumbnail: azharAli, full: shohailZindaniAbout },
    { thumbnail: azharAli, full: haiderWaheedAbout },
    { thumbnail: azharAli, full: rahimIqbalAbout },
    { thumbnail: azharAli, full: EhsanSayaAbout },
    { thumbnail: azharAli, full: ibrahiShamsiAbout },
];
const logos = [
    {
        logo: companyLogo1,
        description: 'Empowering Innovation and Excellence'
    },
    {
        logo: companyLogo2,
        description: 'Commitment to Quality and Integrity'
    },
    {
        logo: companyLogo3,
        description: 'Driven by Passion and Purpose'
    },
    {
        logo: companyLogo4,
        description: 'Collaboration for Greater Impact'
    },
    {
        logo: companyLogo5,
        description: 'Sustainability at the Core'
    },
    {
        logo: companyLogo6,
        description: 'Customer-Centric Approach'
    },
    {
        logo: companyLogo7,
        description: 'Continuous Learning and Growth'
    }
];

const AboutTheCompany = () => {
    const { box1, box2, parent_box,zain, transition_image,section_2,card_discription,card_title, banner_container, view_all, section1_banner_container ,card_hover,card_container,active_card,blur_container} = style
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [hoverImage , setHoverImage] = useState(null)
    const [active , setActive] = useState(false)

    const handleMouseEnter = (index) => {
        setTimeout(() => {
            
            setHoverImage(index);
        }, 120);
    };

    const handleMouseLeave = () => {
        console.log("Mouse left"); 
        setHoverImage(null);
    };
    return (
        <>
            <TopNavbar />
            <div
                className="container-fluid py-4"
                style={{
                    // backgroundImage: `url(${BookaScreenHeroContainer})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                }}
            >
                <div className={`row m-auto  d-sm-flex d-none ${section1_banner_container}`} style={{ width: "90%" }}>
                    <div
                        className={`col-12 py- containr x-sm-5 ${zain}`}
                        style={{
                            backgroundImage: `url(${section1banner})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            // height: '632px',
                            width: '90%',
                            borderRadius: '50px',
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5 text-center w-75" style={{position:"relative",zIndex:2}}>
                            <h1 className=" text-white font40" style={{width:"80%"}}>Empowering Tech Enthusiasts to shape the future</h1>
                            <div className="row justify-content-center" >
                                <div className="col-lg-10">

                            <h5 className="text-white my-4 font16">At AshreiTech Academy, We are on a mission to equip individuals with the technical and soft skills they need to thrive in the ever-evolving tech industry. Our dynamic programs and collaborative learning environment provide endless opportunities for growth and innovation</h5>
                                </div>
                            </div>
                            <button className={`border-0 rounded-3 bg-white px-sm-4  px-2 font25 ${view_all}`} style={{ borderRadius: 5 }}>View All Courses</button>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                    
                  
                </div>
                <div className={`${parent_box}  row`} style={{
                // backgroundImage: `url(${bg})`,
              
            }}
            onMouseEnter={()=>setActive(true)}
            onMouseLeave={()=>setActive(false)}
            >  
            {
                active?  <div className={`row ${blur_container}`}>
                <div className={`col-12 col-sm-6 text-center ${box1}`}>
                    <h1 className='mb-2'>Our Mission</h1>
                    <p className='font25'>Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                </div>
                <div className={`col-12 col-sm-6 text-center ${box2}`}>
                    <h1 className='mb-2'>Our Vision</h1>
                    <p className='font25'>Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                </div>
                </div> :
                <>
                    <div className={`col-12 col-sm-6 text-center ${box1}`}>
                    <h1 className='mb-2'>Our <br/> Mission</h1>
                </div>
                <div className={`col-12 col-sm-6 text-center ${box2}`}>
                    <h1 className='mb-2'>Our <br/> Vision</h1>
                </div>
                </>
            }
               
            </div>
                <div className={`row  d-sm-none d-block m-auto  ${section1_banner_container}`} style={{ width: "90%" }}>
                    <div 
                        className={`col-12  px-4 ${zain}`}
                        style={{
                            backgroundImage: `url(${section1banner})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: '157px',
                            // width: '90%',
                            // borderRadius: '50px',
                            // display: "flex",
                            // justifyContent: "center"
                        }}
                    >
                        <div className="flex-column justify-content-center align-items-center  text-center " style={{position:"relative",zIndex:2}}>
                            <p className="font-weight-bold text-white font15 pt-1" style={{width:""}}>Empowering Tech Enthusiasts to shape the future</p>
                            <h5 className="text-white my-1 font12">At AshreiTech Academy, We are on a mission to equip individuals with the technical and soft skills they need to thrive in the ever-evolving tech industry. Our dynamic programs and collaborative learning environment provide endless opportunities for growth and innovation</h5>
                            <button className={`border-0 rounded-3 bg-white   px-2  ${view_all}`} style={{ borderRadius: 5 }}>View All Courses</button>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                </div>
            </div>
            <div className={`${section_2}`}>
                <div className="row justify-content-center">
                    <h1 className='text-center mt-sm-5 mb-1'>How Ashrei Tech Came Into Being</h1>
                    <div className='row justify-content-center text-center pb-4'>
                        <div className="col-7">
                        <p className='  text-muted font20 lh-0'>Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>

                        </div>
                    </div>
                 
                    {/* <div className={`${banner_container}`}>
                        <img src={section2banner} alt="" srcset="" />
                    </div> */}
                </div>
             <div className="">
                {
                    images.map(({full},index)=>{
                        return <>
                             {
                                index ==  hoverImage ?  <div   onMouseLeave={()=>{
                                    debugger;
                                    handleMouseLeave()
                                }} className='row' style={{background:""}}>
                                    <div className="">
                                    <img src={full} alt="" srcset=""  className={`${transition_image}`} style={{width:"100%",height:"100%"}}/>
            
                                    </div>
                               
                                </div>: ""
                             }
                        </>
                    })
                }
             </div>



<div className="row" style={{flexWrap:"nowrap"}}>
{
    null ==  hoverImage? 
    images.map(({thumbnail},index)=>{
        return    <div className="col p-0 mr-1 "                             onMouseEnter={()=>{
            handleMouseEnter(index)
        }}
>
         <img src={thumbnail} alt="" className='container-  h-auto w-100' srcset="" />
        </div>
    }): ""
}
</div>
               
            </div>

            <div className="row px-5">
    <h1>Our Core Values: The Pillars of Our Success</h1>
    <h5>Guiding Principles that Shape Our Vision and Drive Our Mission</h5>
    <div className="col-8">
        <div className="row">
            {logos?.map(({ logo, description }, index) => (
                <div className="col-5 mb-3" key={index}>
                    <div className="row align-items-center">
                        <div className="col-2">
                            <img src={logo} alt={`Company Logo ${index + 1}`} />
                        </div>
                        <div className="col-10">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            ))}

{/* <div className="col-5 mb-3 p-0" key={index}>
            <div className="row align-items-center">
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <div className={`${circle} d-flex justify-content-center align-items-center`}>
                        <img src={logo} alt={`Company Logo ${index + 1}`} className={`${logo_img}`} />
                    </div>
                </div>
                <div className="col-10">
                    <p>{description}</p>
                </div>
            </div>
        </div> */}
        </div>
    </div>
    <div className="col-4"></div>
</div>


            <div
                className="container-fluid py-4 "
                style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: 0,
                }}
            >
                <div className="row d-flex justify-content-center align-items-center py-4">
                    <div className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center ">
                        <h1 className=" pb-sm-4 pb-lg-0" id="generic_heading_BookRoom">Our Achievements</h1>
                        <p className="col-sm-8 pt-2 mt-4 font25">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                    </div>
                </div>
                
                <div className="row px-5 justify-content-end">
                    <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ">
                        <img src={vector1} alt="" />
                        <h3 className="my-2 font-weight-bolder">Learning is our choice.</h3>
                        <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ">
                        <img src={vector2} alt="" />
                        <h3 className="my-2 font-weight-bolder">Learning is our choice.</h3>
                        <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ">
                        <img src={vector3} alt="" />
                        <h3 className="my-2 font-weight-bolder">Learning is our choice.</h3>
                        <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ">
                        <img src={vector4} alt="" />
                        <h3 className="my-2 font-weight-bolder">Learning is our choice.</h3>
                        <p className="line-height-sm">We embrace continuous learning and view every challenge as an opportunity for growth.</p>
                    </div>

                </div>
            </div>
           
            <Footer />
        </>
    )
}

export default AboutTheCompany
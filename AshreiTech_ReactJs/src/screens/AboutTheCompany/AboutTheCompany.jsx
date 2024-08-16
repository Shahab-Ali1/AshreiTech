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
 import azharAliabout from '../../assets/aboutTheCompany/azharAliabout.png'
 import azharali2 from '../../assets/aboutTheCompany/azharAli2.png'

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

const AboutTheCompany = () => {
    const { box1, box2, parent_box,zain, section_2,card_discription,card_title, banner_container, view_all, section1_banner_container ,card_hover,card_container,active_card,blur_container} = style
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [hoverImage , setHoverImage] = useState(false)
    const [active , setActive] = useState(false)

    const handleMouseEnter = () => {
        setHoverImage(true);
    };

    const handleMouseLeave = () => {
        console.log("Mouse left"); 
        setHoverImage(false);
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

                {
                    hoverImage ? <div   onMouseLeave={()=>{
                        debugger;
                        handleMouseLeave()
                    }} className='row' style={{background:""}}>
                        <div className="">
                        <img src={azharAliabout} alt="" srcset=""  style={{width:"100%",height:"100%"}}/>

                        </div>
                   
                    </div> :  <div className="row" style={{flexWrap:"nowrap"}}>
                    <div className="col p-0 mr-1 "                             onMouseEnter={()=>{
                        handleMouseEnter()
                    }}
                          
 >
                     <img src={azharAli} alt="" className='container-  h-auto w-100' srcset="" />
                    </div>
                    <div className="col p-0 mr-1 ">
                     <img src={azharAli} alt="" className='container-  h-auto w-100'   srcset="" />
                    </div>
                    <div className="col p-0 mr-1 ">
                     <img src={azharAli} alt="" className='container-  h-auto w-100'   srcset="" />
                    </div>
                    <div className="col p-0 mr-1 ">
                     <img src={azharAli} alt="" className='container-  h-auto w-100'   srcset="" />
                    </div>
                    <div className="col p-0 mr-1 ">
                     <img src={azharAli} alt="" className='container-  h-auto w-100'   srcset="" />
                    </div>
                    <div className="col p-0 mr-1 ">
                     <img src={azharAli} alt="" className='container-  h-auto w-100'   srcset="" />
                    </div>
                </div>
                }
               
            </div>


      
            <div
                className="container-fluid py-4 "
                style={{
                    // backgroundImage: `url(${wave2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: 0,
                    background:"rgba(255, 222, 142, 1)"
                }}
            >
                <div className="row d-flex justify-content-center align-items-center py-4">
                    <div className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center ">
                        <h1 className=" pb-sm-4 pb-lg-0" id="">What Makes Us Unqiue</h1>
                        <p className="col-md-12  col-lg-8 pt-2 mt-4 font25">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>
                    </div>
                </div>
                
                <div className={`row mx-2 px-sm-5`}  >
                    {
                        card?.map(({logo,title,discription},index)=>{
                            const backgroundColor = hoveredIndex === index ? cardColors[index % cardColors.length] : 'white';
                            return    <div style={
                                {backgroundColor } } onMouseEnter={() => {
                                setHoveredIndex(index)
                              }}
                            onMouseLeave={() => setHoveredIndex(0)} className={`  ${hoveredIndex == index ? active_card: card_container} text-black p-4 ${hoveredIndex}  ${card_hover}`}>
                    <img src={logo} style={{height:80}} alt=""  className='mb-xl-5 mb-lg-3'/>
                    <p className={`my-2 font-weight-bolder font20 mt-3 ${card_title}`}>{title}</p>
                    <p className={`line-height-sm ${card_discription}`}>{discription}</p>
                </div>
                        })
                    }

{/* {`col-sm-3 d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ${card_hover}` */}
                </div>
            </div>
            <div
                className="container-fluid py-4 "
                style={{
                    // backgroundImage: `url(${wave2})`,
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
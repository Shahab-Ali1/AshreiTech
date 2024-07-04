import React, { useState } from "react";
import style from "./style.module.css";
import TopNavbar from "../../components/Nav/TopNavbar";
import teams_banner from "../../assets/teams_banner.png";
import teams_member_1 from "../../assets/teams_member_1.png";
import teams_member_2 from "../../assets/teams_member_2.png";
import teams_member_3 from "../../assets/teams_member_3.png";
import teams_member_4 from "../../assets/teams_member_4.png";
import teams_member_5 from "../../assets/teams_member_5.png";
import teams_member_6 from "../../assets/teams_member_6.png";
import teams_member_7 from "../../assets/teams_member_7.png";
import teams_member_8 from "../../assets/teams_member_8.png";
import teams_member_9 from "../../assets/teams_member_9.png";
import teams_member_10 from "../../assets/teams_member_10.png";
import teams_member_11 from "../../assets/teams_member_11.png";
import teams_member_12 from "../../assets/teams_member_12.png";
import Footer from "../../components/Sections/Footer/Footer";

const teamMember=[
    {
        name:"Sohail Zindani",
    },
    {
        name:"Syed Sajjad Hussain",
    }, {
        name:"Adnan Ahmed",
    },
    {
        name:"Azmeena Furniturewala",
        img:teams_member_2
    },
    {
        name:"Ghulam Muhammad Soomro",
        img:teams_member_4
    },
    {
        name:"Kanwal Rizvi",
        img:teams_member_5
    },
    {
        name:"Maryiam Pervaiz",
    },
    {
        name:"M.Khurram Muqueem Khan",
        img:teams_member_12
    },
    {
        name:"Mufarrah Malik",

        img:teams_member_6
    },
    {
        name:"Samra Mazhar",
        img:teams_member_9
    },
    {
        name:"Talha Shabbir",
        img:teams_member_7
    },
   
    {
        name:'Arsalan Ahmed',
        img:teams_member_1
    },
    {
        name:"Farrukh Hussain Lodhi",
        img:teams_member_3
    },
    {
        name:"Humra Tahir",
    },
    {
        name:"Jamshed",
    },
     {
        name:"Noman Ali",
        img:teams_member_10
    },
    {
        name:"Samul Shah",
        img:teams_member_8
    },
    {
        name:"Syed Talha Asad",
    },
    {
        name:"Unsar Hameed",
        img:teams_member_11
    },
]
const { team_comtainer, banner_container, teams_image, gradientCircle, members_container,img_container,hover_content,shadow } = style;

const Teams = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
            <TopNavbar />
            <div className={`${team_comtainer}`}>
                <div className={`${banner_container}`}>
                    <img src={teams_banner} alt="" srcset="" />
                </div>
                <div className={`${members_container}`}>
                    <h1 className="text-center my-5">With over years of experience combined.</h1>
                    <div className="row px-2">
                        {
                            teamMember?.map(({name,img},index)=>{
                                return <div  onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)} className={`col-12 mb-5 mt-2 col-sm-6 col-md-4 col-lg-3 ${img_container}`}>
                                <img src={img} alt="Team Member 1" className={`img-flui ${teams_image}`} />
                                 <h3 className="text-center">{name}</h3>
                                 <p className="text-center font20">designation</p>
                                 {true && (
                                        <div className={hover_content}>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, expedita dignissimos? Ab fugiat esse hic.</p>
                                            <div className={`${shadow}`}></div>
                                            <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                    )}
                            </div>
                            })
                        }
                        <div className={`${gradientCircle}`}></div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Teams;

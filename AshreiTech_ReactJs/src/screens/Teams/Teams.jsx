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
import teams_member_13 from "../../assets/teams_member_13.png";
import teams_member_14 from "../../assets/teams_member_14.png";
import teams_member_15 from "../../assets/teams_member_15.png";
import teams_member_16 from "../../assets/teams_member_16.png";
import Footer from "../../components/Sections/Footer/Footer";

const teamMember=[
    {
        name:"Sohail Zindani",
        img:teams_member_14,
        designation:"Director and CEO",
        linkdIn:"https://www.linkedin.com/in/sohailzindani/"
    },
    // {
    //     name:"Syed Sajjad Hussain",
    // }, 
    {
        name:"Adnan Ahmed",
        img:teams_member_13,
        designation:"Operations Head",
        discription:"Adnan, leading operations at AshreiTech Academy, is pivotal for keeping things running smoothly and maintaining a friendly atmosphere. The team often seeks him out for his problem-solving skills and practical advice, which helps keep the workplace dynamic and harmonious. His commitment ensures that everything at the academy works well, making him a crucial member of the team.",
        linkdIn:"https://www.linkedin.com/in/adnan-ahmed-92b80235/"

    },
    {
        name:"Azmeena Furniturewala",
        img:teams_member_2,
        designation:"Head of Marketing and Communications",
        discription:`A MarCom professional with over 9 years of experience, in simple words, "Work inspires her." Embarking on a journey from science to advertising, her evolution into a strategic and adaptive marketer has been nothing short of thrilling. From navigating the agency experience of handling FMCG portfolios to transitioning to the brand side of the training and IT industry, her diverse experience fuels her passion for innovation, keeping the spark for advertising alive.
 She loves connecting with people and content that help her become a better individual in society, enjoys making floral arrangements, and loves to sing.`,
 linkdIn:"https://www.linkedin.com/in/azmeena-k/"

    },
    {
        name:"Ghulam Muhammad Soomro",
        img:teams_member_4,
        designation:"Community Manager",
        discription:"At AshreiTech Academy, G.M is the driving force behind a vibrant tech community. Leveraging his entrepreneurial experience, he nurtures the next generation of tech talent by guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he fosters a thriving tech community.",
        linkdIn:"https://www.linkedin.com/in/gm95soomro/"


    },
    {
        name:"Kanwal Rizvi",
        img:teams_member_5,
        designation:"Assistant Administrative",
        discription:"Kanwal is a dynamic HR professional specializing in talent acquisition, employee engagement, and organizational development. She crafts innovative HR strategies that drive performance and create an inclusive workplace. With a keen eye on strategic planning and HR analytics, she’s committed to boosting efficiency and employee satisfaction.",
        linkdIn:"https://www.linkedin.com/in/kanwal-abidi-a66b262ab/"
    },
    // {
    //     name:"Maryiam Pervaiz",
    // },
    {
        name:"M.Khurram Muqueem Khan",
        img:teams_member_12,
        designation:"Financial Controller",
        discription:"Thriving as a results-driven finance professional, he is a trusted team player and valuable partner to business and service functions. He cultivates key organizational competencies by championing simplicity, collaboration, trust, innovation, and customer-centricity, all with unwavering integrity.",
        linkdIn:""

    },
    {
        name:"Mufarrah Malik",

        img:teams_member_6,
        designation:"Head of Partnerships and Outreach",
        discription:`A dynamic and results-oriented professional with a proven track record in corporate liaison, events and 
stakeholder management. Experienced in cultivating impactful partnerships, executing events, and facilitating personal and professional development workshops. Skilled in communication, process optimization, and team collaboration.`,
linkdIn:"https://www.linkedin.com/in/mufarrah/"
        

    },
    {
        name:"Samra Mazhar",
        img:teams_member_9,
        designation:"HR & Event Manager",
        discription:"Samra, the Placements and Events Lead at AshreiTech Academy, is a dynamic and approachable professional known for her enthusiasm and dedication. A true people's person, she brings a warm and engaging presence to every interaction. Passionate about her role, Samra ensures all her responsibilities are met with utmost seriousness and a smile.",
        linkdIn:"https://www.linkedin.com/in/samra-m-1782b5201/"

    },
    {
        name:"Talha Shabbir",
        img:teams_member_7,
        designation:"Head, Corporate Trainings & Events",
        discription:"Talha heads Corporate Trainings & Events at AshreiTech, where his 10+ years of expertise in event management, business development, and strategy shine. Thriving under pressure, he crafts standout marketing strategies and leverages digital platforms with finesse. A growth enthusiast, Talha loves traveling, playing cricket, and tackling new challenges, making him an invaluable asset to any team.",
        linkdIn:"https://www.linkedin.com/in/talhashabbir/"

    },
   
    {
        name:'Arsalan Ahmed',
        img:teams_member_1,
        designation:"Accounts Officer",
        discription:"As the finance officer, Arsalan supports the financial operations of this organization by processing transactions and maintaining financial records. He also excels in analyzing financial data, offering valuable insights and support to senior finance professionals. Moreover, Arsalan plays a crucial role in ensuring accuracy in financial reporting and compliance with internal policies and regulations.",
        linkdIn:"https://www.linkedin.com/in/arsalan-ahmed-708974106/"
        
    },
    {
        name:"Farrukh Hussain Lodhi",
        img:teams_member_3,
        designation:"Assistant Manager Accounts/Tax",
        discription:"",
        linkdIn:""

    },
    // {
    //     name:"Humra Tahir",
    // },
    // {
    //     name:"Jamshed",
    // },
     {
        name:"Noman Ali",
        img:teams_member_10,
        designation:"Admin & Operations Lead",
        discription:"An experienced Admin and Operations professional who oversees day-to-day operations to ensure efficiency and productivity across all departments. With a focus on optimizing organizational performance, He expertly coordinates administrative tasks, streamlines processes, and implements effective strategies.",
        // Dedicated to maintaining a supportive environment, fostering teamwork and enhances overall operational effectiveness, contributing significantly to the success of the organization.
        linkdIn:""

    },
    {
        name:"Samul Shah",
        img:teams_member_8,
        designation:"Digital Strategist & Designer",
        discription:"Samul is a visionary digital strategist and designer passionate about crafting innovative and user-friendly digital designs. Always on the lookout for fresh ideas, she seamlessly blends creativity and strategy in every project, ensuring that the Academy's name and motto shine through each post.",
        // Her work is a canvas reflecting her vibrant personality: a blend of creativity, joy, and a spirited dedication to excellence.
        linkdIn:"https://www.linkedin.com/in/samul-shah-9528aa216/"

    },
    {
        name:"Syed Talha Asad",
        img:teams_member_15,
        designation:"IT Administrator",
        discription:"As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.",
        // , ensuring optimal business performance.
        linkdIn:"https://www.linkedin.com/in/syed-talha-asad-71b6b1142/"


    },
    {
        name:"Humra Tahir",
        img:teams_member_11,
        designation:"Executive-Marcom",
        linkdIn:"https://www.linkedin.com/in/humra-tahir/",
        discription:`Humra is a final-year Mass Communication student and MarCom Executive at AshreiTech Academy. With a knack for creativity, she crafts marketing content that truly engages and stands out. Humra blends her academic knowledge with hands-on experience, bringing fresh, compelling ideas to the table. 
`
// Whether it's a catchy campaign or an engaging social media post, Humra knows how to make it shine. She's a talented and enthusiastic marketer who’s ready to take on any challenge and make an impact.
 ,linkdIn:"https://www.linkedin.com/in/humra-tahir/"
    },
    {
        name:"Unsar hameed",
        img:teams_member_16,
        designation:"IT Manager",
        discription:"As a seasoned IT Manager, Unsar leads technology strategy and innovation, driving business transformation and growth with effective IT solutions and agile leadership. With expertise in IT service management and digital transformation, he creates impactful solutions that enhance collaboration and efficiency.",
        // , helping organizations achieve their strategic goals.
        linkdIn:"https://www.linkedin.com/in/unsar-hameed-379896106/"


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
                            teamMember?.map(({name,linkdIn,designation,discription,img},index)=>{
                                return <div  onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)} className={`col-12 mb-5 mt-2 col-sm-6 col-md-4 col-lg-3 ${img_container}`}>
                                <img src={img} alt="Team Member 1" className={`img-flui ${teams_image}`} />
                                 <h3 className="text-center">{name}</h3>
                                 <p className="text-center font20">{designation ?? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora alias provident, earum nam facilis tempore? Odit iusto similique vero?"}</p>
                                 {hoveredIndex == index  && (
                                        <div className={hover_content}>
                                            <p>{discription}</p>
                                            <div className={`${shadow}`}></div>
                                          <a href={linkdIn} target="_blank" className="text-white">  <i class="fa-brands fa-linkedin"></i></a> 
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

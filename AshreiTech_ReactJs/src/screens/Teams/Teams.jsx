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
import './team.css';

const teamMember = [
    {
        name: "Sohail Zindani",
        img: teams_member_14,
        designation: "Director and CEO",
        linkdIn: "https://www.linkedin.com/in/sohailzindani/"
    },
    // {
    //     name:"Syed Sajjad Hussain",
    // }, 
    {
        name: "Adnan Ahmed",
        img: teams_member_13,
        designation: "Operations Head",
        discription: "Adnan, leading operations at AshreiTech Academy, is pivotal for keeping things running smoothly and maintaining a friendly atmosphere. The team often seeks him out for his problem-solving skills and practical advice, which helps keep the workplace dynamic and harmonious. His commitment ensures that everything at the academy works well, making him a crucial member of the team.",
        linkdIn: "https://www.linkedin.com/in/adnan-ahmed-92b80235/"

    },
    {
        name: "Azmeena Furniturewala",
        img: teams_member_2,
        designation: "Head of Marketing and Communications",
        discription: `A MarCom professional with over 9 years of experience, in simple words, "Work inspires her." Embarking on a journey from science to advertising, her evolution into a strategic and adaptive marketer has been nothing short of thrilling.`,
        linkdIn: "https://www.linkedin.com/in/azmeena-k/"

    },
    {
        name: "Ghulam Muhammad Soomro",
        img: teams_member_4,
        designation: "Community Manager",
        discription: "At AshreiTech Academy, G.M is the driving force behind a vibrant tech community. Leveraging his entrepreneurial experience, he nurtures the next generation of tech talent by guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he fosters a thriving tech community.",
        linkdIn: "https://www.linkedin.com/in/gm95soomro/"


    },
    {
        name: "Kanwal Rizvi",
        img: teams_member_5,
        designation: "Assistant Administrative",
        discription: "Kanwal is a dynamic HR professional specializing in talent acquisition, employee engagement, and organizational development. She crafts innovative HR strategies that drive performance and create an inclusive workplace. With a keen eye on strategic planning and HR analytics, she’s committed to boosting efficiency and employee satisfaction.",
        linkdIn: "https://www.linkedin.com/in/kanwal-abidi-a66b262ab/"
    },
    // {
    //     name:"Maryiam Pervaiz",
    // },
    {
        name: "M.Khurram Muqueem Khan",
        img: teams_member_12,
        designation: "Financial Controller",
        discription: "Thriving as a results-driven finance professional, he is a trusted team player and valuable partner to business and service functions. He cultivates key organizational competencies by championing simplicity, collaboration, trust, innovation, and customer-centricity, all with unwavering integrity.",
        linkdIn: ""

    },
    {
        name: "Mufarrah Malik",

        img: teams_member_6,
        designation: "Head of Partnerships and Outreach",
        discription: `A dynamic and results-oriented professional with a proven track record in corporate liaison, events and 
stakeholder management. Experienced in cultivating impactful partnerships, executing events, and facilitating personal and professional development workshops. Skilled in communication and process optimization`,
        linkdIn: "https://www.linkedin.com/in/mufarrah/"


    },
    {
        name: "Samra Mazhar",
        img: teams_member_9,
        designation: "HR & Event Manager",
        discription: "Samra, the Placements and Events Lead at AshreiTech Academy, is a dynamic and approachable professional known for her enthusiasm. A true people's person, she brings a warm and engaging presence to every interaction. Passionate about her role, Samra ensures all her responsibilities are met with utmost seriousness and a smile.",
        linkdIn: "https://www.linkedin.com/in/samra-m-1782b5201/"

    },
    {
        name: "Talha Shabbir",
        img: teams_member_7,
        designation: "Head, Corporate Trainings & Events",
        discription: "Talha heads Corporate Trainings & Events at AshreiTech, where his 10+ years of expertise in event management, business development, and strategy shine. Thriving under pressure, he crafts standout marketing strategies and leverages digital platforms with finesse.",
        linkdIn: "https://www.linkedin.com/in/talhashabbir/"

    },

    {
        name: 'Arsalan Ahmed',
        img: teams_member_1,
        designation: "Accounts Officer",
        discription: "As the finance officer, Arsalan supports the financial operations of this organization by processing transactions and maintaining financial records. He also excels in analyzing financial data, offering valuable insights and support to senior finance professionals.",
        linkdIn: "https://www.linkedin.com/in/arsalan-ahmed-708974106/"

    },
    {
        name: "Farrukh Hussain Lodhi",
        img: teams_member_3,
        designation: "Assistant Manager Accounts/Tax",
        discription: "",
        linkdIn: ""

    },
    // {
    //     name:"Humra Tahir",
    // },
    // {
    //     name:"Jamshed",
    // },
    {
        name: "Noman Ali",
        img: teams_member_10,
        designation: "Admin & Operations Lead",
        discription: "An experienced Admin and Operations professional who oversees day-to-day operations to ensure efficiency and productivity across all departments. With a focus on optimizing organizational performance, He expertly coordinates administrative tasks, streamlines processes, and implements effective strategies.",
        // Dedicated to maintaining a supportive environment, fostering teamwork and enhances overall operational effectiveness, contributing significantly to the success of the organization.
        linkdIn: ""

    },
    {
        name: "Samul Shah",
        img: teams_member_8,
        designation: "Digital Strategist & Designer",
        discription: "Samul is a visionary digital strategist and designer passionate about crafting innovative and user-friendly digital designs. Always on the lookout for fresh ideas, she seamlessly blends creativity and strategy in every project, ensuring that the Academy's name and motto shine through each post.",
        // Her work is a canvas reflecting her vibrant personality: a blend of creativity, joy, and a spirited dedication to excellence.
        linkdIn: "https://www.linkedin.com/in/samul-shah-9528aa216/"

    },
    {
        name: "Syed Talha Asad",
        img: teams_member_15,
        designation: "IT Administrator",
        discription: "As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.",
        // , ensuring optimal business performance.
        linkdIn: "https://www.linkedin.com/in/syed-talha-asad-71b6b1142/"


    },
    {
        name: "Humra Tahir",
        img: teams_member_11,
        designation: "Executive-Marcom",
        linkdIn: "https://www.linkedin.com/in/humra-tahir/",
        discription: `Humra is a final-year Mass Communication student and MarCom Executive at AshreiTech Academy. With a knack for creativity, she crafts marketing content that truly engages and stands out. Humra blends her academic knowledge with hands-on experience, bringing fresh, compelling ideas to the table. 
`
        // Whether it's a catchy campaign or an engaging social media post, Humra knows how to make it shine. She's a talented and enthusiastic marketer who’s ready to take on any challenge and make an impact.
        , linkdIn: "https://www.linkedin.com/in/humra-tahir/"
    },
    {
        name: "Unsar hameed",
        img: teams_member_16,
        designation: "IT Manager",
        discription: "As a seasoned IT Manager, Unsar leads technology strategy and innovation, driving business transformation and growth with effective IT solutions and agile leadership. With expertise in IT service management and digital transformation, he creates impactful solutions that enhance collaboration and efficiency.",
        // , helping organizations achieve their strategic goals.
        linkdIn: "https://www.linkedin.com/in/unsar-hameed-379896106/"


    },
]
const { team_comtainer, banner_container, teams_image, gradientCircle, members_container, img_container, hover_content, shadow } = style;

const Teams = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
            <TopNavbar />
            <div className={`${team_comtainer}`}>
                <div className={`${banner_container}`}>
                    <img src={teams_banner} alt="" srcset="" />
                </div>
                {/* <div className={`${members_container}`}>
                    <h1 className="text-center my-5">With over years of experience combined.</h1>
                    <div className="row px-2">
                        {
                            teamMember?.map(({ name, linkdIn, designation, discription, img }, index) => {
                                return <div onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)} className={`col-12 mb-5 mt-2 col-sm-6 col-md-4 col-lg-3 ${img_container}`}>
                                    <img src={img} alt="Team Member 1" className={`img-flui ${teams_image}`} />
                                    <h3 className="text-center">{name}</h3>
                                    <p className="text-center font20">{designation ?? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tempora alias provident, earum nam facilis tempore? Odit iusto similique vero?"}</p>
                                    {hoveredIndex == index && (
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
                </div> */}
            </div>

            <div className="container-fluid py-5" style={{ position: 'relative' }}>
                <div className={`${gradientCircle}`}></div>
                <div className="row py-3">
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_14})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.",
                                        , ensuring optimal business performance</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Sohail Zindani</h2>
                            <h5>Director and CEO</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_13})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">Adnan, leading operations at AshreiTech Academy, is pivotal for keeping things running smoothly and maintaining a friendly atmosphere. The team often seeks him out for his problem-solving skills and practical advice, which helps keep the workplace dynamic and harmonious. His commitment ensures that everything at the academy works well, making him a crucial member of the team.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Adnan Ahmed</h2>
                            <h5>Operation Head</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_15})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Syed Talha Asad</h2>
                            <h5>IT Administrator</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_16})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">As a seasoned IT Manager, Unsar leads technology strategy and innovation, driving business transformation and growth with effective IT solutions and agile leadership. With expertise in IT service management and digital transformation, he creates impactful solutions that enhance collaboration and efficiency.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Unsar hameed</h2>
                            <h5>IT Manager</h5>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_1})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white ">As the finance officer, Arsalan supports the financial operations of this organization by processing transactions and maintaining financial records. He also excels in analyzing financial data, offering valuable insights and support to senior finance professionals.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Arsalan Ahmed</h2>
                            <h5>Accounts Officer</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_2})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">A MarCom professional with over 9 years of experience, in simple words, "Work inspires her." Embarking on a journey from science to advertising, her evolution into a strategic and adaptive marketer has been nothing short of thrilling.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Azmeena Furniturewala</h2>
                            <h5 className="text-center">Head of Marketing and  <br /> communication</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_3})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white"></p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Farrukh Hussain Lodhi</h2>
                            <h5>Assistant Manager Accounts/Tax</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_4})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white ">At AshreiTech Academy, G.M is the driving force behind a vibrant tech community. Leveraging his entrepreneurial experience, he nurtures the next generation of tech talent by guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he fosters a thriving tech community.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2 className="text-center">Ghulam Muhammad <br /> Soomro</h2>
                            <h5>Cummunity Manager</h5>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_5})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white ">Kanwal is a dynamic HR professional specializing in talent acquisition, employee engagement, and organizational development. She crafts innovative HR strategies that drive performance and create an inclusive workplace. With a keen eye on strategic planning and HR analytics, she’s committed to boosting efficiency and employee satisfaction.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Kanwal Rizvi</h2>
                            <h5>Assistant Administrative</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_6})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">A dynamic and results-oriented professional with a proven track record in corporate liaison, events and
                                        stakeholder management. Experienced in cultivating impactful partnerships, executing events, and facilitating personal and professional development workshops. Skilled in communication and process optimization</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Muffarah Malik</h2>
                            <h5>Head of Partnerships and Outreach</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_7})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">Talha heads Corporate Trainings & Events at AshreiTech, where his 10+ years of expertise in event management, business development, and strategy shine. Thriving under pressure, he crafts standout marketing strategies and leverages digital platforms with finesse.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Talha Shabbir</h2>
                            <h5>Head, Corporate Trainings & Events</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_8})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">Samul is a visionary digital strategist and designer passionate about crafting innovative and user-friendly digital designs. Always on the lookout for fresh ideas, she seamlessly blends creativity and strategy in every project, ensuring that the Academy's name and motto shine through each post.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Samul Shah</h2>
                            <h5>Digital Strategist & Designer</h5>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_9})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">Samra, the Placements and Events Lead at AshreiTech Academy, is a dynamic and approachable professional known for her enthusiasm. A true people's person, she brings a warm and engaging presence to every interaction. Passionate about her role, Samra ensures all her responsibilities are met with utmost seriousness and a smile.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Samra Mazhar</h2>
                            <h5>HR & Event Manager</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_10})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">An experienced Admin and Operations professional who oversees day-to-day operations to ensure efficiency and productivity across all departments. With a focus on optimizing organizational performance, He expertly coordinates administrative tasks, streamlines processes, and implements effective strategies.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Noman Ali</h2>
                            <h5>Admin & Operations Lead</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_11})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">Humra is a final-year Mass Communication student and MarCom Executive at AshreiTech Academy. With a knack for creativity, she crafts marketing content that truly engages and stands out. Humra blends her academic knowledge with hands-on experience, bringing fresh, compelling ideas to the table</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>Humra Tahir</h2>
                            <h5>Executive-Marcom</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card"
                            style={{
                                backgroundImage: `url(${teams_member_12})`,
                                backgroundSize: 'cover',
                                padding: '10px,10px',
                            }}
                        >
                            <div className="card-bg" >
                                <div className="card-block d-flex flex-column">
                                    <p className="text-white">Thriving as a results-driven finance professional, he is a trusted team player and valuable partner to business and service functions. He cultivates key organizational competencies by championing simplicity, collaboration, trust, innovation, and customer-centricity, all with unwavering integrity.</p>
                                    <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2 className="text-center">M.Khurram Muqueem <br /> Khan</h2>
                            <h5>Financial Controller</h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Teams;

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

const { team_container, banner_container, gradientCircle } = style;

const Teams = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const teamMembers = [
        {
            name: "Sohail Zindani",
            title: "Director and CEO",
            image: teams_member_14,
            description: "",
        },
        {
            name: "Adnan Ahmed",
            title: "Operation Head",
            image: teams_member_13,
            description: "Academy, is pivotal for keeping things running smoothly and maintaining a friendly atmosphere. The team often seeks him out for his problem-solving skills and practical advice, which helps keep the workplace dynamic and harmonious. His commitment ensures that everything at the academy works well, making him a crucial member of the team.",
        },
        {
            name: "Syed Talha Asad",
            title: "IT Administrator",
            image: teams_member_16,
            description: "As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.",
        },
        {
            name: "Unsar Hameed",
            title: "IT Manager",
            image: teams_member_4,
            description: "As a seasoned IT Manager, Unsar leads technology strategy and innovation, driving business transformation and growth with effective IT solutions and agile leadership. With expertise in IT service management and digital transformation, he creates impactful solutions that enhance collaboration and efficiency.",
        },
        {
            name: "Arsalan Ahmed",
            title: "Accounts Officer",
            image: teams_member_1,
            description: "As the finance officer, Arsalan supports the financial operations of this organization by processing transactions and maintaining financial records. He also excels in analyzing financial data, offering valuable insights and support to senior finance professionals.",
        },
        {
            name: "Azmeena Furniturewala",
            title: "Head of Marketing and Communication",
            image: teams_member_2,
            description: "A MarCom professional with over 9 years of experience, in simple words, \"Work inspires her.\" Embarking on a journey from science to advertising, her evolution into a strategic and adaptive marketer has been nothing short of thrilling.",
        },
        {
            name: "Farrukh Hussain Lodhi",
            title: "Assistant Manager Accounts/Tax",
            image: teams_member_3,
            description: "",
        },
        {
            name: "Ghulam Muhammad Soomro",
            title: "Community Manager",
            image: teams_member_4,
            description: "At AshreiTech Academy, G.M is the driving force behind a vibrant tech community. Leveraging his entrepreneurial experience, he nurtures the next generation of tech talent by guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he fosters a thriving tech community.",
        },
        {
            name: "Kanwal Rizvi",
            title: "Assistant Administrative",
            image: teams_member_5,
            description: "Kanwal is a dynamic HR professional specializing in talent acquisition, employee engagement, and organizational development. She crafts innovative HR strategies that drive performance and create an inclusive workplace. With a keen eye on strategic planning and HR analytics, she’s committed to boosting efficiency and employee satisfaction.",
        },
        {
            name: "Muffarah Malik",
            title: "Head of Partnerships and Outreach",
            image: teams_member_6,
            description: "A dynamic and results-oriented professional with a proven track record in corporate liaison, events and stakeholder management. Experienced in cultivating impactful partnerships, executing events, and facilitating personal and professional development workshops. Skilled in communication and process optimization.",
        },
        {
            name: "Talha Shabbir",
            title: "Head, Corporate Trainings & Events",
            image: teams_member_7,
            description: "Talha heads Corporate Trainings & Events at AshreiTech, where his 10+ years of expertise in event management, business development, and strategy shine. Thriving under pressure, he crafts standout marketing strategies and leverages digital platforms with finesse.",
        },
        {
            name: "Samul Shah",
            title: "Digital Strategist & Designer",
            image: teams_member_8,
            description: "Samul is a visionary digital strategist and designer passionate about crafting innovative and user-friendly digital designs. Always on the lookout for fresh ideas, she seamlessly blends creativity and strategy in every project, ensuring that the Academy's name and motto shine through each post.",
        },
        {
            name: "Samra Mazhar",
            title: "HR & Event Manager",
            image: teams_member_9,
            description: "Samra, the Placements and Events Lead at AshreiTech Academy, is a dynamic and approachable professional known for her enthusiasm. A true people's person, she brings a warm and engaging presence to every interaction. Passionate about her role, Samra ensures all her responsibilities are met with utmost seriousness and a smile.",
        },
        {
            name: "Noman Ali",
            title: "Admin & Operations Lead",
            image: teams_member_10,
            description: "An experienced Admin and Operations professional who oversees day-to-day operations to ensure efficiency and productivity across all departments. With a focus on optimizing organizational performance, He expertly coordinates administrative tasks, streamlines processes, and implements effective strategies.",
        },
        {
            name: "Humra Tahir",
            title: "Executive-Marcom",
            image: teams_member_11,
            description: "Humra is a final-year Mass Communication student and MarCom Executive at AshreiTech Academy. With a knack for creativity, she crafts marketing content that truly engages and stands out. Humra blends her academic knowledge with hands-on experience, bringing fresh, compelling ideas to the table.",
        },
        {
            name: "M.Khurram Muqueem Khan",
            title: "Financial Controller",
            image: teams_member_12,
            description: "Thriving as a results-driven finance professional, he is a trusted team player and valuable partner to business and service functions. He cultivates key organizational competencies by championing simplicity, collaboration, trust, innovation, and customer-centricity, all with unwavering integrity.",
        },
    ];

    return (
        <>
            <TopNavbar />
            <div className={`${team_container} container-fluid`}>
                <div className={banner_container}>
                    <img src={teams_banner} alt="Team Banner" />
                </div>
                <div className="row py-3" style={{ position: 'relative' }}>
                    <div className={gradientCircle}></div>
                    {teamMembers.map((member, index) => (
                        <div className="col-md-6 col-lg-3 col-sm-12" key={index}>
                            <div className="card-Team" style={{
                                backgroundImage: `url(${member.image})`,
                                backgroundSize: 'cover',
                                padding: '10px',
                            }}>
                                <div className="card-Team-bg">
                                    <div className="card-Team-block d-flex flex-column">
                                        <p className="text-white">{member.description}</p>
                                        <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <h4>{member.name}</h4>
                                <h6 className="text-center">{member.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Teams;

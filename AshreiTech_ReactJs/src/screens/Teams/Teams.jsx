import React, { useState } from "react";
import style from "./style.module.css";
import TopNavbar from "../../components/Nav/TopNavbar";
import teams_banner from "../../assets/teams_banner.png";
import Sohail_Zindani from '../../assets/team/Sohail_Zindani.png'
import adnan_ahmed from '../../assets/team/adnan_ahmed.png'
import Syed_Talha_Asad from '../../assets/team/Syed_Talha_Asad.png'
import Unsar_Hameed from '../../assets/team/Unsar_Hameed.png'
import Arsalan_Ahmed from '../../assets/team/Arsalan_Ahmed.png'
import Azmeena_Furniturewala from '../../assets/team/Azmeena_Furniturewala.png'
import Farrukh_Hussain_Lodhi from '../../assets/team/Farrukh_Hussain_Lodhi.png'
import Ghulam_Muhammad_Soomro from '../../assets/team/Ghulam_Muhammad_Soomro.png'
import Kanwal_Rizvi from '../../assets/team/Kanwal_Rizvi.png'
import Mufarrah_Malik from '../../assets/team/Mufarrah_Malik.png'
import Talha_Shabbir from '../../assets/team/Talha_Shabbir.png'
import Samul_Shah from '../../assets/team/Samul_Shah.png'
import Samra_Mazhar from '../../assets/team/Samra_Mazhar.png'
import Noman_Ali from '../../assets/team/Noman_Ali.png'
import Humra_Tahir from '../../assets/team/Humra_Tahir.png'
import M_Khurram_Muqueem from '../../assets/team/M_Khurram_Muqueem.png'
import Footer from "../../components/Sections/Footer/Footer";
import './team.css';

const { team_container, banner_container, gradientCircle } = style;

const Teams = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const teamMembers = [
        {
            name: "Sohail Zindani",
            title: "Director and CEO",
            image: Sohail_Zindani,
            description: "",
        },
        {
            name: "Adnan Ahmed",
            title: "Operation Head",
            image: adnan_ahmed,
            description: "Academy, is pivotal for keeping things running smoothly and maintaining a friendly atmosphere. The team often seeks him out for his problem-solving skills and practical advice, which helps keep the workplace dynamic and harmonious. His commitment ensures that everything at the academy works well, making him a crucial member of the team.",
        },
        {
            name: "Syed Talha Asad",
            title: "IT Administrator",
            image: Syed_Talha_Asad,
            description: "As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.",
        },
        {
            name: "Unsar Hameed",
            title: "IT Manager",
            image: Unsar_Hameed,
            description: "As a seasoned IT Manager, Unsar leads technology strategy and innovation, driving business transformation and growth with effective IT solutions and agile leadership. With expertise in IT service management and digital transformation, he creates impactful solutions that enhance collaboration and efficiency.",
        },
        {
            name: "Arsalan Ahmed",
            title: "Accounts Officer",
            image: Arsalan_Ahmed,
            description: "As the finance officer, Arsalan supports the financial operations of this organization by processing transactions and maintaining financial records. He also excels in analyzing financial data, offering valuable insights and support to senior finance professionals.",
        },
        {
            name: "Azmeena Furniturewala",
            title: "Head of Marketing and Communication",
            image: Azmeena_Furniturewala,
            description: "A MarCom professional with over 9 years of experience, in simple words, \"Work inspires her.\" Embarking on a journey from science to advertising, her evolution into a strategic and adaptive marketer has been nothing short of thrilling.",
        },
        {
            name: "Farrukh Hussain Lodhi",
            title: "Assistant Manager Accounts/Tax",
            image: Farrukh_Hussain_Lodhi,
            description: "",
        },
        {
            name: "Ghulam Muhammad Soomro",
            title: "Community Manager",
            image: Ghulam_Muhammad_Soomro,
            description: "At AshreiTech Academy, G.M is the driving force behind a vibrant tech community. Leveraging his entrepreneurial experience, he nurtures the next generation of tech talent by guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he fosters a thriving tech community.",
        },
        {
            name: "Kanwal Rizvi",
            title: "Assistant Administrative",
            image: Kanwal_Rizvi,
            description: "Kanwal is a dynamic HR professional specializing in talent acquisition, employee engagement, and organizational development. She crafts innovative HR strategies that drive performance and create an inclusive workplace. With a keen eye on strategic planning and HR analytics, she’s committed to boosting efficiency and employee satisfaction.",
        },
        {
            name: "Muffarah Malik",
            title: "Head of Partnerships and Outreach",
            image: Mufarrah_Malik,
            description: "A dynamic and results-oriented professional with a proven track record in corporate liaison, events and stakeholder management. Experienced in cultivating impactful partnerships, executing events, and facilitating personal and professional development workshops. Skilled in communication and process optimization.",
        },
        {
            name: "Talha Shabbir",
            title: "Head, Corporate Trainings & Events",
            image: Talha_Shabbir,
            description: "Talha heads Corporate Trainings & Events at AshreiTech, where his 10+ years of expertise in event management, business development, and strategy shine. Thriving under pressure, he crafts standout marketing strategies and leverages digital platforms with finesse.",
        },
        {
            name: "Samul Shah",
            title: "Digital Strategist & Designer",
            image: Samul_Shah,
            description: "Samul is a visionary digital strategist and designer passionate about crafting innovative and user-friendly digital designs. Always on the lookout for fresh ideas, she seamlessly blends creativity and strategy in every project, ensuring that the Academy's name and motto shine through each post.",
        },
        {
            name: "Samra Mazhar",
            title: "HR & Event Manager",
            image: Samra_Mazhar,
            description: "Samra, the Placements and Events Lead at AshreiTech Academy, is a dynamic and approachable professional known for her enthusiasm. A true people's person, she brings a warm and engaging presence to every interaction. Passionate about her role, Samra ensures all her responsibilities are met with utmost seriousness and a smile.",
        },
        {
            name: "Noman Ali",
            title: "Admin & Operations Lead",
            image: Noman_Ali,
            description: "An experienced Admin and Operations professional who oversees day-to-day operations to ensure efficiency and productivity across all departments. With a focus on optimizing organizational performance, He expertly coordinates administrative tasks, streamlines processes, and implements effective strategies.",
        },
        {
            name: "Humra Tahir",
            title: "Executive-Marcom",
            image: Humra_Tahir,
            description: "Humra is a final-year Mass Communication student and MarCom Executive at AshreiTech Academy. With a knack for creativity, she crafts marketing content that truly engages and stands out. Humra blends her academic knowledge with hands-on experience, bringing fresh, compelling ideas to the table.",
        },
        {
            name: "M.Khurram Muqueem Khan",
            title: "Financial Controller",
            image: M_Khurram_Muqueem,
            description: "Thriving as a results-driven finance professional, he is a trusted team player and valuable partner to business and service functions. He cultivates key organizational competencies by championing simplicity, collaboration, trust, innovation, and customer-centricity, all with unwavering integrity.",
        },
    ];

    return (
        <>
            <TopNavbar />
            <div className={`${team_container} container-fluid`}>
                <div className={`${banner_container}`}>
                    <img src={teams_banner} alt="Team Banner " />
                </div>
                <div className="mt-5 pt-5 d-flex justify-content-center align-items-center"><h1>With over years of experience combined.</h1></div>
                <div className="row my-5" style={{ position: 'relative' }}>
                    <div className={gradientCircle}></div>
                    {teamMembers.map((member, index) => (
                        <div className="col-md-6 col-lg-3 col-sm-12 my-4" key={index}>
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
                            <div className="d-flex justify-content-center flex-column align-items-center mt-4">
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

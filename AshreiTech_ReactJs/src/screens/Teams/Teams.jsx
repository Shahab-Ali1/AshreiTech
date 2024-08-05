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
import Samra_Mazhar from '../../assets/team/Samra_Mazhar.png'
import Noman_Ali from '../../assets/team/Noman_Ali.png'
import Humra_Tahir from '../../assets/team/Humra_Tahir.png'
import M_Khurram_Muqueem from '../../assets/team/M_Khurram_Muqueem.png'
import Maryam from '../../assets/team/maryam.png'
import Jamshed_Zaman from '../../assets/team/Jamshed_Zaman.png'
import Muhammad_Ibrahim from '../../assets/team/Muhammad_Ibrahim.png'
import Footer from "../../components/Sections/Footer/Footer";

const { team_container, banner_container, gradientCircle, team_description, card_Team, card_Team_bg } = style;

const Teams = () => {

    const teamMembers = [
        {
            name: "Sohail Zindani",
            title: "Director and CEO",
            image: Sohail_Zindani,
            description: "A Researcher, Leadership & Innovation Consultant, and high-performance coach, he has worked with literally all major companies across Pakistan and in nearby regions.He is the Founder of Learning Minds, Curator of Insights Business Forum, and serves on the advisory boards of various development sector organizations.",
            linkedInProfile: 'https://www.linkedin.com/in/sohailzindani/'
        },
        {
            name: "Adnan Ahmed",
            title: "Operation Head",
            image: adnan_ahmed,
            description: "Academy, is pivotal for keeping things running smoothly and maintaining a friendly atmosphere. The team often seeks him out for his problem-solving skills and practical advice, which helps keep the workplace dynamic and harmonious. His commitment ensures that everything at the academy works well, making him a crucial member of the team.",
            linkedInProfile: 'https://www.linkedin.com/in/adnan-ahmed-92b80235/'
        },
        {
            name: "M.Khurram Muqueem Khan",
            title: "Financial Controller",
            image: M_Khurram_Muqueem,
            description: "Thriving as a results-driven finance professional, he is a trusted team player and valuable partner to business and service functions. He cultivates key organizational competencies by championing simplicity, collaboration, trust, innovation, and customer-centricity, all with unwavering integrity.",
            linkedInProfile: ''
        },
        {
            name: "Talha shabbir",
            title: "IT Administrator",
            image: Talha_Shabbir,
            description: "As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.",
            linkedInProfile: ''
        },
        {
            name: "Mufarrah Malik",
            title: "Head of Partnerships and Outreach",
            image: Mufarrah_Malik,
            description: "A dynamic and results-oriented professional with a proven track record in corporate liaison, events and stakeholder management. Experienced in cultivating impactful partnerships, executing events, and facilitating personal and professional development workshops. Skilled in communication and process optimization.",
            linkedInProfile: 'https://www.linkedin.com/in/mufarrah/'
        },
        {
            name: "Azmeena Furniturewala",
            title: "Head of Marketing and Communication",
            image: Azmeena_Furniturewala,
            description: "A MarCom professional with over 9 years of experience, in simple words, \"Work inspires her.\" Embarking on a journey from science to advertising, her evolution into a strategic and adaptive marketer has been nothing short of thrilling.",
            linkedInProfile: 'https://www.linkedin.com/in/azmeena-k/'
        },
        {
            name: "Ghulam Muhammad Soomro",
            title: "Community Manager",
            image: Ghulam_Muhammad_Soomro,
            description: "At AshreiTech Academy, G.M is the driving force behind a vibrant tech community. Leveraging his entrepreneurial experience, he nurtures the next generation of tech talent by guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he fosters a thriving tech community.",
            linkedInProfile: 'https://www.linkedin.com/in/gm95soomro/'
        },
        {
            name: "Kanwal Rizvi",
            title: "HR Lead",
            image: Kanwal_Rizvi,
            description: "Kanwal is a dynamic HR professional specializing in talent acquisition, employee engagement, and organizational development. She crafts innovative HR strategies that drive performance and create an inclusive workplace. With a keen eye on strategic planning and HR analytics, she’s committed to boosting efficiency and employee satisfaction.",
            linkedInProfile: 'https://www.linkedin.com/in/kanwal-abidi-a66b262ab/'
        },
        {
            name: "Maryiam Pervaiz",
            title: "Manager Communication and PR / LHR",
            image: Maryam,
            description: "Maryam is a seasoned professional with over 15 years of extensive experience in journalism, media, marketing, and public relations. Her diverse skill set and strategic insight have been instrumental in building sustainable and trustworthy relationships with our clients and the corporate world. Maryam's multifaceted expertise makes her an invaluable asset to our organization, consistently driving our marketing initiatives to new heights. Her ability to blend creativity with strategic thinking ensures that our brand remains at the forefront of industry trends and client expectations. At our company, Maryam continues to lead with excellence, fostering a culture of innovation and reliability.",
            linkedInProfile: 'https://www.linkedin.com/in/maryiam-pervaiz-40595121/'
        },
        {
            name: "Samra Mazhar",
            title: "HR & Event Manager",
            image: Samra_Mazhar,
            description: "Samra, the Placements and Events Lead at AshreiTech Academy, is a dynamic and approachable professional known for her enthusiasm and dedication. A true people's person, she brings a warm and engaging presence to every interaction. Passionate about her role, Samra ensures all her responsibilities are met with utmost seriousness and a smile.",
            linkedInProfile: 'https://www.linkedin.com/in/samra-m-1782b5201/'
        },
        {
            name: "Unsar Hameed",
            title: "IT Manager",
            image: Unsar_Hameed,
            description: "As a seasoned IT Manager, Unsar leads technology strategy and innovation, driving business transformation and growth with effective IT solutions and agile leadership. With expertise in IT service management and digital transformation, he creates impactful solutions that enhance collaboration and efficiency.",
            linkedInProfile: 'https://www.linkedin.com/in/unsar-hameed-379896106/'
        },
        {
            name: "Arsalan Ahmed",
            title: "Accounts Officer",
            image: Arsalan_Ahmed,
            description: "As the finance officer, Arsalan supports the financial operations of this organization by processing transactions and maintaining financial records. He also excels in analyzing financial data, offering valuable insights and support to senior finance professionals.",
            linkedInProfile: 'https://www.linkedin.com/in/arsalan-ahmed-708974106/'
        },
        {
            name: "Farrukh Hussain Lodhi",
            title: "Assistant Manager Accounts/Tax",
            image: Farrukh_Hussain_Lodhi,
            description: "",
            linkedInProfile: ''
        },
        {
            name: "Humra Tahir",
            title: "Executive-Marcom",
            image: Humra_Tahir,
            description: "Humra is a final-year Mass Communication student and MarCom Executive at AshreiTech Academy. With a knack for creativity, she crafts marketing content that truly engages and stands out. Humra blends her academic knowledge with hands-on experience, bringing fresh, compelling ideas to the table.",
            linkedInProfile: 'https://www.linkedin.com/in/humra-tahir/'
        },
        {
            name: "Myhammad Ibrahim",
            title: "Student Coordinator",
            image: Muhammad_Ibrahim,
            description: "At AshreiTech Academy, Muhammad Ibrahim is the Student Coordinator, dedicated to resolving student issues and offering counseling sessions. He mentors the next generation of tech talent, guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he is committed to equipping students with the tools they need to succeed.",
            linkedInProfile: 'https://www.linkedin.com/in/muhammad-ibrahim-505b13235/'
        },
        {
            name: "Jamshed Zaman",
            title: "Community Manager",
            image: Jamshed_Zaman,
            description: "With a diverse background spanning professional development, education, journalism, and public relations, Jamshed bring a rich tapestry of experiences and skills. In more than 4 years of professional experience in Educational Development at various renowned institutions including University of Central Punjab and Forman Christian College, Jamshed has been deeply involved in educational administration curriculum design, facilitating workshops, fostering industry connections for student opportunities.",
            linkedInProfile: 'https://www.linkedin.com/in/jamshedzaman252/'
        },
        {
            name: "Noman Ali",
            title: "Admin & Operations Lead",
            image: Noman_Ali,
            description: "An experienced Admin and Operations professional who oversees day-to-day operations to ensure efficiency and productivity across all departments. With a focus on optimizing organizational performance, He expertly coordinates administrative tasks, streamlines processes, and implements effective strategies.",
            linkedInProfile: ''
        },
        {
            name: "Syed Talha Asad",
            title: "IT Administrator",
            image: Syed_Talha_Asad,
            description: "As a seasoned IT Administrator, Syed Talha orchestrates seamless network operations and fortifies security solutions, propelling business growth with cutting-edge technology infrastructure. With a mastery in system administration and network architecture, he crafts high-availability solutions that minimize downtime and amplify productivity.",
            linkedInProfile: ''
        },
    ];



    return (
        <>
            <TopNavbar />
            <div className={`${team_container} container-fluid`}>
                <div className={`${banner_container}`}>
                    <img src={teams_banner} alt="Team Banner" />
                </div>
                <div className="mt-5 pt-5 d-flex justify-content-center align-items-center">
                    <h1>With over years of experience combined.</h1>
                </div>
                <div className="row my-5" style={{ position: 'relative' }}>
                    <div className={gradientCircle}></div>
                    {teamMembers.map((member, index) => (
                        <div className="col-md-6 col-lg-3 col-sm-12 d-flex flex-column" key={index}>
                            <div className={`${card_Team} my-4`} style={{
                                backgroundImage: `url(${member.image})`,
                            }}>
                                <div className={`${card_Team_bg}`}>
                                    <p className={`${team_description} text-white`} style={{ fontSize: '14px' }}>{member.description}</p>
                                    <a href={member.linkedInProfile} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin pt-2" style={{ color: "white" }}></i>
                                    </a>
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

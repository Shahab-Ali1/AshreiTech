import React, { useState } from "react";
import style from "./style.module.css";
import TopNavbar from "../../components/Nav/TopNavbar";
// import teams_banner from "../../assets/teams_banner1.png";
import teams_banner from "../../assets/team/teams_banner1.png"
import Sohail_Zindani from '../../assets/team/Sohail_Zindani.png'
import adnan_ahmed from '../../assets/team/adnan_ahmed.png'
import Syed_Talha_Asad from '../../assets/team/Syed_Talha_Asad.png'
import Unsar_Hameed from '../../assets/team/Unsar_Hameed.png'
import Arsalan_Ahmed from '../../assets/team/Arsalan_Ahmed.png'
import Syeda_Anoosha_Arif from '../../assets/team/Syeda_Anoosha_Arif.png'
import Arnold_Ibrahim from '../../assets/team/Arnold_Ibrahim.png'
import Ghulam_Mustafa from '../../assets/team/Ghulam_Mustafa.png'
import Hissham_Mohiuddin from '../../assets/team/Hissham_Mohiuddin.png'
import Jawaid_Iqbal from '../../assets/team/Jawaid_Iqbal.png'
import Kiran_Amin from '../../assets/team/Kiran_Amin.png'
import Azmeena_Furniturewala from '../../assets/team/Azmeena_Furniturewala.png'
import Farrukh_Hussain_Lodhi from '../../assets/team/Farrukh_Hussain_Lodhi.png'
// import Ghulam_Mustafa from '../../assets/team/Ghulam_Mustafa.jpg'
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
import Haris_Bin_Rafat from '../../assets/team/Haris_Bin_Rafat.png'
import green_Omar_Siddique from '../../assets/team/green_Omar_Siddique.png'
import Hunain_Shah from '../../assets/team/Hunain_Shah.png'
import Footer from "../../components/Sections/Footer/Footer";
import section1banner from '../../assets/aboutTheCompany/aboutSection1banner.png';

const { team_container, banner_container, gradientCircle, team_description, card_Team, card_Team_bg, overlay_text, banner_overlay } = style;

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
            title: "Head of Operations and IT",
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
        // {
        //     name: "Adnan Ahmed",
        //     title: "Head of Operations and IT",
        //     image: adnan_ahmed,
        //     description: "Academy, is pivotal for keeping things running smoothly and maintaining a friendly atmosphere. The team often seeks him out for his problem-solving skills and practical advice, which helps keep the workplace dynamic and harmonious. His commitment ensures that everything at the academy works well, making him a crucial member of the team.",
        //     linkedInProfile: 'https://www.linkedin.com/in/adnan-ahmed-92b80235/'
        // },
        {
            name: "Talha Shabbir",
            title: "Head, Academics & Programs",
            image: Talha_Shabbir,
            description: "Talha heads Corporate Trainings & Events at AshreiTech, where his 10+ years of expertise in event management, business development, and strategy shine. Thriving under pressure, he crafts standout marketing strategies and leverages digital platforms with finesse. A growth enthusiast, Talha loves traveling, playing cricket, and tackling new challenges, making him an invaluable asset to any team.",
            linkedInProfile: ''
        },
        {
            name: "Mufarrah Malik",
            title: "Head of Partnerships and Outreach",
            image: Mufarrah_Malik,
            description: "A dynamic and results-oriented professional with a proven track record in corporate liaison, events and stakeholder management. Experienced in cultivating impactful partnerships, executing events, and facilitating personal and professional development workshops. Skilled in communication and process optimization.",
            linkedInProfile: 'https://www.linkedin.com/in/mufarrah/'
        },
        // {
        //     name: "Azmeena Furniturewalla",
        //     title: "Head of Marketing and Communications",
        //     image: Azmeena_Furniturewala,
        //     description: "A MarCom professional with over 9 years of experience, in simple words, \"Work inspires her.\" Embarking on a journey from science to advertising, her evolution into a strategic and adaptive marketer has been nothing short of thrilling.",
        //     linkedInProfile: 'https://www.linkedin.com/in/azmeena-k/'
        // },
        {
            name: "Kanwal Abidi",
            title: "HR Lead",
            image: Kanwal_Rizvi,
            description: "Kanwal is a dynamic HR professional specializing in talent acquisition, employee engagement, and organizational development. She crafts innovative HR strategies that drive performance and create an inclusive workplace. With a keen eye on strategic planning and HR analytics, she’s committed to boosting efficiency and employee satisfaction.",
            linkedInProfile: 'https://www.linkedin.com/in/kanwal-abidi-a66b262ab/'
        },
        {
            name: "Ghulam Muhammad Soomro",
            title: "Community Manager- KHI",
            image: Ghulam_Muhammad_Soomro,
            description: "At AshreiTech Academy, G.M is the driving force behind a vibrant tech community. Leveraging his entrepreneurial experience, he nurtures the next generation of tech talent by guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he fosters a thriving tech community.",
            linkedInProfile: 'https://www.linkedin.com/in/gm95soomro/'
        },
        {
            name: "Syeda Anoosha Arif",
            title: "Marketing and Communications Manager",
            image: Syeda_Anoosha_Arif,
            description: `	Anoosha serves as the Marketing and Communications Manager, where she leads the development and execution of strategic marketing campaigns and drive engagement. In her role, she oversees content creation, social media strategy, and public relations efforts, ensuring that all communications are aligned with the company’s mission and values.
            Her expertise shapes a unified brand message that appeals to a broad audience, enhancing the company’s reputation and promoting a strong, positive brand image.`,
            linkedInProfile: '	https://www.linkedin.com/in/syeda-anoosha-arif-511284244/'
        },
      
        // {
        //     name: "Maryiam Pervaiz",
        //     title: "Manager Communications and PR- LHR",
        //     image: Maryam,
        //     description: "Maryam is a seasoned professional with over 15 years of extensive experience in journalism, media, marketing, and public relations. Her diverse skill set and strategic insight have been instrumental in building sustainable and trustworthy relationships with our clients and the corporate world. Maryam's multifaceted expertise makes her an invaluable asset to our organization, consistently driving our marketing initiatives to new heights. Her ability to blend creativity with strategic thinking ensures that our brand remains at the forefront of industry trends and client expectations. At our company, Maryam continues to lead with excellence, fostering a culture of innovation and reliability.",
        //     linkedInProfile: 'https://www.linkedin.com/in/maryiam-pervaiz-40595121/'
        // },
        // {
        //     name: "Samra Mazhar",
        //     title: "Placements and Events Lead",
        //     image: Samra_Mazhar,
        //     description: "Samra, the Placements and Events Lead at AshreiTech Academy, is a dynamic and approachable professional known for her enthusiasm and dedication. A true people's person, she brings a warm and engaging presence to every interaction. Passionate about her role, Samra ensures all her responsibilities are met with utmost seriousness and a smile.",
        //     linkedInProfile: 'https://www.linkedin.com/in/samra-m-1782b5201/'
        // },
        {
            name: "Unsar Hameed",
            title: "IT Manager",
            image: Unsar_Hameed,
            description: "As a seasoned IT Manager, Unsar leads technology strategy and innovation, driving business transformation and growth with effective IT solutions and agile leadership. With expertise in IT service management and digital transformation, he creates impactful solutions that enhance collaboration and efficiency.",
            linkedInProfile: 'https://www.linkedin.com/in/unsar-hameed-379896106/'
        },
        {
            name: "Jamshed Zaman",
            title: "Community Manager- LHR",
            image: Jamshed_Zaman,
            description: "With a diverse background spanning professional development, education, journalism, and public relations, Jamshed bring a rich tapestry of experiences and skills. In more than 4 years of professional experience in Educational Development at various renowned institutions including University of Central Punjab and Forman Christian College, Jamshed has been deeply involved in educational administration curriculum design, facilitating workshops, fostering industry connections for student opportunities.",
            linkedInProfile: 'https://www.linkedin.com/in/jamshedzaman252/'
        },
        {
            name: "Arsalan Ahmed",
            title: "Accounts Officer",
            image: Arsalan_Ahmed,
            description: "As the finance officer, Arsalan supports the financial operations of this organization by processing transactions and maintaining financial records. He also excels in analyzing financial data, offering valuable insights and support to senior finance professionals.",
            linkedInProfile: 'https://www.linkedin.com/in/arsalan-ahmed-708974106/'
        },
        // {
        //     name: "Farrukh Hussain Lodhi",
        //     title: "Assistant Manager Accounts/Tax",
        //     image: Farrukh_Hussain_Lodhi,
        //     description: "",
        //     linkedInProfile: ''
        // },
        {
            name: "	Hissham Mohiuddin",
            title: "Manager, Tax Reporting and Budgeting",
            image: Hissham_Mohiuddin,
            description: "Hissham Mohiuddin serves as Manager - Tax Reporting and Budgeting. With extensive knowledge of tax laws and regulations, he oversees compliance, reporting, and budgeting processes. Hissham plays a crucial role in minimizing tax liabilities and safeguarding our financial health.",
            linkedInProfile: 'https://www.linkedin.com/in/hissham-mohiuddin-43798726/'
        },
        {
            name: "	Ghulam Mustafa",
            title: "Assistant Manager Accounts and Tax",
            image: Ghulam_Mustafa,
            description: "	Ghulam Mustafa serves as our Assistant Manager - Accounts and Tax, ensuring the smooth operation of financial tasks and timely tax compliance. A dedicated professional with a keen eye for detail, he applies his expertise in accounting principles, making him a valuable asset to our team.",
            linkedInProfile: ''
        },
        {
            name: "Kiran Amin Panjwani",
            title: "Coordinator, Programs and Partnership",
            image: Kiran_Amin,
            description: "Kiran Amin Panjwani serves as our Coordinator - Programs and Partnerships, orchestrating seamless program management and fostering strong partnerships. An organized and proactive professional, she excels in project execution, ensuring impactful initiatives with her attention to detail and effective communication",
            linkedInProfile: '	https://www.linkedin.com/in/kiranpanjwani220/'
        },
        {
            name: "Jawed Iqbal",
            title: "Corporate Liaison and Events Officer",
            image:Jawaid_Iqbal,
            description: `	Jawed Iqbal serves as the Corporate Liaison and Events Officer, where he plays a pivotal role in organising a range of corporate training sessions, workshops, and conferences aimed at strengthening the company's public relations.
             By facilitating these events, Jawed not only provides valuable networking opportunities but also actively bridges the gap between academia and industry. His efforts help build meaningful connections that foster knowledge exchange and promote the company's reputation in professional development.`,
            linkedInProfile: '	http://www.linkedin.com/in/jawed-iqbal-375a56237'
        },
        {
            name: "	Arnold Ibrahim",
            title: "Event Coordinator",
            image: Arnold_Ibrahim,
            description: "	At AshreiTech Academy, Arnold is the backbone of a well-oiled event machine. Leveraging his expertise, he manages and supervises every aspect, from pre- to post-event operations, ensuring everything runs smoothly. Arnold coordinates with organizations, guides attendees, and seamlessly handles multiple events at once. Passionate about creating memorable experiences, he is key to fostering a dynamic event culture at the academy.",
            linkedInProfile: ''
        },
        // {
        //     name: "Humra Tahir",
        //     title: "Executive- Marcom",
        //     image: Humra_Tahir,
        //     description: "Humra is a final-year Mass Communication's student and MarCom Executive at AshreiTech Academy. With a knack for creativity, she crafts marketing content that truly engages and stands out. Humra blends her academic knowledge with hands-on experience, bringing fresh, compelling ideas to the table.",
        //     linkedInProfile: 'https://www.linkedin.com/in/humra-tahir/'
        // },
        {
            name: "Omar Siddique",
            title: "Creative Designer",
            image: green_Omar_Siddique,
            description: "As a Creative Designer, Omar envisions design as more than just aesthetics; he sees it as a vibrant tapestry that weaves together meaningful connections, delivers impactful messages, and beautifully reflects the company's core aims in every visual element. For Omar, every design is a story waiting to be told, a bridge between creativity and purpose.",
            linkedInProfile: 'https://www.linkedin.com/in/omar-siddiqui-3b9a99204/'
        },
        {
            name: "Haris Bin Rafat",
            title: "Photographer & Videographer",
            image: Haris_Bin_Rafat,
            description: "As a passionate photographer and videographer, Haris is constantly on the lookout for captivating stories to capture and share. Whether framing the serene beauty of a landscape or filming the dynamic energy of a live event, Haris is dedicated to creating content that not only engages but resonates deeply with his audience. For him, every shot is a new adventure, a unique story waiting to be told.",
            linkedInProfile: 'https://www.linkedin.com/in/haris-bin-rafat-657474ab/'
        },
        {
            name: "Raja Muhammad Ibrahim",
            title: "Student Coordinator",
            image: Muhammad_Ibrahim,
            description: "At AshreiTech Academy, Muhammad Ibrahim is the Student Coordinator, dedicated to resolving student issues and offering counseling sessions. He mentors the next generation of tech talent, guiding students and career shifters in acquiring essential skills. Passionate about innovation and growth, he is committed to equipping students with the tools they need to succeed.",
            linkedInProfile: 'https://www.linkedin.com/in/muhammad-ibrahim-505b13235/'
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
        {
            name: "Hunain Amin",
            title: "IT Support Officer",
            image: Hunain_Shah,
            description: "As an IT Support Officer, Hunain Amin excels in delivering technical assistance and support to users within the organization. With a robust background in troubleshooting hardware and software issues, he swiftly resolves IT-related challenges with precision. Driven by a commitment to exceptional customer service and technical proficiency, Hunain strives to elevate the overall IT experience for every user.",
            linkedInProfile: 'http://linkedin.com/in/hunain-mianoor-69308b322'
        },
    ];

    return (
        <>
            <TopNavbar />
            <div className={`${team_container} container-fluid`}>
                <div className={`${banner_container}`}>
                    <img src={teams_banner} alt="Team Banner" />
                    <div  className={`${banner_overlay}`}>
                        <h1 className={`${overlay_text}`}>Our Team</h1>
                    </div>
                </div>
                <div className="mt-5 pt-5 d-flex justify-content-center align-items-center">
                    <h1 className="text-center text-md-left">With over years of experience combined.</h1>
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
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <h5>{member.name}</h5>
                                <h6 className="text-center" style={{fontSize:"15px",  fontWeight:"500"}}>{member.title}</h6>
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

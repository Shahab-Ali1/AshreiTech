import React, { useEffect, useState } from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import heroImage from '../../assets/single-course-screen/shopify universe 1 1.png';
import HerobackImg from '../../assets/single-course-screen/singleCourseHeroImage.png'
import Faq from '../Faq/Faq';
import TestimonialSlider from '../../components/Elements/TestimonialSlider';
import departmentsFaq, { courseInfoCardData } from '../../constant'
import profile2 from '../../assets/profile2.png'
import vector1 from '../../assets/aboutAnimation1.png'
import ladder_background from '../../assets/ladder.png'
import ladder_left from '../../assets/ladder_left.png'
import ladder_right from '../../assets/ladder_right.png'
import InfoCard from '../InfoCard/InfoCard';
import style from './style.module.css'
import gradeint_background from '../../assets/gradeint_background.png'
import shopify_coins from '../../assets/shopify_coins.png'
import course_bg from "../../assets/course_bg.png"
import compass1 from '../../assets/compass1.png'
import compass2 from '../../assets/compass2.png'
import compass3 from '../../assets/compass3.png'
import usmanProf from '../../assets/usmanProf.png'
import prof1 from '../../assets/prof1.png'
import prof2 from '../../assets/prof2.png'
import { useLocation } from 'react-router-dom';

const Data = [
  {
    id: 26196,
    skills: [
      "Procurement Process Fundamentals",
      "Supplier Management in SAP Ariba",
      "Contract Management",
      "Strategic Sourcing",
      "Spend Analysis and Reporting",
      "Compliance and Risk Management",
      "SAP Ariba Procurement Integrations",
      "Hands-On Practice and Case Studies"
    ],
    aboutTheCourse: `This course provides a comprehensive understanding of procurement processes, supplier management, and contract lifecycle management within SAP Ariba. Key topics include data analysis, strategic sourcing, compliance management, and integration with ERP systems. The curriculum combines theoretical insights with practical exercises to build hands-on skills in managing procurement operations, maximizing efficiency, and achieving cost savings.`,
    courseOutline: [
      {
        title: "Introduction to SAP Ariba Procurement",
        details: [
          "Overview of Ariba",
          "Key features and benefits of Ariba Procurement"
        ]
      },
      {
        title: "Procurement Process Fundamentals",
        details: [
          "Understanding procurement processes and workflows",
          "Purchase requisitions and purchase orders",
          "Catalog management and guided buying"
        ]
      },
      {
        title: "Supplier Management in SAP Ariba",
        details: [
          "Supplier on-boarding and qualification",
          "Supplier relationship management",
          "Evaluating supplier performance"
        ]
      },
      {
        title: "Strategic Sourcing",
        details: [
          "Creating and managing sourcing events",
          "Conducting auctions and bids",
          "Supplier negotiation and collaboration"
        ]
      },
      {
        title: "Contract Management",
        details: [
          "Contract creation and templates",
          "Contract approval and tracking",
          "Managing contract compliance"
        ]
      },
      {
        title: "Spend Analysis and Reporting",
        details: [
          "Data analysis and spend visibility",
          "Generating procurement reports and dashboards",
          "Identifying cost-saving opportunities"
        ]
      },
      {
        title: "Compliance and Risk Management",
        details: [
          "Compliance management tools in SAP Ariba",
          "Risk assessment and mitigation",
          "Regulatory compliance and audit controls"
        ]
      },
      {
        title: "Hands-On Practice and Case Studies",
        details: [
          "Practical exercises with procurement scenarios",
          "Case studies on successful SAP Ariba implementations"
        ]
      },
      {
        title: "SAP Ariba Procurement Integrations",
        details: [
          "Integrating SAP Ariba with ERP and financial systems",
          "Overview of API-based and third-party integrations",
          "Real-time data synchronization"
        ]
      }
    ]
  },
  {
    id: 1,
    skills: [
      "Data Preprocessing and Cleaning",
      "Statistical Analysis and Data Visualization",
      "Machine Learning Algorithms",
      "Deep Learning and Neural Networks",
      "Predictive Modeling and Evaluation",
      "AI Model Deployment and Optimization"
    ],
    aboutTheCourse: `This course offers training in data science techniques and artificial intelligence applications. It covers essential topics like data preprocessing, machine learning, and predictive analytics. By the end, participants gain hands-on experience with real-world datasets, equipping them to build intelligent systems and make data-driven decisions.`,
    courseOutline: [
      {
        title: "Introduction to Data Science and AI",
        details: [
          "Overview of Data Science and AI",
          "Applications of Data Science in various industries",
          "AI in decision-making and automation"
        ]
      },
      {
        title: "Data Preprocessing and Cleaning",
        details: [
          "Data collection and understanding data types",
          "Data cleaning techniques (handling missing data, outliers, etc.)",
          "Data transformation and feature scaling"
        ]
      },
      {
        title: "Exploratory Data Analysis (EDA) and Visualization",
        details: [
          "Statistical analysis and data summarization",
          "Data visualization with libraries (e.g., Matplotlib, Seaborn)",
          "Identifying patterns and insights through EDA"
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        details: [
          "Supervised vs. Unsupervised learning",
          "Key algorithms (Linear Regression, Decision Trees, Clustering, etc.)",
          "Model training, testing, and evaluation metrics"
        ]
      },
      {
        title: "Advanced Machine Learning Techniques",
        details: [
          "Ensemble methods (Random Forest, Gradient Boosting)",
          "Dimensionality reduction (PCA, t-SNE)",
          "Hyperparameter tuning and cross-validation"
        ]
      },
      {
        title: "Natural Language Processing (NLP) and Text Analytics",
        details: [
          "Basics of NLP and text pre-processing",
          "Sentiment analysis and topic modeling",
          "Word embeddings and advanced NLP models"
        ]
      },
      {
        title: "AI Model Deployment",
        details: [
          "Model serving and deployment in production",
          "Introduction to cloud-based deployment (e.g., AWS, Azure)",
          "Monitoring and maintaining deployed models"
        ]
      },
      {
        title: "Real-World Project and Capstone",
        details: [
          "Hands-on project integrating all course concepts",
          "Working with real datasets to solve practical problems",
          "Final project presentation and feedback"
        ]
      }
    ]
  },
  {
    id: 26599,
    skills: [
      "Python Programming for Data Science",
      "Neural Network Architecture Design",
      "Model Training and Optimization",
      "TensorFlow and PyTorch Frameworks",
      "Handling and Processing Large Datasets"
    ],
    aboutTheCourse: `This course is designed to equip you with fundamental and advanced Python programming skills specifically applied to deep learning. It covers essential concepts in neural networks, including training models, handling large datasets, and using popular frameworks. This course is ideal for those interested in building AI-powered applications and advancing in machine learning and artificial intelligence.`,
    courseOutline: [
      {
        title: "Introduction to Python for AI and Deep Learning",
        details: [
          "Master Python basics, including essential data structures and functions.",
          "Explore libraries like NumPy, Pandas, and Matplotlib for data preprocessing and visualization."
        ]
      },
      {
        title: "Convolutional Neural Networks (CNNs)",
        details: [
          "Dive into CNN architecture for image processing and computer vision applications.",
          "Implement transfer learning and fine-tune pretrained models for specific tasks."
        ]
      },
      {
        title: "Machine Learning Fundamentals and Neural Networks",
        details: [
          "Learn foundational machine learning concepts, including supervised and unsupervised learning.",
          "Understand neural networks, activation functions, and backpropagation."
        ]
      },
      {
        title: "Recurrent Neural Networks (RNNs) and Natural Language Processing (NLP)",
        details: [
          "Study RNNs, LSTMs, and GRUs for sequential data and time-series analysis.",
          "Learn NLP basics for text processing, sentiment analysis, and language generation."
        ]
      },
      {
        title: "Deep Learning with TensorFlow and Keras",
        details: [
          "Get hands-on with TensorFlow and Keras to build, train, and evaluate deep learning models.",
          "Focus on model optimization, regularization, and overfitting prevention techniques."
        ]
      }
    ]
  },
  {
    id: 26598,
    skills: [
      "User Management",
      "Data Management",
      "Automation Skills",
      "Reporting and Dashboards",
      "Security and Access Control",
      "Salesforce Platform Customization",
      "AppExchange Utilization"
    ],
    aboutTheCourse: `This course is designed to equip you with essential skills to manage and configure the Salesforce platform, streamline business processes, and support user productivity. This course covers core topics like dashboard creation, data management, automation, and security settings. Perfect for aspiring CRM managers, it prepares participants to confidently handle administrative tasks and support organizational growth.`,
    courseOutline: [
      {
        title: "Introduction to Salesforce",
        details: [
          "Overview of CRM and Salesforce Platform",
          "Navigating the Salesforce Interface",
          "Salesforce Ecosystem: Overview of Clouds and Applications"
        ]
      },
      {
        title: "User Management",
        details: [
          "Creating and Managing Users",
          "Roles, Profiles, and Permission Sets",
          "Password Policies and Login Access Management"
        ]
      },
      {
        title: "Data Management",
        details: [
          "Data Modeling: Objects, Fields, and Relationships",
          "Data Import and Export (Data Loader, Import Wizard)",
          "Data Quality and Deduplication Techniques"
        ]
      }
    ]
  }
];

const SingleCourse = () => {
  debugger;
  const { sap_btn, ready_to_upskill_btn } = style
  const [courseData, setcourseData] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (state) {
      const filteredCourseData = Data.find((course) => course.id === state.Id);
      setcourseData(filteredCourseData ? { ...state, ...filteredCourseData } : { ...Data[1], ...state });
    } else {
      setcourseData(Data[1]);
    }
  }, [state]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("Dataa", courseData)
  return (
    <>
      <TopNavbar />


      <div className="container-sm-fluid px-3 px-0 gradient_box  d-lex  flex-column align-items-center pb-sm-5 pt-sm-5"
        style={{
          backgroundImage: `url(${HerobackImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      ><div className="mt-3"></div>
        <div className=" p-sm-4  p-2 shadow-lg custom-rounded m-auto position-relative course_container" style={{ width: '85%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 50 }}>
          {/* <div className="gradient_box"></div> */}
          <div className="row p-2  ">
            <div className="col-12">
              <div className="row jus">
                <div className="col-sm-7">
                  <div>
                    <button className={` font18 bg_khaigreen border-0 text-white custom-rounded px-4 py-1`} style={{ width: '110px' }}>SAP</button>
                  </div>
                  <div className='mt-5 '>
                    <h1 className='text-center text-sm-left' style={{ fontSize: 58 }}>{courseData?.stxt}</h1>
                    <p className='mt-2 font13 text-center text-sm-left'>{courseData?.discription}</p>
                    <div className='d-flex justify-content-center justify-content-sm-start font11 mt-1 '>
                      <div>5.0</div>
                      <div className='mx-1'>
                        <i className="fa-sharp fa-solid fa-star mr-1" style={{ color: '#FED200' }}></i>
                        <i className="fa-sharp fa-solid fa-star mr-1" style={{ color: '#FED200' }}></i>
                        <i className="fa-sharp fa-solid fa-star mr-1" style={{ color: '#FED200' }}></i>
                        <i className="fa-sharp fa-solid fa-star mr-1" style={{ color: '#FED200' }}></i>
                        <i className="fa-sharp fa-solid fa-star " style={{ color: '#FED200' }}></i>
                      </div>
                      <div className='text-secondary font10'> 2000 ratings</div>
                    </div>
                  </div>
                  {
                    windowWidth < 580 ? <>
                      <div className='row  mt-2 align-items-center justify-content-center '>

                        <div className="  position-relative d-flex  mt-1" style={{ left: '16px' }}>
                          <div className="testimonial position-relative" shtyle={{ left: '0' }}>
                            <img src={profile2} alt="User 1" className="user-icon" style={{ width: 35 }} />
                          </div>
                          <div className="testimonial position-relative" style={{ right: '12px' }}>
                            <img src={prof1} alt="User 2" className="user-icon" style={{ width: 35 }} />
                          </div>
                          <div className="testimonial position-relative" style={{ right: '24px' }}>
                            <img src={prof2} alt="User 3" className="user-icon" style={{ width: 35 }} />
                          </div>
                        </div>

                        <div className=' position-relative font13 text-center'>4,000 Learners Enrolled</div>


                      </div>
                      <div className='text-center mt-3'>
                        <div className="  navbtn p-2 ">
                          Ready To Upskill
                        </div>

                      </div></> : <div className='d-flex  mt-5 align-items-center '>
                      <div className=''>
                        {/* <button className={`${ready_to_upskill_btn}`}>Ready To Upskill</button> */}

                        <div className=" navbtn p-2 ">
                          Ready To Upskill
                        </div>

                      </div>
                      <div className=" position-relative d-flex  mt-1" style={{ left: '16px' }}>
                        <div className="testimonial position-relative" shtyle={{ left: '0' }}>
                          <img src={profile2} alt="User 1" className="user-icon" style={{ width: 35 }} />
                        </div>
                        <div className="testimonial position-relative" style={{ right: '12px' }}>
                          <img src={prof1} alt="User 2" className="user-icon" style={{ width: 35 }} />
                        </div>
                        <div className="testimonial position-relative" style={{ right: '24px' }}>
                          <img src={prof2} alt="User 3" className="user-icon" style={{ width: 35 }} />
                        </div>
                      </div>

                      <div className=' position-relative font13'>4,000 Learners Enrolled</div>
                    </div>
                  }

                </div>
                { }
                {

                  <div className="col-sm-5 d-flex d-sm-block d-none justify-content-center align-items-center">
                    <img src={heroImage} className='' style={{ width: '105%', height: "auto" }} alt="Course" />
                  </div>
                }

              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="container-fluid d-sm-block d-none px-sm-5 py-3 py-sm-0" style={{ width: "" }}>
          <InfoCard data={courseInfoCardData} count={false} gradient={false} />
        </div>
        <div className="d-sm-none px-sm-5 py-3 py-sm-0" style={{ width: "" }}>
          <InfoCard data={courseInfoCardData} count={false} gradient={false} />
        </div>

      </div>
      <div className="container-sm-fluid" style={{
        backgroundImage: `url(${course_bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: 0,
      }}>
        <div className="container gutter-0 py-sm-5 py-3 px-0 pl-sm-5" style={{ width: "83%", }}>
          <div className="row gutter-0 p-0" >
            <div className="col-sm-6 col-md-8  col-lg-7 p-0">
              <h1 className='left_underline'>About This Course</h1>
              <p className='my-sm-5 my-2 font13 mb-3 mb-sm-0'>{courseData?.aboutTheCourse}</p>
            </div>
            <div className="col-sm-6 p-0 col-md-4 col-lg-5  d-flex justify-content-sm-center mb-2 mb-sm-0  justify-content-sm-end align-items-center ">
              <div className="">
                <h1 className='left_underline'>Skills You’ll Gain</h1>
                <ul className='my-sm-5 my-2'>
                  {
                    courseData?.skills?.map((skills) => {
                      return <li className='font13'><i class="fa-solid fa-circle-check mr-1" style={{ color: '#008F71' }}></i> {skills}</li>
                    })
                  }
                </ul>
              </div>


            </div>
          </div>
          <div className="row gutter-0">
            <div className=" col-sm-6 col-md-8  p-0 mt-3 mt-sm-0 col-lg-7 bg-white mb-4  d-flex flex-column text-black  shadow custom-rounded border border-dark " style={{ position: 'relative', zIndex: 1 }}>
              <div className="row px-3">
                <div className="col  px-sm- py-sm-4 py-1  text-bold border-bottom border-dark "><h3> Course Outline</h3></div>
              </div>
              <table className='table-rounded-bottom' style={{ width: "100%", }}>
                {/* <thead>
        <tr>
          <th className='px-4 py-2' colSpan="2" style={{ fontSize: "1.5em", textAlign: "left", borderBottom: "1px solid #000" }}>
            Course Outline
          </th>
        </tr>
      </thead> */}
                <tbody>
                  {courseData?.courseOutline?.map((item, index) => (
                    <tr key={index}>
                      <td style={{ width: "50%", border: "1px solid #000", padding: "10px 14px", verticalAlign: "top" }}>
                        <strong>{item?.title}</strong>
                        {item?.details?.map((detail, idx) => (
                          <p className='font12' key={idx} >{detail}</p>
                        ))}
                      </td>
                      {index + 1 < courseData.courseOutline.length ? (
                        <td style={{ width: "50%", border: "1px solid #000", padding: "10px 14px", verticalAlign: "top" }}>
                          <strong>{courseData?.courseOutline[index + 1]?.title}</strong>
                          {courseData?.courseOutline[index + 1]?.details?.map((detail, idx) => (
                            <p key={idx} className='font12' >{detail}</p>
                          ))}
                        </td>
                      ) : (
                        <td style={{ width: "50%", border: "1px solid #000", padding: "10px 14px", verticalAlign: "top" }} />
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-6 p-0 pt-2 pt-sm-0 col-md-4 col-lg-5 d-flex justify-content-sm-end align-items-center">
              <div className="coursegradientCircle"></div>
              <img src={shopify_coins} className='' style={{ height: "auto", width: "80%", marginLeft: '30px', position: "relative", zIndex: 3 }} alt="" srcset="" />

              <div className="coursegradientCircle2"></div>
            </div>
          </div>

          {/* <div className="row justify-content-center mt-sm-1">
      <button className={`${ready_to_upskill_btn}`}>Enroll Now</button>
</div> */}
        </div>

      </div>


      <div className="container-flui  pt-5 ladder_box"
        style={{
          // backgroundImage: `url(${ladder_background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          // paddingBottom:165
        }}
      >
        <div className="w-100">

          <div className="d-sm-block d-none courseGradientCircleLeft "></div>
          <h1 className="text-center  generic_heading" style={{ color: '#000000', fontSize: 43 }}> How Do You decide This Course Suits You</h1>
          <div className="container d-flex justify-content-center mt-4 " style={{ background: "" }}>
            <div className="row mx-lg-5 mt-sm-5 mt-n2 justify-content-center bg-primar">
              <div className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
                <img src={compass1} alt="" />
                <p className="line-height-sm font13">Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
              </div>
              <div className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
                <img src={compass2} alt="" />
                <p className="line-height-sm font13">Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
              </div>
              <div className="col-sm-3 custom-rounded mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black p-3 shadow ">
                <img src={compass3} alt="" />
                <p className="line-height-sm font13">Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
              </div>
            </div>


          </div>
        </div>
        <div className="d-none d-sm-block" style={{ height: 170, }}></div>

      </div>
      <div className="container-fluid bg_green py-4 ">
        <div className="container custom-rounded bg-white mx-sm-5">
          <div className="row py-3 rounded-5 px-sm-5 px-2 align-items-center" >
            <div className="col-sm-3 pr-5">
              <h3>Meet the trainer
                of the course</h3>
              <a href="" className='text-decoration-underline font13'>Meet the full team</a>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-8">
              <div className=" pb-0">
                <div className=" d-flex justify-content-left align-items-center">
                  {/* <span className="p-0" style={{ width: 'fit-content' }}>
    <img
      src={usman}
      alt="Online Shopping VR Glasses"
      className="rounded-circle usman"
    />
  </span> */}
                  <div className='d-flex gap-5 align-items-center'>
                    <img
                      src={usmanProf}
                      alt="Online Shopping VR Glasses"
                      className="rounded-circle usman "
                    />
                    <div className="ml-sm-2 pl-2 pl-sm-0">
                      <h5 className="font-weight-bolder font15">Muhammad Usman</h5>
                      <h6 className="text-secondary font13">Associate SAP Consultant</h6>
                    </div>
                  </div>
                </div>

                <p className="  mt-3 font13"> Ignite your tech passion with our cutting-edge programs, expertly designed to fuse vital technical and soft skills. Whether you're aiming for a global career or advancing your current path, our academy provides the perfect launchpad. Gain a competitive edge with opportunities for international certifications that elevate your professional profile. Dive into a world of innovation and collaboration, where endless possibilities await.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 mb-sm-0">
        <TestimonialSlider />
      </div>
      {/* <Faq data={departmentsFaq}/> */}
      <div className="container-fluid pt-4 pt-sm-5 mb-5"
        style={{
          backgroundImage: `url(${gradeint_background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        <div className="w-100 py-sm-5">
          <h1 className="text-center  generic_heading" style={{ color: '#000000' }} > Looking For Something Else?</h1>
          <div className=" d-flex justify-content-center">
            <div className="row mt-sm-5 justify-content-center bg-primar py-sm-5 py-3">


              <div className="col-sm-3 bg-white mb-4 mx-lg-4 mx-sm-2 d-flex flex-column text-black  shadow custom-rounded border border-dark fixed-height">
                <div className="row ">
                  <div className="col px-3 py-1 text-bold border-bottom border-dark">Article</div>
                </div>
                <div className="d-flex flex-column justify-content-center h-100">
                  <h4>Detective Hallucinations in Generative AI</h4>
                  <p className="line-height-sm">We embrace continuous for growth.</p>
                </div>
              </div>
              <div className="col-sm-3 bg-white mb-4 mx-lg-4 mx-sm-2 d-flex flex-column text-black  shadow custom-rounded border border-dark fixed-height">
                <div className="row ">
                  <div className="col px-3 py-1 text-bold border-bottom border-dark">Article</div>
                </div>
                <div className="d-flex flex-column justify-content-center h-100">
                  <h4>Detective Hallucinations in Generative AI</h4>
                  <p className="line-height-sm">We embrace continuous for growth.</p>
                </div>
              </div>
              <div className="col-sm-3 bg-white mb-4 mx-lg-4 mx-sm-2 d-flex flex-column text-black  shadow custom-rounded border border-dark fixed-height">
                <div className="row ">
                  <div className="col px-3 py-1 text-bold border-bottom border-dark">Article</div>
                </div>
                <div className="d-flex flex-column justify-content-center h-100">
                  <h4>Detective Hallucinations in Generative AI</h4>
                  <p className="line-height-sm">We embrace continuous for growth.</p>
                </div>
              </div>


            </div>


          </div>
        </div>


      </div>



      <Footer />
    </>
  );
}

export default SingleCourse;

import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import heroImage from '../../assets/single-course-screen/shopify universe 1 1.png';
import HerobackImg from'../../assets/single-course-screen/singleCourseHeroImage.png'

const SingleCourse = () => {
  return (
    <>
      <TopNavbar />
      <div className="container p-b m-5" style={{ backgroundImage: `url(${HerobackImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="row">
          <div className="col-12 p-5">
            <div className="row">
              <div className="col-6">
                <div>
                  <button>SAP</button>
                </div>
                <div className='mt-5'>
                  <h1>Ariba Procurement</h1>
                  <p className='mt-2'>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
                  <div className='d-flex'>
                    <div>5.0</div>
                    <div className='mx-3'>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                      <i className="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i>
                    </div>
                    <div>2000 ratings</div>
                  </div>
                </div>
                <div className='d-flex mt-5 align-items-center'>
                  <div>
                    <button>Ready To Upskill</button>
                  </div>
                  <div className="testimonials- mx-3 d-flex">
                    <div className="testimonial">
                      <img src="user1.jpg" alt="User 1" className="user-icon" />
                    </div>
                    <div className="testimonial">
                      <img src="user2.jpg" alt="User 2" className="user-icon" />
                    </div>
                    <div className="testimonial">
                      <img src="user3.jpg" alt="User 3" className="user-icon" />
                    </div>
                  </div>
                  <div>4,000 Learners Enrolled</div>
                </div>
              </div>
              <div className="col-6" >
                <img src={heroImage} alt="Course"  />
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Footer />
    </>
  );
}

export default SingleCourse;

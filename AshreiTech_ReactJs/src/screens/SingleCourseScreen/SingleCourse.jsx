import React from 'react'
import TopNavbar from '../../components/Nav/TopNavbar'
import Footer from '../../components/Sections/Footer/Footer'
import heroImage from '../../assets/single course screen/shopify universe 1 1.png' 

const SingleCourse = () => {
  return (
    <>
      <TopNavbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div>
                  <button>SAP</button>
                </div>
                <div className='mt-5'>
                  <h1>Ariba Procurement</h1>
                  <p className='mt-2'>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
                  <div className='d-flex'>
                    <div >5.0</div>
                    <div className='mx-3'><i class="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i><i class="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i><i class="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i><i class="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i><i class="fa-sharp fa-solid fa-star" style={{ color: '#FED200' }}></i></div>
                    <div>2000 ratings</div>
                  </div>
                </div>
                <div className='d-flex mt-5 align-items-center'>
                  <div>
                    <button>Ready To Upskill</button>
                  </div>
                  <div class="testimonials- mx-3 d-flex">
                    <div class="testimonial">
                      <img src="user1.jpg" alt="User 1" class="user-icon" />
                    </div>
                    <div class="testimonial">
                      <img src="user2.jpg" alt="User 2" class="user-icon" />
                    </div>
                    <div class="testimonial">
                      <img src="user3.jpg" alt="User 3" class="user-icon" />
                    </div>
                  </div>
                  <div>4,000 Learners Enrolled</div>
                </div>
              </div>
              <div className="col-6" style={{position:'relative'}}>
                <img src={heroImage} alt="" className='img-fluid' style={{width:'100%', height:'auto',position:'absolute' }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Footer />
    </>
  )
}

export default SingleCourse
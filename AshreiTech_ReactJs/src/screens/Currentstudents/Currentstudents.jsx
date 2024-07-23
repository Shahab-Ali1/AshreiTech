import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CurrentstudentsImage from '../../assets/CurrentstudentsImage.png';
import transformingbg from '../../assets/transformingbg.png';
import turningbg from '../../assets/turningbg.png';
import st1 from '../../assets/st (1).png';
import st2 from '../../assets/st (2).png';
import st3 from '../../assets/st (3).png';
import st4 from '../../assets/st (4).png';
import st5 from '../../assets/st (5).png';
import st7 from '../../assets/st (7).png';
import st8 from '../../assets/tsp.png';
import TestimonialSlider from '../../components/Elements/TestimonialSlider';
import style from './style.module.css';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup'; // Import CountUp

const Currentstudents = () => {
  const { st_img, imageContainer, overlay, image, overlayRrightUp, overlayRrightDown, overlayLeftUp, overlayLeftDown } = style;
  const [counter, setCounter] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
      delay: 1000,
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
      <div className="container-fluid"
        style={{
          backgroundImage: `url(${transformingbg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
          <div className="container ">
            <div className="w-100 pb-5">
              <h1 className="text-center mt-5 generic_heading" id='generic_heading_for_transforming'>
                <span style={{ color: '#000000' }}>Transforming Students Into <br /> <span style={{ color: '#008F71' }}>Professional</span></span>
              </h1>
            </div>

            <div className="mt-5 container-fluid d-block d-md-none">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-12">
                  <img src={CurrentstudentsImage} alt="" className='img-fluid' />
                </div>
              </div>
            </div>

            <div className="mt-5 container-fluid d-none d-md-block">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-2">
                  <div className="row">
                    <div className="col-12" data-aos="fade-right">
                      <div className="row d-flex">
                        <div className="col-3">
                          <img src={st1} alt="" className={`${st_img}`} />
                        </div>
                        <div className="col-9"></div>
                      </div>
                    </div>
                    <div className="col-12" data-aos="fade-left">
                      <div className="row d-flex">
                        <div className="col-9"></div>
                        <div className="col-3">
                          <img src={st2} alt="" className={`${st_img}`} />
                        </div>
                      </div>
                    </div>
                    <div className="col-12" data-aos="fade-right">
                      <div className="row d-flex">
                        <div className="col-3">
                          <img src={st3} alt="" className={`${st_img}`} />
                        </div>
                        <div className="col-9"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-8 ${imageContainer}`}>
                  <img src={st8} alt="" className={`${image}`} />
                  <div className={`d-flex justify-content-center flex-column align-items-center ${overlay}`}>
                    {counter &&
                      <h2>
                        <CountUp end={15000} prefix="" separator="," />
                        <span>+</span>
                      </h2>}
                    <h2>Current students</h2>
                  </div>
                  <div className={`col-4 d-flex justify-content-center flex-column align-items-left ${overlayRrightUp}`}>
                    {counter &&
                      <h4>
                        <CountUp end={1000} prefix="" separator="," />
                        <span>+</span>
                      </h4>
                    }
                    <h6 className='font-weight-bold mt-2'>Learn Skills to get hired <br /> into my first <br /> professional job</h6>
                  </div>
                  <div className={`col-4 d-flex justify-content-center flex-column align-items-left ${overlayRrightDown}`}>
                    {counter &&
                      <h4>
                        <CountUp end={1000} prefix="" separator="," />
                        <span>+</span>
                      </h4>
                    }
                    <h6 className='font-weight-bold mt-2'>Switch to a different role <br /> by developing new skills</h6>
                  </div>
                  <div className={`col-4 d-flex justify-content-center flex-column align-items-left ${overlayLeftUp}`}>
                    {counter &&
                      <h4>
                        <CountUp end={4000} prefix="" separator="," />
                        <span>+</span>
                      </h4>
                    }
                    <h6 className='font-weight-bold mt-2'>Develop My Skills to <br /> advanced in my current <br /> role to get a promotion</h6>
                  </div>
                  <div className={`col-4 d-flex justify-content-center flex-column align-items-left ${overlayLeftDown}`}>
                    {counter &&
                      <h4>
                        <CountUp end={8000} prefix="" separator="," />
                        <span>+</span>
                      </h4>}
                    <h6 className='font-weight-bold mt-2'>Switch to a different role<br /> by developing new skills</h6>
                  </div>
                </div>
                <div className="col-2">
                  <div className="row">
                    <div className="col-12" data-aos="fade-left">
                      <div className="row d-flex">
                        <div className="col-9"></div>
                        <div className="col-3">
                          <img src={st4} alt="" className={`${st_img}`} />
                        </div>
                      </div>
                    </div>
                    <div className="col-12" data-aos="fade-right">
                      <div className="row d-flex">
                        <div className="col-3">
                          <img src={st5} alt="" className={`${st_img}`} />
                        </div>
                        <div className="col-9"></div>
                      </div>
                    </div>
                    <div className="col-12" data-aos="fade-left">
                      <div className="row d-flex">
                        <div className="col-9"></div>
                        <div className="col-3">
                          <img src={st7} alt="" className={`${st_img}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5 py-3" style={{ backgroundImage: `url(${turningbg})` }}>
              <h1 className="text-center generic_heading">
                <span style={{ color: '#000000' }}>Turning Goals Into</span>
                <span style={{ color: '#008F71' }}>&nbsp;Wins!</span> 
              </h1>
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Currentstudents;

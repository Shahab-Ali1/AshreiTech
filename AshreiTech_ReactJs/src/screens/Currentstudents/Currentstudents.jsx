import React, { useEffect } from 'react';
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
import st8 from '../../assets/st (8).png';
import TestimonialSlider from '../../components/Elements/TestimonialSlider';
import style from './style.module.css';

const Currentstudents = () => {
  const { st_img } = style;

  useEffect(() => {
    AOS.init({
      once: false,
      delay: 1000,
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
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
          <div className="w-100 pb-4">
            <h1 className="text-center mt-5" style={{ fontSize: '40px' }}>
              <span style={{ color: '#000000' }}>Transforming Students Into</span>
            </h1>
            <div className="text-center generic_heading mt-5">
              <span style={{ color: '#008F71' }}>Professionals</span>
            </div>
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
              <div className="col-8">
                <img src={st8} alt="" className="" />
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
  );
};

export default Currentstudents;

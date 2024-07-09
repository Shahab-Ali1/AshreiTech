import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from './Footer/Footer';
import TopNavbar from '../Nav/TopNavbar';
import logo from '../../assets/logo.png'
import {  useNavigate } from 'react-router-dom';

function CommingSoon() {
  const navigate = useNavigate();
  return (
    <>
      <TopNavbar />
      <div className="container-fluid" style={{height:'80vh'}}>
      <Wrapper>
        <img src={logo} alt="" />
        <h1 className='ml-5'>coming soon<span className="dot">.</span><br />
        <button className='slider_btn ml-5' onClick={() => navigate("/")}>Back</button>
        
        </h1>
      </Wrapper>
      </div>
      <Footer />
    </>
  );
}

export default CommingSoon;

const fadeIn = keyframes`
  from { top: 20%; opacity: 0; }
  to { top: 100%; opacity: 1; }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 1000ms ease;

  h1 {
    font-size: 80px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0;
    line-height: 1;
    font-weight: 700;
    color: #008F71;

    .dot {
      color: #008F71;
    }
  }


`;



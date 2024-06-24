import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./Route.js";
import { AdmissionEnquiry } from "./screens/AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery.js";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
{/*    
      <BrowserRouter> */}
      {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet> */}
{/*      
        <Routes>
          <Route path="/" element={ <Landing />}/>
          <Route path="/AdmissionEnquiry" element={<AdmissionEnquiry />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}


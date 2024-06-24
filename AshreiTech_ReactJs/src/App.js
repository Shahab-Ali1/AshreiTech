import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./Route.js";
import { AdmissionEnquiry } from "./screens/AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery.js";
import axios from "axios";

export default function App() {
  const loginApi = () => {
    let body = {
      "Data": {
        "user": {
          "username": "atadmin",
          "password": "atadmin123",
          "userclientid": 164
        }
      }
    };

    axios.put("https://uta.edu-man.com/ut/api/utuser/v2/loginV3", body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response?.data?.Data?.Session?.token) {
          let token = response?.data?.Data?.Session?.token;
          localStorage.setItem("Token", JSON.stringify(token))
        }
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };
  useEffect(() => {
    loginApi();
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


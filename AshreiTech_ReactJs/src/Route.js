import { createHashRouter } from "react-router-dom";
import {AdmissionEnquiry} from "./screens/AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery";
import Landing from "./screens/Landing";

export const router = createHashRouter([
    {
      path: "/",
      element:  <Landing />,
    },  
    {
      path: "/AdmissionEnquiry",
      element: <AdmissionEnquiry />,
    },
  
  ]);
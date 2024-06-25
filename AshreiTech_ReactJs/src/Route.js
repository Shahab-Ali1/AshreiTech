import { createHashRouter } from "react-router-dom";
import {AdmissionEnquiry} from "./screens/AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery";
import Landing from "./screens/Landing";
import { GetInTouch } from "./screens/AsheriTechComponents/GetInTouch/GetInTouch";

export const router = createHashRouter([
    {
      path: "/",
      element:  <Landing />,
    },  
    {
      path: "/GetInTouch",
      // element: <AdmissionEnquiry />,
      element: <GetInTouch />,
    },
  
  ]);
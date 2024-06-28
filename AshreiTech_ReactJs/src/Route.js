import { createHashRouter } from "react-router-dom";
import {AdmissionEnquiry} from "./screens/AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery";
import Landing from "./screens/Landing";
import { GetInTouch } from "./screens/AsheriTechComponents/GetInTouch/GetInTouch";
import { RegistrationForm } from "./screens/AsheriTechComponents/RegistrationForm/RegistrationForm";

export const router = createHashRouter([
    {
      path: "/",
      element:  <Landing />,
    },  
    {
      path: "/GetInTouch",
      element: <GetInTouch />,
    },
    {
      path: "/RegistrationForm",
      element: <RegistrationForm />,
    },
  
  ]);
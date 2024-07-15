import { createHashRouter } from "react-router-dom";
import {AdmissionEnquiry} from "./screens/AsheriTechComponents/AdmissionEnquiery/AdmissionEnquiery";
import Landing from "./screens/Landing";
import { GetInTouch } from "./screens/AsheriTechComponents/GetInTouch/GetInTouch";
import { RegistrationForm } from "./screens/AsheriTechComponents/RegistrationForm/RegistrationForm";
import Teams from "./screens/Teams/Teams";
import BookaRoom from "./screens/BookaRoom/BookaRoom";
import WhatWeDo from "./screens/WhatWeDo/WhatWeDo";
import AboutTheCompany from "./screens/AboutTheCompany/AboutTheCompany";
import CommingSoon from "./components/Sections/CommingSoonPage/CommingSoon";

export const router = createHashRouter([
    {
      path: "/test",
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
    {
      path: "/teams",
      element: <Teams/>,
    },
    {
      path: "/BookaRoom",
      element: <BookaRoom/>,
    },
    {
      path: "/WhatWeDo",
      element: <WhatWeDo/>,
    },
    {
      path: "/aboutthecompany",
      element: <AboutTheCompany/>,
    },
    {
      path: "/services",
      element: <CommingSoon/>,
    },
  
  
  ]);
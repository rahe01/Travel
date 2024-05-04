import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLay from "../Pages/MainLay";
import About from "../Components/About/About";
import Sec from "../Pages/Sec";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLay></MainLay>,
      children: [
        {
            path: '/',
            element: <Sec></Sec>
        }
        
        ,
        {
            path: '/about',
            element: <About></About>
        }
      ],
    },
  ]);

  export default router;



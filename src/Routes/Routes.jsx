import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLay from "../Pages/MainLay";
import About from "../Components/About/About";
import Sec from "../Pages/Sec";
import Singin from "../Components/Login/Singin";
import Singup from './../Components/Register/Singup';

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
        },
        {
          path : '/singin',
          element : <Singin></Singin>
        },
        {
          path : '/singup',
          element : <Singup></Singup>
        }
      ],
    },
  ]);

  export default router;



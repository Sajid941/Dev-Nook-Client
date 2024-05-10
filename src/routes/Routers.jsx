import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'login',
            element:<Login/>
          },
          {
            path:'register',
            element:<Register/>
          }
        ]
    }
  ])
  export default router;
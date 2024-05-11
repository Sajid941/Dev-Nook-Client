import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddBlogs from "../pages/AddBlogs";
import ErrorPage from "../pages/ErrorPage";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/register',
            element:<Register/>
          },
          {
            path:'/addBlogs',
            element:<AddBlogs/>
          }
        ]
    }
  ])
  export default router;
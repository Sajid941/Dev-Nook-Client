import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddBlogs from "../pages/AddBlogs";
import ErrorPage from "../pages/ErrorPage";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
import UpdateBlogs from "../pages/UpdateBlogs";
import Wishlist from "../pages/Wishlist";
import PrivateRoute from "./PrivateRoute";
import FeaturedBlogs from "../pages/FeaturedBlogs";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/addBlogs',
        element: <PrivateRoute><AddBlogs /></PrivateRoute>
      },
      {
        path:'/allBlogs',
        element:<AllBlogs/>,
        loader:()=>fetch('http://localhost:3000/blogs')
      },
      {
        path:'/blogDetails/:id',
        element:<BlogDetails/>,
        loader:({params})=>fetch(`http://localhost:3000/blogs/${params.id}`)
      },
      {
        path:"/updateBlogs/:id",
        element:<PrivateRoute><UpdateBlogs/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/blogs/${params.id}`)
      },
      {
        path:'/wishlist',
        element:<PrivateRoute><Wishlist/></PrivateRoute>
      },
      {
        path:'/featuredBlogs',
        element:<FeaturedBlogs/>
      }

    ]
  }
])
export default router;
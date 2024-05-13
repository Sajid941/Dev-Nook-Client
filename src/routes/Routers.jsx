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
        element: <AddBlogs />
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
        element:<UpdateBlogs/>,
        loader:({params})=>fetch(`http://localhost:3000/blogs/${params.id}`)
      }
    ]
  }
])
export default router;
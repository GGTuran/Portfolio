import App from "@/App";
import BlogDetails from "@/components/Blog/BlogDetails";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";

import ProjectDetails from "@/pages/ProjectDetails";

import { createBrowserRouter } from "react-router-dom";
// import ProductDetails from "@/pages/ProductDetails";
// import AllProducts from "@/pages/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/projects/:projectId",
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/blogs/:blogId",
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
]);

export default router;

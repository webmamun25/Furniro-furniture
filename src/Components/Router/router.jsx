
import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import FurnitureProducts from "../FurnitureProducts/FurnitureProducts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
      element: <Home></Home>
        },
        {
            path: "/furniture",
      element: <FurnitureProducts></FurnitureProducts>
        }
      ]
    },
  ]);

export default router
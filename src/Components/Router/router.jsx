
import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import FurnitureProducts from "../FurnitureProducts/FurnitureProducts";
import FurnitureDetails from "../FurnitureDetails/FurnitureDetails";
import Signup from "../Registration/Signup";
import Signin from "../Registration/Signin";
import Cart from "../FurnitureCart/Cart";
import Buyproduct from "../FurnitureCart/Buyproduct";
import Payment from "../Payment/Payment";
import Order from "../Pages/Order/Order";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Makeadmin from "../Pages/Makeadmin/Makeadmin";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


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
        },
        {
            path: "/furniture/:id",
            element: <PrivateRoute><FurnitureDetails></FurnitureDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://furniture-server-ecru.vercel.app/products/${params.id}`)
   
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/signin',
          element:<Signin></Signin>
        },
        {
          path:'/furniture/cart',
          element:<Cart></Cart>
        },
        {
          path:'/furniture/buynow',
          element:<Buyproduct></Buyproduct>
        },
        {
          path:'/furniture/pay',
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
          path:'/furniture/myorder',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path:'/makeadmin',
          element:<AdminRoute><Makeadmin></Makeadmin></AdminRoute>
        },
        {
          path:'/userdashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path:'/admindashboard',
          element:<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
        },
      ]
    },
    
  ]);

export default router
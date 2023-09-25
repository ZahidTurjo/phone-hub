import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home";
import Favourties from "../pages/Favourites/Favourties";
import Login from "../pages/Login/Login";
import Phone from "../pages/Phone/Phone";

const myCreateRoute = createBrowserRouter([

    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement:<div>Oppsss error;</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('../phones.json')
            },
            {
                path: "/favourites",
                element: <Favourties></Favourties>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
path:"/phone/:id",
element:<Phone></Phone>,
loader:()=>fetch('../phones.json')
            }
        ]
    },
    {

    }
])

export default myCreateRoute;
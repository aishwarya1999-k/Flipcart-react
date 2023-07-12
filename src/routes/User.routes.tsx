import { Outlet } from "react-router-dom";
import { Login } from "../views";
import { Register } from "../views/register/Register.page";


export let UserRoutes={
    path:'/client',
    element:<div>
        <Outlet/>
        </div>,
    children:[
        {
            path:'login',
            element:<Login/>
        }
        , {
            path:'register',
            element:<Register/>
        }
    ]
}
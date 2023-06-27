import {AuthLayout} from "./Layout/AuthLayout";
import Home from "./Pages/Home";
import {Login} from "./Pages/Login";
import Private from "./Pages/Private";

const routes = [
    {
        path:'/',
        children: [
            {
                index:true,
                element: <Home />,
            },
        ],
    },
    {
        path:'/login',
        element: <AuthLayout />,
        children: [
            {
                index:true,
                element: <Login />,
            },
        ],
    },
    {
        path:'/user',
        element: <Private />,
        children: [
            {
                index:true,
                element: <Login />,
            },
        ],
    },

]

export default routes;
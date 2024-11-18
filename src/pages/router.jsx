import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from './Login';
import ForgetPassword from './ForgetPassword';

import Home from './Home';
import Main from '../layouts/Main';
import MainDashboard from '../layouts/MainDashboard';
import Inventory from './Inventory';
import FormAddDevice from './FormAddDevice';
import UserRegister from '../components/UserRegister';
import MainInventory from '../layouts/MainInventory';
import RequestDevices from './RequestDevices';
import Users from './Users';

export default createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/', element: <Login />, loader: () => {
                    const token = localStorage.getItem("token");
                    return (token) && redirect("/home");
                }
            },
            {
                path: '/restablecer-contraseña/:token', element: <ForgetPassword />, loader: () => {
                    const token = localStorage.getItem("token");
                    return (token) && redirect("/home");
                }
            }
        ]
    },
    {
        path: '/', element: <MainDashboard />, children: [
            {
                path: '/home', element: <Home />, loader: () => {
                    const token = localStorage.getItem("token");
                    return (!token) && redirect("/")
                }
            },
            {
                path: '/request-devices', element: <RequestDevices />, loader: () => {
                    const token = localStorage.getItem("token");
                    const user = JSON.parse(localStorage.getItem("user"));
                    return (!token) && (user.role != 1) && redirect("/home");
                }
            },
            {
                path: '/', element: <MainInventory />, children: [
                    {
                        path: '/inventory', element: <Inventory />
                    },
                    {
                        path: '/users', element: <Users />
                    },
                    {
                        path: '/add-device', element: <FormAddDevice />
                    },
                    {
                        path: '/UserRegister', element: <UserRegister />
                    }
                ], loader: () => {
                    const token = localStorage.getItem("token");
                    const user = JSON.parse(localStorage.getItem("user"));
                    return (!token) && (user.role != 1) && redirect("/home");
                }
            }

        ]
    },
])
import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from './Login';
import ForgetPassword from './ForgetPassword';

import Home from './Home';
import Main from '../layouts/Main';
import MainDashboard from '../layouts/MainDashboard';
import Inventory from './Inventory';
import UserRegister from '../components/UserRegister';

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
                path: '/inventory', element: <Inventory />, loader: () => {
                    const token = localStorage.getItem("token");
                    return (!token) && redirect("/")
                }
            }
          
        ]       
    },
    {
        path: '/UserRegister', element: <UserRegister />    
    }
])
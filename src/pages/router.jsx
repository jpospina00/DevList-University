import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from './Login';
import ForgetPassword from './ForgetPassword';

import Home from './Home';
import Main from '../layouts/Main';
import MainDashboard from '../layouts/MainDashboard';

export default createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            {
                path: '/', element: <Login />, loader: () => {
                    const token = localStorage.getItem("token");
                    return (token) && redirect("/home");
                }
            },
            { path: '/restablecer-contraseña', element: <ForgetPassword /> }

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
        ]
    }
])
import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from './Login';
import ForgetPassword from './ForgetPassword';

import Home from './Home';
import Main from '../layouts/Main';

export default createBrowserRouter([ 
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Login /> },
            { path: '/home', element: <Home /> , loader: () => {
                const token = localStorage.getItem("token");
                return (!token) && redirect("/")
            }},
            { path: '/restablecer-contraseña', element: <ForgetPassword /> }

        ]
    }
])
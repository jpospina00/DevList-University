import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import ForgetPassword from './ForgetPassword';

import Home from './Home';
import Main from '../layouts/Main';

export default createBrowserRouter([ 
    {
        path: '/', element: <Main />, children: [
            { path: '/home', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/restablecer-contraseña', element: <ForgetPassword /> }

        ]
    }
])
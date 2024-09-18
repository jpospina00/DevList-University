import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Login2 from './Login2';
import Home from './Home';
import Main from '../layouts/Main';

export default createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login2 /> },
    {
        path: '/', element: <Main />, children: [
            { path: '/home', element: <Home /> }
        ]
    }
])
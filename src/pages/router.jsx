import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Login2 from './Login2';

export default createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login2 />}
])
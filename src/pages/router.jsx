import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Login2 from './Login2';
import ForgetPassword from './ForgetPassword';


export default createBrowserRouter([
    // { path: '/', element: <Login /> },
    { path: '/', element: <Login2 />},
    { path: '/restablecer-contraseña', element: <ForgetPassword />}
])
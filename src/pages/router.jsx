import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';

export default createBrowserRouter([
    { path: '/', element: <Login /> }
])
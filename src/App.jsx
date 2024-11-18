import { RouterProvider } from 'react-router-dom';
import router from './pages/router';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
  }, []);

  return (
    <RouterProvider router={router} />
  )
}
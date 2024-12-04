import { RouterProvider } from 'react-router-dom';
import router from './pages/router';
import { useEffect } from 'react';
import axios from 'axios';
import Api from './Api';
import Headers from './Headers';

export default function App() {

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    if (token) {
      axios.get(`${Api}auth/logout`, Headers('application/json')).then((res) =>{
        console.log(res);
      }).catch((err) =>{
        console.log(err);
        localStorage.removeItem('token');
        window.location.reload();
      });
    }
  }, []);

  return (
    <RouterProvider router={router} />
  )
}
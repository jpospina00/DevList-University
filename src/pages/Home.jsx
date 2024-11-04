import imgHome from '../assets/ImgHome.png';
import Card from '../components/Card';
import Filters from '../components/Filters';
import img from '../assets/Images/Images1.png';
import img2 from "../assets/Images/Images2.png";
import img3 from "../assets/Images/Images3.png";
import img4 from "../assets/Images/Images4.png";
import { useEffect, useState } from 'react';
import ApiUrl from "../Api.js";
import Headers from "../Headers.js";
import axios from 'axios';

export default function Home() {

    const [devices, setDevices] = useState([]);

    const data = [
        {
            img: img,
            title: "Laptop Dell Inspiron 15",
            available: true,
            stock: 3
        },
        {
            img: img2,
            title: "Video beam",
            available: false,
            stock: 5
        },
        {
            img: img3,
            title: "Tablet",
            available: true,
            stock: 10
        },
        {
            img: img4,
            title: "Parlantes",
            available: false,
            stock: 1
        },
    ];

    useEffect(() => {
        console.log("hola")
        let filters = {
            name: ""
        };
        console.log(filters);
        axios.post(`${ApiUrl}device/`, filters, Headers('application/json')).then((res) => {
            console.log(res);
            setDevices(res.data.data);
        }).catch((err) => {
            setNotFound(!notFound);
        })
    }, [])

    return (
        <main className="relative">
            <img className="absolute w-full h-[300px]" src={imgHome} alt="Fondo" />
            <div className='flex items-center justify-center h-[300px]'>
                <h1 className='font-montserrat text-5xl'> Pagina Principal </h1>
            </div>
            <Filters />
            <div className='w-full pt-28 pb-28 grid grid-cols-4 place-items-center gap-14 pl-24 pr-24'>
                {
                    devices.map((device, i) => <Card 
                    key={i} 
                    img={"https://drive.google.com/thumbnail?id=" + device.urlPicture} 
                    title={device.name} 
                    available={device.deviceStatus == "Disponible"} 
                    stock={5} />)
                }
            </div>
        </main >
    )
}
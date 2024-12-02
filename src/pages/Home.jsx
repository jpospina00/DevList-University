import imgHome from '../assets/ImgHome.png';
import Card from '../components/Card';
import Filters from '../components/Filters';
import { useEffect, useState } from 'react';
import ApiUrl from "../Api.js";
import Headers from "../Headers.js";
import axios from 'axios';

export default function Home() {

    const [devices, setDevices] = useState([]);
    const [addDevices, setAddDevices] = useState([]);

    useEffect(() => {
        let filters = {
            name: ""
        };
        console.log(filters);
        axios.post(`${ApiUrl}device/`, filters, Headers('application/json')).then((res) => {
            console.log(res.data.data);
            setDevices(res.data.data);
        }).catch((err) => {
            setNotFound(!notFound);
        })
    }, [])

    const addRequest = async () => {
        let resultado = [];
        console.log(resultado);
        for (let i = 0; i < addDevices.length; i++) {
            const element = addDevices[i];
            let encontrado = resultado.find(device => element.deviceId === device.deviceId);
            if (encontrado) {
                encontrado.quantity += 1; // Aumenta la cantidad si ya existe
            } else {
                resultado.push({ deviceId: element.deviceId, quantity: 1 }); // Agrega un nuevo objeto si no existe
            }
        }
        let data = {
            request: {
                device: resultado
            }
        }
        console.log(data);
        axios.post(`${ApiUrl}request/create-request`, data, Headers('application/json')).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        })
    }

    const addDevice = (device) => {
        let devices = [...addDevices];
        let data = {
            deviceId: device.deviceId,
            quantity: 1
        }
        devices.push(data);
        setAddDevices(devices);
        console.log(devices);
    }

    return (
        <main className="relative">
            <img className="absolute w-full h-[300px]" src={imgHome} alt="Fondo" />
            <div className='flex items-center justify-center h-[300px]'>
                <h1 className='font-montserrat text-5xl'> Pagina Principal </h1>
            </div>
            <Filters addRequest={addRequest} />
            <div className='w-full pt-28 pb-28 grid grid-cols-4 place-items-center gap-14 pl-24 pr-24'>
                {
                    devices.map((device) => <Card
                        key={device.deviceId}
                        device={device}
                        onClick={addDevice} />)
                }
            </div>
        </main >
    )
}
import imgHome from '../assets/ImgHome.png';
import Card from '../components/Card';
import Filters from '../components/Filters';
import { useEffect, useState } from 'react';
import ApiUrl from "../Api.js";
import Headers from "../Headers.js";
import axios from 'axios';

export default function Home() {

    const [devices, setDevices] = useState([]);
    const [waited, setWaited] = useState(null);
    const [reloadWaited, setReloadWaited] = useState(false);

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
    }, [reloadWaited])

    useEffect(() => {
        axios.get(`${ApiUrl}request/waited`, Headers('application/json')).then(res => {
            console.log(res.data);
            setWaited(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [reloadWaited]);

    const addDevice = (device) => {
        console.log(device);
        if (waited.length == 0) {
            let data = {
                request: {
                    device: [
                        {
                            deviceId: device.deviceId,
                            quantity: 1
                        }
                    ]
                }
            }
            console.log(data);
            axios.post(`${ApiUrl}request/create-request`, data, Headers('application/json')).then(res => {
                console.log(res);
                setReloadWaited(!reloadWaited);
            }).catch(err => {
                console.log(err);
            })
        } else {
            console.log(waited);
            let resultado = [...waited];
            console.log(resultado);
            let encontrado = resultado.find(result => device.deviceId === result.deviceId);
            console.log(encontrado);
            if (encontrado) {
                encontrado.quantity += 1;
                encontrado = {
                    deviceId: encontrado.deviceId,
                    quantity: encontrado.quantity
                }
            } else {
                resultado.push({ deviceId: device.deviceId, quantity: 1 });
            }
            let data = {
                request: {
                    device: resultado.map(dev => { return { deviceId: dev.deviceId, quantity: dev.quantity } })
                }
            }
            console.log(data);
            axios.post(`${ApiUrl}request/create-request`, data, Headers('application/json')).then(res => {
                console.log(res);
                setReloadWaited(!reloadWaited);
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <main className="relative">
            <img className="absolute w-full h-[300px]" src={imgHome} alt="Fondo" />
            <div className='flex items-center justify-center h-[300px]'>
                <h1 className='font-montserrat text-5xl'> Pagina Principal </h1>
            </div>
            <Filters />
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
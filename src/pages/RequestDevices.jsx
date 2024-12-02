import { useEffect, useState } from "react";
import CardDeviceRequest from "../components/CardDeviceRequest";
import PopupDelete from "../components/PopupDelete";
import PopupRequest from "../components/PopupRequest";
import axios from "axios";
import Api from "../Api";
import Headers from "../Headers";

export default function RequestDevices() {

    const [show, setShow] = useState(false);
    const [showRequest, setShowRequest] = useState(false);
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        axios.get(`${Api}request/waited`, Headers('application/json')).then(res => {
            console.log(res.data);
            setDevices(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
            {showRequest && <PopupRequest setShowRequest={setShowRequest} />}
            {show && <PopupDelete setShow={setShow} show={show} />}
            <div className="w-full h-full pt-5 pb-5 flex flex-col items-center">
                <div className="flex w-[90%] justify-between pb-5">
                    <h1 className="font-montserrat font-semibold text-4xl"> Equipos a solicitar </h1>
                    <div className="flex w-3/6 justify-end gap-5">
                        <button className="w-[145px] h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Historial </button>
                    </div>
                </div>
                <hr className="border w-[90%] border-secondary0" />
                <div className="w-[90%] h-full flex flex-col pt-5">
                    <h2 className="font-montserrat font-bold text-2xl pb-5"> Dispositivos </h2>
                    <div className="w-full h-[70%] overflow-scroll flex flex-col gap-5">
                        {devices.map(device => <CardDeviceRequest key={device.devdeviceId} device={device} setShow={setShow} />)}
                    </div>
                    <div className="flex justify-between h-[10%] items-center">
                        <h2 className="font-montserrat font-bold text-2xl">
                            Total de dispositivos 4
                        </h2>
                        <button onClick={() => setShowRequest(true)}
                            className="w-[145px] h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                            Solicitar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
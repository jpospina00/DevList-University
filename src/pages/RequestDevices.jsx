import { useEffect, useState } from "react";
import CardDeviceRequest from "../components/CardDeviceRequest";
import PopupDelete from "../components/PopupDelete";
import PopupRequest from "../components/PopupRequest";
import axios from "axios";
import Api from "../Api";
import Headers from "../Headers";
import { Link } from "react-router-dom";

export default function RequestDevices() {

    const [show, setShow] = useState(false);
    const [showRequest, setShowRequest] = useState(false);
    const [devices, setDevices] = useState([]);
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(`${Api}request/waited`, Headers('application/json')).then(res => {
            console.log(res.data.message);
            if (res.data.length > 0) {
                setDevices(res.data);
                setCount(res.data.length);
            } else {
                setMessage(res.data.message);
            }
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const request = () => {
        setShowRequest(true);
    }

    return (
        <>
            {showRequest && <PopupRequest setShowRequest={setShowRequest} devices={devices} />}
            {show && <PopupDelete setShow={setShow} show={show} />}
            <div className="w-full h-full pt-5 pb-5 flex flex-col items-center">
                <div className="flex w-[90%] justify-between pb-5">
                    <h1 className="font-montserrat font-semibold text-4xl"> Equipos a solicitar </h1>
                    <div className="flex w-3/6 justify-end gap-5">
                        <Link to={'/history'} className="flex items-center justify-center w-[135px] h-[35px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                            Historial
                        </Link>
                    </div>
                </div>
                <hr className="border w-[90%] border-secondary0" />
                <div className="w-[90%] h-full flex flex-col pt-5">
                    <h2 className="font-montserrat font-bold text-2xl pb-5"> Dispositivos </h2>
                    <form className="w-full h-[70%] overflow-scroll flex flex-col gap-5">
                        {
                            devices.length > 0 ? devices.map(device => <CardDeviceRequest key={device.devdeviceId} device={device} setShow={setShow} />) :
                                <div className="w-full h-full flex items-center justify-center font-montserrat font-bold text-2xl">
                                    {message}
                                </div>
                        }
                    </form>
                    <div className="flex justify-between h-[10%] items-center">
                        <h2 className="font-montserrat font-bold text-2xl">
                            Total de dispositivos {count}
                        </h2>
                        <button onClick={request}
                            className="w-[145px] h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                            Solicitar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
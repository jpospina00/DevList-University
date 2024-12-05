import CardInventory from "../components/CardInventory";
import FilterIcon from "../assets/FilterIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import Trash from "../assets/Trash.svg";
import imagen1 from '../assets/Images/Images1.png';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ApiUrl from "../Api.js";
import Headers from "../Headers.js";

export default function Inventory() {

    const search = useRef();
    const [devices, setDevices] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [searchValues, setSearchValues] = useState("");
    const [open, setOpen] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [current, setCurrent] = useState(1);
    const [show, setShow] = useState(false);

    const handleSearch = () => {
        setSearchValues(search.current.value?.trim());
    };

    const handleNext = () => {
        console.log(current);
        if (current <= totalPages) {
            setCurrent(current + 1);
        }
    }

    const handlePrev = () => {
        console.log(current);
        if (current > 1) {
            setCurrent(current - 1);
        }
    }

    useEffect(() => {
        let filters = {
            pageSize: 4,
            page: current
        };
        if (searchValues) {
            filters = {
                filters: {
                    name: searchValues
                },
                pageSize: 4,
                page: current
            };
        }
        console.log(filters);
        axios.post(`${ApiUrl}device/`, filters, Headers('application/json')).then((res) => {
            console.log(res);
            setDevices(res.data.data);
            setTotalPages(res.data.totalPages);
        }).catch((err) => {
            setNotFound(!notFound);
        })
    }, [searchValues, current, show]);

    return (
        <>
            <div className="w-full h-[100%] overflow-hidden flex flex-col gap-5 items-center pt-5">
                <div className="flex w-[90%] justify-between">
                    <div className="flex items-center justify-around w-[70%]">
                        <div className="flex items-center cursor-pointer">
                            <img className="w-[18px] h-[16px]" src={FilterIcon} alt="Filtrar" />
                            <p className="text-[#214455]"> Filtrar </p>
                        </div>
                        <div className="w-[500px] relative">
                            <input ref={search} className="border border-[#229799] w-full rounded-xl p-1 outline-none" type="text" placeholder="Buscar" onChange={handleSearch} />
                            <img className="absolute top-3 right-3 w-[17px] h-[14px]" src={SearchIcon} alt="Buscar" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="w-[160px] h-[30px] border border-[#214455] rounded-lg hover:bg-secondary0Hover hover:text-disable"> Seleccionar todos </button>
                        <button className="outline-none flex items-center">
                            <p className="text-[#B1B1B1]">
                                Eliminar
                            </p>
                            <img src={Trash} alt="Eliminar" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-[90%] h-[100%] gap-5 overflow-scroll">
                    {
                        devices.map((device, i) => <CardInventory
                            key={i}
                            activo={device.deviceStatus === "Disponible"}
                            bodega={device.warehouseId}
                            fecha={device.updatedAt}
                            img={"https://drive.google.com/thumbnail?id=" + device.urlPicture}
                            referencia={device.deviceId}
                            tipo={device.deviceTypeId}
                            title={device.name}
                            open={open}
                            setOpen={setOpen} 
                            setShow={setShow}
                            show={show}/>)
                    }
                </div>
                <div className="pb-20 w-[90%] flex justify-between items-center text-secondary0">
                    <p> Página {current} de {totalPages} </p>
                    <div className="w-[30%] flex justify-around">
                        {(current > 1) && <button onClick={handlePrev} className="w-[100px] h-[30px] border border-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Volver </button>}
                        {(current < totalPages) && <button onClick={handleNext} className="w-[100px] h-[30px] border border-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Siguiente </button>}
                    </div>
                </div>
            </div>
        </>
    )
}
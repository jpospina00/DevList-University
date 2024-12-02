import { useState } from "react";
import imagen1 from "../assets/Images/Images1.png";
import CheckedIcon from "../assets/Checked.svg";
import axios from "axios";
import Api from "../Api";

export default function CardDeviceRequest({ setShow, device }) {

    const [checked, setChecked] = useState(true);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    // const requestDevices = () => {
    //     axios.post(`${Api}`)
    // }

    return (
        <div className="flex items-center gap-5 p-2">
            <input id={device.deviceId} type="checkbox" onChange={handleCheckboxChange} className="hidden" />
            <label htmlFor={device.deviceId} className={`cursor-pointer border border-[#000000] w-[30px] h-[30px] flex items-center justify-center ${checked ? "bg-[#14890D]" : ""}`}>
                {checked && <img src={CheckedIcon} alt="Check" />}
            </label>
            <div className="w-full h-[200px] bg-[#cfd7dc] rounded-3xl flex justify-around items-center border border-dark">
                <img className="h-[90%] w-[20%] border border-dark rounded-3xl" src={"https://drive.google.com/thumbnail?id=" + device.urlPicture} alt="Imagen1" />
                <div className="flex flex-col w-[50%] h-[90%] justify-center gap-4">
                    <p className="font-montserrat font-medium text-base"> Nombre: {device.name} </p>
                    <p className="font-montserrat font-medium text-base"> N° Referencia: {device.deviceId} </p>
                    <p className="font-montserrat font-medium text-base"> Tipo de dispositivo: {device.brand} </p>
                    <p className="font-montserrat font-medium text-base"> N° Bodega: {device.warehouseId} </p>
                    <p className="font-montserrat font-medium text-base"> Nombre Bodega: {device.warehouseName} </p>
                </div>
                <div className="w-[15%] h-[80%] flex flex-col items-end justify-between">
                    <button onClick={() => setShow(true)}
                        className="group w-full h-[40px] border-2 border-[#9B2C2C] bg-[#F56565] hover:bg-[#c20000] rounded-lg text-disable flex justify-center items-center gap-5">
                        <p> Eliminar </p>
                        <div className="relative overflow-hidden h-[100%] flex flex-col justify-center">
                            <svg viewBox="0 0 1.625 1.625" className="absolute -top-7 fill-disable delay-100 group-hover:top-4 group-hover:animate-[spin_1.4s] group-hover:duration-1000" height={15} width={15}>
                                <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195" />
                                <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033" />
                                <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016" />
                            </svg>
                            <svg width={16} fill="none" viewBox="0 0 39 7" className="origin-right duration-500 group-hover:rotate-90">
                                <line strokeWidth={4} stroke="white" y2={5} x2={39} y1={5} />
                                <line strokeWidth={3} stroke="white" y2="1.5" x2="26.0357" y1="1.5" x1={12} />
                            </svg>
                            <svg width={16} fill="none" viewBox="0 0 33 39" className>
                                <mask fill="white" id="path-1-inside-1_8_19">
                                    <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
                                </mask>
                                <path mask="url(#path-1-inside-1_8_19)" fill="white" d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" />
                                <path strokeWidth={4} stroke="white" d="M12 6L12 29" />
                                <path strokeWidth={4} stroke="white" d="M21 6V29" />
                            </svg>
                        </div>
                    </button>
                    <div className="flex items-center w-full justify-center gap-2">
                        <button
                            onClick={() => device.quantity -= 1}
                            title="Add New"
                            className="group cursor-pointer outline-none hover:rotate-180 duration-300"
                        >
                            <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="stroke-secondary2 fill-none group-active:stroke-dark group-active:duration-0 duration-300" >
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5"></path>
                                <path d="M8 12H16" stroke-width="1.5"></path>
                            </svg>

                        </button>
                        <p className="font-montserrat font-semibold text-2xl"> {device.quantity} </p>
                        <button
                            onClick={() => device.quantity += 1}
                            title="Add New" className="group cursor-pointer outline-none hover:rotate-90 duration-300" >
                            <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="stroke-secondary2 fill-none group-active:stroke-dark group-active:duration-0 duration-300" >
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5" ></path>
                                <path d="M8 12H16" stroke-width="1.5"></path>
                                <path d="M12 16V8" stroke-width="1.5"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
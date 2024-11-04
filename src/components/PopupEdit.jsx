import { useEffect, useState } from "react";
import imgageDevice from "../assets/Images/Images1.png";
import InputText from "./InputText";
import Dropdown from "./Dropdown";
import axios from "axios";
import Api from "../Api";

export default function PopupEdit({ open, setOpen }) {

    const [types, setTypes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [warehouse, setWarehouse] = useState([]);
    const [available, setAvailable] = useState(false);
    const [isOpenType, setIsOpenType] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionName, setSelectedOptionName] = useState('');
    const [selectedOptionType, setSelectedOptionType] = useState('');
    const [selectedOptionTypeName, setSelectedOptionTypeName] = useState('');

    useEffect(() => {
        axios.get(`${Api}device/warehouses`).then((res) => {
            console.log(res.data);
            let warehouseWithIds = [];
            for (let i = 0; i < res.data.length; i++) {
                const option = res.data[i];
                warehouseWithIds.push({ id: option.deviceTypeId, name: option.name });
            }
            setWarehouse(warehouseWithIds);
        }).catch((err) => {
            console.log(err);
        })
        axios.get(`${Api}device/device-type`).then((res) => {
            console.log(res.data);
            let typesWithIds = [];
            for (let i = 0; i < res.data.length; i++) {
                const option = res.data[i];
                typesWithIds.push({ id: option.warehouseId, name: option.name });
            }
            setTypes(typesWithIds);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleOptionChange = (event) => {
        setSelectedOptionName(event.target.id);
        setSelectedOption(event.target.value);
        setIsOpen(false); // Cierra el dropdown al seleccionar una opción
    };

    const handleOptionChangeType = (event) => {
        setSelectedOptionTypeName(event.target.id);
        setSelectedOptionType(event.target.value);
        setIsOpenType(false); // Cierra el dropdown al seleccionar una opción
    };

    return (
        <div className="fixed w-screen h-screen bg-dark bg-opacity-50 z-50 top-0 flex justify-center items-center">
            <div className="w-[65%] h-[65%] flex">
                <div className="bg-[#18333F] w-[50%] h-full flex flex-col items-center text-disable justify-center gap-5">
                    <img className="w-[200px] h-[175px] rounded-[23px]" src={imgageDevice} alt="Device" />
                    <div className="flex flex-col h-[50%] gap-2">
                        <p> Nombre: Laptop </p>
                        <p> N° Referencia: 12345 </p>
                        <p> Tipo de dispositivo: PC </p>
                        <div className="flex items-center gap-5 justify-start">
                            <p> Estado del dispositivo:  </p>
                            {
                                available ? <div className="bg-[#23FFD3] w-3 h-3 rounded-full"></div> :
                                    <div className="bg-[#FF0D0D] w-3 h-3 rounded-full"></div>
                            }
                        </div>
                        <p> Fecha en la que fue agregado: 11/03/2024 </p>
                    </div>
                </div>
                <div className="bg-disable w-2/4 h-full flex flex-col items-center justify-center gap-7">
                    <h1 className="text-[24px] font-semibold font-montserrat"> Editar dispositivo </h1>
                    <div className="flex gap-3 w-4/5">
                        <div className='flex flex-col justify-around w-[48%] h-16'>
                            <label> Nombre del dispositivo </label>
                            <input required className='p-2 border border-dark rounded hover:border-secondary0Hover outline-secondary0Hover' type="text" />
                        </div>
                        <div className='flex flex-col justify-around w-[48%] h-16'>
                            <label> N° Referencia </label>
                            <input required className='p-2 border border-dark rounded hover:border-secondary0Hover outline-secondary0Hover' type="text" />
                        </div>
                    </div>
                    <div className="flex gap-3 w-full justify-center">
                        <InputText title={"Marca del dispositivo"} />
                    </div>
                    <div className='flex w-4/5 gap-5'>
                        <div className="flex flex-col justify-around w-4/5 h-16">
                            <label> N° Bodega </label>
                            <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} handleOptionChange={handleOptionChange} selectedOption={selectedOption} selectedOptionName={selectedOptionName} list={warehouse} />
                        </div>
                        <div className="flex flex-col justify-around w-4/5 h-16">
                            <label> Tipo </label>
                            <Dropdown isOpen={isOpenType} setIsOpen={setIsOpenType} handleOptionChange={handleOptionChangeType} selectedOption={selectedOptionType} selectedOptionName={selectedOptionTypeName} list={types} />
                        </div>
                    </div>
                    <div className="flex w-4/5 gap-5 justify-center">
                        <button onClick={() => setOpen(!open)}
                            className="text-[#214455] border border-[#214455] hover:bg-secondary0Hover hover:text-disable rounded-lg w-[100px] h-[30px]">
                            Cancelar
                        </button>
                        <button className="text-[#214455] border border-[#214455] hover:bg-secondary0Hover hover:text-disable rounded-lg w-[100px] h-[30px]">
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
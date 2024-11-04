import { useEffect, useRef, useState } from 'react'
import imgAddDevice from '../assets/add-device-img.svg'
import calendarIcon from '../assets/Calendar.svg';
import { Link } from 'react-router-dom';
import DatePicker from '../components/DatePicker';
import Dropdown from '../components/Dropdown';
import InputText from '../components/InputText';
import axios from 'axios';
import apiUrl from '../Api.js';
import Headers from '../Headers.js';
import Swal from 'sweetalert2';
import Api from '../Api.js';

export default function FormAddDevice() {

    const name = useRef();
    const description = useRef();
    const brandDevice = useRef();
    const quantity = useRef();
    const [count, setCount] = useState(0);
    const [types, setTypes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [warehouse, setWarehouse] = useState([]);
    const [isOpenType, setIsOpenType] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
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
                warehouseWithIds.push({ id: option.warehouseId, name: option.name });
            }
            console.log(warehouseWithIds);
            setWarehouse(warehouseWithIds);
        }).catch((err) => {
            console.log(err);
        })
        axios.get(`${Api}device/device-type`).then((res) => {
            console.log(res.data);
            let typesWithIds = [];
            for (let i = 0; i < res.data.length; i++) {
                const option = res.data[i];
                typesWithIds.push({ id: option.deviceTypeId, name: option.name });
            }
            console.log(typesWithIds);
            setTypes(typesWithIds);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const loadImage = (event) => {
        setSelectedImage(event.target.files[0]);
    }

    const clickLoadImg = () => {
        document.getElementById("loadImg").click()
    }

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

    const getCharDescription = () => {
        setCount(description.current.value?.trim().length);
    }

    const sendRequest = async () => {
        if (selectedImage != null &&
            name.current.value?.trim() != "" &&
            selectedOptionType != "all-1" &&
            selectedOption != "all" &&
            description.current.value?.trim() != "" &&
            description.current.value?.trim().length <= 250 &&
            brandDevice.current.value?.trim() != "") {
            let data = {
                image: selectedImage,
                deviceName: name.current.value?.trim(),
                deviceType: selectedOptionType,
                warehouse: selectedOption,
                deviceStatus: 1,
                deviceDescription: description.current.value?.trim(),
                brand: brandDevice.current.value?.trim(),
                quantity: parseInt(quantity.current.value)
            }
            console.log(data);
            axios.post(`${apiUrl}device/create`, data, Headers("multipart/form-data")).then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `!!Dispositivo ${res.data.deviceName} creado correctamente¡¡`,
                    timer: 1500
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Error: ${err.response.data.message}`,
                    timer: 1500
                });
            })
            return;
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `
            <div className='flex flex-col font-bold font-montserrat'>
                <p> ${selectedImage != null ? "" : "!Seleccione una imagen para el dispositivo¡"} </p>
                <p> ${name.current.value?.trim() != "" ? "" : "!Falta el nombre del dispositivo¡"} </p>
                <p> ${selectedOptionType != "all-1" ? "" : "!Seleccione el tipo del dispositivo¡"} </p>
                <p> ${selectedOption != "all" ? "" : "!Seleccione una bodega para el dispositivo¡"} </p>
                <p> ${description.current.value?.trim() != "" ? "" : "!Falta la descripción del dispositivo¡"} </p>
                <p> ${description.current.value?.trim().length <= 250 ? "" : "!La descripción debe ser menor a 250 caracteres¡"} </p>
                <p> ${brandDevice.current.value?.trim() != "" ? "" : "!Falta la marca del dispositivo¡"} </p>
            </div>
            `
        });
    }

    return (
        <div className="h-screen w-full flex justify-around items-center">
            <div className='flex flex-col justify-center gap-8 items-center font-montserrat font-semibold w-2/4 h-full shadow-[0_35px_35px_35px_rgba(0,0,0,0.3)]'>
                <h1 className='text-2xl'> Agregar un dispositivo </h1>
                <div className='flex w-4/5 gap-5'>
                    <div className='flex flex-col justify-around w-4/5 h-16'>
                        <label> N° Bodega </label>
                        <Dropdown list={warehouse} handleOptionChange={handleOptionChange} selectedOption={selectedOption} setIsOpen={setIsOpen} isOpen={isOpen} selectedOptionName={selectedOptionName} />
                    </div>
                    <div className='flex flex-col justify-around w-4/5 h-16 '>
                        <label> Tipo </label>
                        <Dropdown list={types} handleOptionChange={handleOptionChangeType} selectedOption={selectedOptionType} isOpen={isOpenType} setIsOpen={setIsOpenType} selectedOptionName={selectedOptionTypeName} />
                    </div>
                    {/* <InputText title={"N° de referencia"} reference={numberReferece} /> */}
                    <div className='flex flex-col justify-around w-4/5 h-16'>
                        <label> Cantidad </label>
                        <input ref={quantity} required className='p-2 border border-dark rounded hover:border-secondary0Hover outline-secondary0Hover' type="number" />
                    </div>
                </div>
                <div className='flex w-4/5 gap-5'>
                    <InputText title={"Nombre del dispositivo"} reference={name} />
                    <InputText title={"Marca del dispositivo "} reference={brandDevice} />
                </div>
                <div className='flex flex-col justify-around w-4/5 relative'>
                    <label> Descripcion del dispositivo </label>
                    <textarea ref={description}
                        className={`text-start h-32 max-h-32 min-h-10 p-2 border border-dark rounded ${count > 250 ? "outline-[#ff2a2a]" : "outline-secondary0Hover"}`}
                        onChange={getCharDescription}>
                    </textarea>
                    <p className='text-text text-opacity-30 absolute bottom-1 right-1'> {count}/250 </p>
                    <p className={`text-[#ff2a2a] ${count > 250 ? "" : "hidden"}`}> Máximo de 250 carácteres </p>
                </div>
                <div className='flex w-[50%] justify-around'>
                    <Link to={"/inventory"}>
                        <button className='w-[100px] h-[35px] bg-secondary0 hover:bg-primary0 border border-dark text-disable rounded-lg'>
                            Cancelar
                        </button>
                    </Link>
                    <button className='w-[100px] h-[35px] bg-secondary0 hover:bg-primary0 border border-dark text-disable rounded-lg'
                        onClick={sendRequest}>
                        Guardar
                    </button>
                </div>
            </div>
            <div className='w-2/4 h-full flex items-center justify-center'>
                <input id='loadImg' className='hidden' type="file" accept='image/*' onChange={loadImage} />
                <img className={`w-[70%] cursor-pointer ${selectedImage ? "shadow-[0px_0px_15px_5px_rgba(0,0,0,0.3)]" : ""}`}
                    onClick={clickLoadImg}
                    src={selectedImage ? URL.createObjectURL(selectedImage) : imgAddDevice}
                    alt="Carga imagen del dispositivo" />
            </div>
        </div>
    )
}
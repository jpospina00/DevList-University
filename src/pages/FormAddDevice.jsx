import { useRef, useState } from 'react'
import imgAddDevice from '../assets/add-device-img.svg'
import calendarIcon from '../assets/Calendar.svg';
import { Link } from 'react-router-dom';
import DatePicker from '../components/DatePicker';
import Dropdown from '../components/Dropdown';
import InputText from '../components/InputText';

export default function FormAddDevice() {

    const description = useRef();
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [count, setCount] = useState(0);
    const [month, setMonth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenType, setIsOpenType] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedOption, setSelectedOption] = useState('all');
    const [selectedOptionType, setSelectedOptionType] = useState('all-1');

    const getDate = (date) => {
        if (date == null) {
            setYear("");
            setMonth("");
            setDay("");
        } else {
            setYear(date.getFullYear());
            setMonth(date.getMonth() + 1);
            setDay(date.getDate());
        }
    }

    const loadImage = (event) => {
        setSelectedImage(event.target.files[0]);
    }

    const clickLoadImg = () => {
        document.getElementById("loadImg").click()
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false); // Cierra el dropdown al seleccionar una opción
    };

    const handleOptionChangeType = (event) => {
        setSelectedOptionType(event.target.value);
        setIsOpenType(false); // Cierra el dropdown al seleccionar una opción
    };

    const getCharDescription = () => {
        setCount(description.current.value?.trim().length);
    }

    return (
        <div className="h-screen w-full flex justify-around items-center">
            <div className='flex flex-col justify-center gap-12 items-center font-montserrat font-semibold w-2/4 h-full shadow-[0_35px_35px_35px_rgba(0,0,0,0.3)]'>
                <h1 className='text-2xl'> Agregar un dispositivo </h1>
                <div className='flex w-4/5 gap-5'>
                    <InputText title={"N° de referencia"} />
                    <div className='flex flex-col justify-around w-4/5 h-16'>
                        <label> N° Bodega </label>
                        <Dropdown list={['all', 'option-1', 'option-2', 'option-3']} handleOptionChange={handleOptionChange} selectedOption={selectedOption} setIsOpen={setIsOpen} isOpen={isOpen} />
                    </div>
                    <div className='flex flex-col justify-around w-4/5 h-16 '>
                        <label> Tipo </label>
                        <Dropdown list={['all-1', 'opcion 1', 'opcion 2', 'opcion 3']} handleOptionChange={handleOptionChangeType} selectedOption={selectedOptionType} isOpen={isOpenType} setIsOpen={setIsOpenType} />
                    </div>
                </div>
                <div className='flex w-4/5 gap-5'>
                    <InputText title={"Nombre del dispositivo"} />
                    <InputText title={"Marca del dispositivo "} />
                </div>
                <div className='flex flex-col justify-around w-4/5 relative'>
                    <label> Descripcion del dispositivo </label>
                    <textarea ref={description}
                        className={`text-start max-h-32 min-h-10 p-2 border border-dark rounded ${count > 250 ? "outline-[#ff2a2a]" : "outline-secondary0Hover"}`}
                        onChange={getCharDescription}>
                    </textarea>
                    <p className='text-text text-opacity-30 absolute bottom-1 right-1'> {count}/250 </p>
                    <p className={`text-[#ff2a2a] ${count > 250 ? "" : "hidden"}`}> Máximo de 250 carácteres </p>
                </div>

                <div className='flex flex-col justify-around w-4/5 h-16'>
                    <label> Fecha </label>
                    <div className='flex w-full justify-between items-center relative'>
                        <input onClick={() => setShowCalendar(true)} required className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' placeholder='Dìa' type="text" defaultValue={day} readOnly />
                        <input onClick={() => setShowCalendar(true)} required className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' placeholder='Mes' type="text" defaultValue={month} readOnly />
                        <input onClick={() => setShowCalendar(true)} required className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' placeholder='Año' type="text" defaultValue={year} readOnly />
                        <button onClick={() => setShowCalendar(!showCalendar)} className='w-[40px] h-[40px] cursor-pointer outline-none'>
                            <img src={calendarIcon} alt="Seleccionar Fecha" />
                        </button>
                        <button onClick={() => getDate(null)} className='w-[40px] h-[40px] cursor-pointer outline-none'>
                            <img src={calendarIcon} alt="Seleccionar Fecha" />
                        </button>
                        {showCalendar && <DatePicker setSelectedDate={setSelectedDate} selectedDate={selectedDate} onChange={getDate} setShowCalendar={setShowCalendar} />}
                    </div>
                </div>
                <div className='flex w-[50%] justify-around'>
                    <button className='w-[100px] h-[35px] bg-secondary0 hover:bg-primary0 border border-dark text-disable rounded-lg'> Guardar </button>
                    <Link to={"/inventory"}>
                        <button className='w-[100px] h-[35px] bg-secondary0 hover:bg-primary0 border border-dark text-disable rounded-lg'> Cancelar </button>
                    </Link>
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
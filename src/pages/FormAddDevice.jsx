import { useRef, useState } from 'react'
import imgAddDevice from '../assets/add-device-img.svg'
import calendarIcon from '../assets/Calendar.svg';

export default function FormAddDevice() {

    const date = useRef();
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const getDate = () => {
        let dateValue = date.current.value?.trim();
        let values = dateValue.split("-");
        if (values[0] == "") {
            setYear("");
            setMonth("");
            setDay("");
        } else {
            setYear(values[0]);
            setMonth(values[1]);
            setDay(values[2]);
        }
    }

    return (
        <div className="h-screen w-full flex justify-around items-center">
            <div className='flex flex-col justify-center gap-7 items-center font-montserrat font-semibold w-2/4 h-full shadow-[0_35px_35px_35px_rgba(0,0,0,0.3)]'>
                <h1 className='text-2xl'> Agregar un dispositivo </h1>
                <div className='flex flex-col justify-around w-4/5 h-16'>
                    <label> Nombre del dispositivo </label>
                    <input className='h-7 pl-2 border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' type="text" />
                </div>
                <div className='flex flex-col justify-around w-4/5 h-16'>
                    <label> N° de referencia </label>
                    <input className='h-7 pl-2 border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' type="text" />
                </div>
                <div className='flex flex-col justify-around w-4/5 h-16'>
                    <label> Tipo de dispositivo </label>
                    <input className='h-7 pl-2 border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' type="text" />
                </div>
                <div className='flex flex-col justify-around w-4/5 h-16'>
                    <label> N° Bodega </label>
                    <input className='h-7 pl-2 border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' type="text" />
                </div>
                <div className='flex flex-col justify-around w-4/5 h-16'>
                    <label> N° Bodega </label>
                    <div className='flex w-full justify-around items-center'>
                        <input className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' type="text" placeholder='Día' value={day} readOnly />
                        <input className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' type="text" placeholder='Mes' value={month} readOnly />
                        <input className='h-7 pl-2 w-[20%] border border-dark rounded-lg hover:border-secondary0Hover outline-secondary0Hover' type="text" placeholder='Año' value={year} readOnly />
                        <button className=' w-[20px] h-[25px] overflow-hidden cursor-pointer outline-none'>
                            <input className='w-full h-full cursor-pointer' ref={date} onChange={() => getDate()} type="date" />
                            {/* <img className='w-full h-full' src={calendarIcon} alt="Calendario" /> */}
                        </button>
                    </div>
                </div>
                <div className='flex w-[50%] justify-around'>
                    <button className='w-[100px] h-[35px] bg-secondary0 hover:bg-primary0 border border-dark text-disable rounded-lg'> Guardar </button>
                    <button className='w-[100px] h-[35px] bg-secondary0 hover:bg-primary0 border border-dark text-disable rounded-lg'> Cancelar </button>
                </div>
            </div>
            <div className='w-2/4 h-full flex items-center justify-center'>
                <img className='w-[70%]' src={imgAddDevice} alt="Image" />
            </div>
        </div>
    )
}
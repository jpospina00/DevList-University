import { useState } from 'react';
import imgReturn from '../assets/ReturnImg.png';
import Dropdown from '../components/Dropdown';
import InputText from '../components/InputText';
import InputsDatepicker from '../components/InputsDatepicker';
import { Link } from 'react-router-dom';
import PopupObservation from '../components/PopupObservation';
export default function FormReturnDevice() {

    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionName, setSelectedOptionName] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOptionName(event.target.id);
        setSelectedOption(event.target.value);
        setIsOpen(false); // Cierra el dropdown al seleccionar una opción
    };

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
    };

    const list = [{
        id: "Active1234",
        name: "Activo"
    }, {
        id: "Desactivado1234",
        name: "Desactivado"
    }];

    return (
        <>
            {show && <PopupObservation setShow={setShow} />}
            <div className="w-full h-full flex">
                <div className='w-3/6 flex flex-col justify-center items-center gap-5'>
                    <h1 className='font-montserrat font-semibold text-[24px]'> Devolucion del Dispositivo </h1>
                    <InputText title={"N° Referencia"} />
                    <InputText title={"Nombre del Dispositivo"} />
                    <InputText title={"Tipo de Dispositivo"} />
                    <InputText title={"Docente"} />
                    <div className='flex items-center justify-start w-[80%] gap-5'>
                        <div className='flex flex-col w-3/6'>
                            <label> Estado </label>
                            <Dropdown
                                handleOptionChange={handleOptionChange}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                selectedOption={selectedOption}
                                selectedOptionName={selectedOptionName}
                                list={list} />
                        </div>
                        <button
                            onClick={() => setShow(true)}
                            className="p-2 mt-5 border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                            + Observación
                        </button>
                    </div>
                    <div className='flex items-center justify-start w-[80%] gap-5'>
                        <InputsDatepicker
                            day={day}
                            month={month}
                            year={year}
                            getDate={getDate}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            showCalendar={showCalendar}
                            setShowCalendar={setShowCalendar}
                        />
                    </div>
                    <div className='flex w-[50%] justify-around'>
                        <Link to={"/home"}>
                            <button className="p-2 mt-5 border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                                Cancelar
                            </button>
                        </Link>
                        <button className="p-2 mt-5 border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                            Guardar
                        </button>
                    </div>
                </div>
                <img className='w-3/6' src={imgReturn} alt="Img" />
            </div>
        </>
    )
}
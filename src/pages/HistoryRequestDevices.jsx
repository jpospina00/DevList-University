import { useRef, useState } from "react";
import FilterIcon from "../assets/FilterIcon.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import Image from "../assets/Images/Images1.png";
import Dropdown from "../components/Dropdown";

export default function HistoryRequestDevices() {

    const search = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [searchValues, setSearchValues] = useState("");
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionName, setSelectedOptionName] = useState('');

    const handleSearch = () => {
        setSearchValues(search.current.value?.trim());
    };

    const handleOptionChange = (event) => {
        setSelectedOptionName(event.target.id);
        setSelectedOption(event.target.value);
        setIsOpen(false); // Cierra el dropdown al seleccionar una opción
    };

    const shows = [{
        id: 5,
        name: 5
    }, {
        id: 10,
        name: 10
    }, {
        id: 15,
        name: 15
    }]

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className="h-full w-full flex flex-col items-center gap-10">
            <h1 className="font-montserrat font-semibold text-[24px]">
                Historial de Prestamos
            </h1>
            <div className="flex items-center justify-between w-[90%]">
                <div className="flex items-center cursor-pointer">
                    <img className="w-[18px] h-[16px]" src={FilterIcon} alt="Filtrar" />
                    <p className="text-[#214455]"> Filtrar </p>
                </div>
                <div className="w-[500px] relative">
                    <input ref={search} className="border border-[#229799] w-full rounded-xl p-1 outline-none" type="text" placeholder="Buscar" onChange={handleSearch} />
                    <img className="absolute top-3 right-3 w-[17px] h-[14px]" src={SearchIcon} alt="Buscar" />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <p className="font-montserrat font-medium text-[16px]">
                        Mostrar
                    </p>
                    <Dropdown
                        handleOptionChange={handleOptionChange}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        selectedOption={selectedOption}
                        selectedOptionName={selectedOptionName}
                        list={shows} />
                </div>
                <button className="w-[150px] h-[50px] border border-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                    Volver
                </button>
            </div>
            <div className="w-[95%] flex justify-center bg-disable rounded-lg overflow-y-scroll">
                <table className="w-[95%] table-fixed text-center">
                    <thead className="font-montserrat font-medium text-[15px] text-[#214455]">
                        <tr className="border-b-2 border-t-2 border-dark border-opacity-20">
                            <th className="w-[30%] p-5"> Dispositivo </th>
                            <th className="w-[50%]"> Nombre del Dispositivo </th>
                            <th className="w-[30%]"> N° Referencia </th>
                            <th className="w-[30%]"> Tipo Dispositivo </th>
                            <th className="w-[50%]"> Monitor / Prestador </th>
                            <th className="w-[50%]"> Fecha </th>
                            <th className="w-[30%]"> Horas Solicitadas </th>
                        </tr>
                    </thead>
                    <tbody className="font-montserrat font-normal text-[14px]">
                        {
                            list.map((index) =>
                                <tr key={index} className="border-b-2 border-dark w-[90%] border-opacity-20">
                                    <td className="flex items-center justify-center p-5">
                                        <img className="w-[70%] h-[70%] rounded-lg border border-dark" src={Image} alt="Image" />
                                    </td>
                                    <td> Laptop Dell </td>
                                    <td> 11032024012 </td>
                                    <td> Latop </td>
                                    <td> Juan Jose osorio </td>
                                    <td> 11/03/2024 12:00pm </td>
                                    <td> 3 </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="pb-20 w-[95%] flex justify-end items-center text-secondary0">
                <p className="flex-grow flex items-center justify-center"> Página 1 de 10 </p>
                <div className="flex justify-center gap-5">
                    <button className="w-[100px] h-[30px] border border-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                        Volver
                    </button>
                    <button className="w-[100px] h-[30px] border border-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    )
}
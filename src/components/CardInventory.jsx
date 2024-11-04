import { useState } from "react";
import CheckedIcon from "../assets/Checked.svg";
import Edit from "../assets/Edit.svg";

export default function CardInventory({ img, title, referencia, bodega, tipo, fecha, activo, open, setOpen }) {

    const [checked, setChecked] = useState(false);
    const [active, setActive] = useState(activo);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleActiveChange = () => {
        setActive(!active);
    };

    return (
        <div className='flex items-center w-full gap-4'>
            <input id={referencia} type="checkbox" onChange={handleCheckboxChange} className="hidden" />
            <label htmlFor={referencia} className={`cursor-pointer border border-[#000000] w-[30px] h-[30px] flex items-center justify-center ${checked ? "bg-[#14890D]" : ""}`}>
                {checked && <img src={CheckedIcon} alt="Check" />}
            </label>
            <div className="border flex w-[90%] rounded-[35px] bg-[#cfd7dc] h-[173px]">
                <img className='border rounded-[23px] w-[200px] m-3' src={img} alt="Card" />
                <div className='flex items-center justify-between w-full m-5 text-[16px] text-[#000000]'>
                    <div className='flex h-full flex-col justify-around'>
                        <h1>Nombre: {title} </h1>
                        <p> N° Referencia: {referencia} </p>
                        <p> N° Bodega: {bodega} </p>
                        <p> Tipo de dispositivo: {tipo} </p>
                    </div>
                    <div className='flex h-full flex-col justify-around items-end'>
                        <p> Agregado el {fecha} </p>
                        <button onClick={() => setOpen(!open)}
                            className="flex text-[#B1B1B1] gap-2 outline-none">
                            <p> Editar </p>
                            <img src={Edit} alt="Edit" />
                        </button>
                        <div className="flex items-center justify-center gap-2">
                            <p> Activa/Desactivar </p>
                            <input id={`active${referencia}`} type="checkbox" className="hidden" onChange={handleActiveChange} />
                            <label className={`w-[25px] h-[13px] flex rounded border border-[#18333F] relative ${active ? "bg-[#229799]" : "bg-[#ffffff]"}`}
                                htmlFor={`active${referencia}`}>
                                <div className={`absolute w-[20px] h-[20px] border border-[#18333F] rounded-full ${active ? "-right-2 -top-1 bg-[#229799]" : "-left-2 -top-1 bg-[#ffffff]"}`}></div>
                            </label>
                        </div>
                        <p className="hover:underline cursor-pointer"> Mas Detalles </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
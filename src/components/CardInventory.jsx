import { useState } from "react";
import CheckedIcon from "../assets/Checked.svg";
import PopupDisableDevices from "./PopupDisableDevices";

export default function CardInventory({
  img,
  title,
  referencia,
  bodega,
  tipo,
  fecha,
  activo,
  open,
  setOpen,
}) {
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(activo);
  const [show, setShow] = useState(false);


  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleActiveChange = () => {
    setActive(!active);
  };

  return (
    <>
      {show && <PopupDisableDevices  setShow={setShow} handleActiveChange={handleActiveChange} />}
      <div className="flex items-center w-full gap-4">
        <input
          id={referencia}
          type="checkbox"
          onChange={handleCheckboxChange}
          className="hidden"
        />
        <label
          htmlFor={referencia}
          className={`cursor-pointer border border-[#000000] w-[30px] h-[30px] flex items-center justify-center ${
            checked ? "bg-[#14890D]" : ""
          }`}
        >
          {checked && <img src={CheckedIcon} alt="Check" />}
        </label>
        <div className="border flex w-[90%] rounded-[35px] bg-[#cfd7dc] h-[173px]">
          <img
            className="border rounded-[23px] w-[200px] m-3"
            src={img}
            alt="Card"
          />
          <div className="flex items-center justify-between w-full m-5 text-[16px] text-[#000000]">
            <div className="flex h-full flex-col justify-around">
              <h1>Nombre: {title} </h1>
              <p> N° Referencia: {referencia} </p>
              <p> N° Bodega: {bodega} </p>
              <p> Tipo de dispositivo: {tipo} </p>
            </div>
            <div className="flex h-full flex-col justify-around items-end">
              <p> Agregado el {fecha} </p>
              <button
                disabled={!checked}
                onClick={() => setOpen(!open)}
                className={`flex gap-2 outline-none ${
                  checked ? "text-dark" : "text-[#B1B1B1]"
                }`}
              >
                <p> Editar </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${checked ? "stroke-dark" : "stroke-[#B1B1B1]"}`}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 3V5H5V19H19V10H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H14ZM19.94 3.354L20.647 4.061C20.7407 4.15476 20.7934 4.28192 20.7934 4.4145C20.7934 4.54708 20.7407 4.67424 20.647 4.768L11.314 14.1L9.322 15.08C9.26575 15.1079 9.20217 15.1174 9.14022 15.1072C9.07827 15.0971 9.02107 15.0677 8.97668 15.0233C8.93229 14.9789 8.90295 14.9217 8.89278 14.8598C8.88261 14.7978 8.89213 14.7343 8.92 14.678L9.9 12.686L19.233 3.353C19.3268 3.25926 19.4539 3.20661 19.5865 3.20661C19.7191 3.20661 19.8462 3.25926 19.94 3.353V3.354Z"
                    fill="#B1B1B1"
                  />
                </svg>
              </button>
              <div className="flex items-center justify-center gap-2">
                <p> Activar/Desactivar </p>
                <input
                  id={`active${referencia}`}
                  type="checkbox"
                  className="hidden"
                  onChange={() => setShow(true)}
                />
                <label
                  className={`w-[25px] h-[13px] flex rounded border border-[#18333F] relative ${
                    active ? "bg-[#229799]" : "bg-[#ffffff]"
                  }`}
                  htmlFor={`active${referencia}`}
                >
                  <div
                    className={`absolute w-[20px] h-[20px] border border-[#18333F] rounded-full ${
                      active
                        ? "-right-2 -top-1 bg-[#229799]"
                        : "-left-2 -top-1 bg-[#ffffff]"
                    }`}
                  ></div>
                </label>
              </div>
              <p className="hover:underline cursor-pointer"> Mas Detalles </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

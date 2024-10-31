import IconUserRegister from "../assets/IconUserRegister.svg";
import IconUsersRegister from "../assets/ImagenFondoUser.svg";
import iconPasword from "../assets/icon pasword.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState, useRef } from "react";
import Dropdown from "./Dropdown";

export default function UserRegister() {
  const password = useRef();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmPassword2, setShowConfirmPassword2] = useState(false);
  const [selectedOption, setSelectedOption] = useState('all');
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleToggleConfirmPassword2 = () => {
    setShowConfirmPassword2(!showConfirmPassword2);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false); // Cierra el dropdown al seleccionar una opción
  };

  return (
    <>
      <div className="flex justify-center h-screen pt-20 bg-disable w-[100%] items-center">
        <div className="w-[45%] flex flex-col h-full gap-5 pt-8">
          <div className="flex flex-col justify-center items-center w-full gap-7">
            <h1 className="flex font-bold text-left text-2xl  items-center justify-center">
              Registre el Usuario
            </h1>
            <div className="flex flex-col justify-center items-center w-32">
              <img src={IconUserRegister}></img>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-[100%] gap-4 ">
            {/* Input para Nombre */}
            <div className="flex flex-col w-4/5 h-16 justify-around">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ingrese su nombre"
                className="shadow appearance-none border rounded p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Input para Correo Electrónico */}
            <div className="flex flex-col w-4/5 h-16 justify-around">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
                className="shadow appearance-none border rounded p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Input para Número de Teléfono */}
            <div className="flex flex-col w-4/5 h-16 justify-around">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="phone"
              >
                Número de Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Ingrese su número de teléfono"
                className="shadow appearance-none border rounded p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Input para Dirección */}

            <div className="flex w-4/5 gap-5">
              <div className="flex flex-col w-4/5 h-16 justify-around">
                <label
                  className="block text-gray-700 text-sm font-bold"
                  htmlFor="address"
                >
                  Dirección
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Ingrese su dirección"
                  className="shadow appearance-none border rounded p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                />
              </div>

              {/* Input Dropdown */}
              <div className="flex flex-col justify-around w-4/5 h-16">
                <label className="block text-gray-700 text-sm font-bold"> Rol </label>
                <Dropdown
                  list={["all", "Monitor", "Profesor"]}
                  handleOptionChange={handleOptionChange}
                  selectedOption={selectedOption}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                />
              </div>
            </div>

            {/* Input para Contraseña */}
            <div className="flex flex-col w-4/5 h-16 justify-around">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="flex gap-2 shadow appearance-none border rounded p-2 text-gray-700 bg-whiteColor relative">
                <img className="" src={iconPasword} />
                <input
                  id="password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña"
                  className="w-[80%] border-none focus:outline-none"
                />
                <span
                  className="absolute top-2 right-3"
                  onClick={handleToggleConfirmPassword}
                >
                  {showConfirmPassword ? (
                    <IoEyeOff fontSize={25} />
                  ) : (
                    <IoEye fontSize={25} />
                  )}
                </span>
              </div>
            </div>

            {/* Input para Confirmar Contraseña */}
            <div className="flex flex-col w-4/5 h-16 justify-around">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
              <div className="flex gap-2 shadow appearance-none border rounded p-2 text-gray-700 bg-whiteColor relative">
                <img className="" src={iconPasword} />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword2 ? "text" : "password"}
                  placeholder="Confirme su contraseña"
                  className="w-[80%] border-none focus:outline-none"
                />
                <span
                  className="absolute top-2 right-3"
                  onClick={handleToggleConfirmPassword2}
                >
                  {showConfirmPassword2 ? (
                    <IoEyeOff fontSize={25} />
                  ) : (
                    <IoEye fontSize={25} />
                  )}
                </span>
              </div>
            </div>

            {/* Botones Guardar y Cancelar */}
            <div className="flex items-center justify-around w-[50%]">
              <button
                className="bg-[#FFFFFF] hover:bg-secondary0Hover border border-secondary0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7"
                type="submit"
              >
                Cancelar
              </button>
              <button
                className="bg-[#FFFFFF] hover:bg-secondary0Hover border border-secondary0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7"
                type="button"
                // onClick={() => alert('Cancelar')}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
        <img src={IconUsersRegister} className="w-[45%] h-[80%]"></img>
      </div>
    </>
  );
}

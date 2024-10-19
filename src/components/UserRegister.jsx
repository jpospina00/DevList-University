import IconUserRegister from "../assets/IconUserRegister.svg";
import IconUsersRegister from "../assets/ImagenFondoUser.svg";

export default function UserRegister() {
  return (
    <>
      <div className="flex justify-center h-screen pt-20 bg-disable w-[100%] items-center">
        <div className="w-[45%] flex flex-col justify-center h-full gap-5">
          <div className="flex flex-col justify-center items-center w-full gap-7">
            <h1 className="flex font-bold text-left text-2xl  items-center justify-center">
              Registre el Usuario
            </h1>
            <div className="flex flex-col justify-center items-center w-32">
              <img src={IconUserRegister}></img>
            </div>

          </div>
          <div className="flex flex-col justify-start items-center w-[100%] gap-4">
            {/* Input para Nombre */}
            <div className="">
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
                className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Input para Correo Electrónico */}
            <div className="">
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
                className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
            </div>

            {/* Input para Número de Teléfono */}
            <div className="">
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
                className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Input para Dirección */}
            <div className="">
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
                className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Input para Contraseña */}
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Input para Confirmar Contraseña */}
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirme su contraseña"
                className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Botones Guardar y Cancelar */}
            <div className="flex items-center justify-around w-[50%]">
              <button
                className="bg-[#FFFFFF] hover:bg-secondary0 border border-secondary0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Guardar
              </button>
              <button
                className="bg-[#FFFFFF] hover:bg-secondary0 border border-secondary0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              // onClick={() => alert('Cancelar')}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <img src={IconUsersRegister} className="w-[45%] h-[80%]"></img>
      </div>
    </>
  );
}

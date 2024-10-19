import IconUserRegister from "../assets/IconUserRegister.svg";
import IconUsersRegister from "../assets/ImagenFondoUser.svg";

export default function UserRegister() {
  return (
    <>
      <div className="flex justify-around h-screen pt-20 bg-disable w-[100%] items-center">
        <div className="flex flex-col justify-start items-center w-[50%]">
          <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="flex font-bold text-left text-2xl  items-center justify-center">
              Registre el Usuario
            </h1>
            <div className="mb-4">
              <div className="flex flex-col justify-center items-center w-32 h-36 ">
                <img src={IconUserRegister}></img>
              </div>
            </div>
          </div>
          {/* Input para Nombre */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2  "
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Guardar
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              // onClick={() => alert('Cancelar')}
            >
              Cancelar
            </button>
          </div>
        </div>
        <img src={IconUsersRegister} className="w-[50%] h-[80%]"></img>
      </div>
    </>
  );
}

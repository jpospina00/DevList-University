import imagenLogin from "../assets/imagenLogin.png";
import loginImg from "../assets/FondoLogin.png";
import iconPasword from "../assets/icon pasword.svg";
import iconUser from "../assets/icon user.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    console.log(user, password);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <main className="flex justify-center items-center relative">
        <div className="absolute top-40 left-10 z-50">Volver</div>
        {/* Configurar boton retroceso*/}
        <img
          className="h-screen w-screen absolute top-0 left-0"
          src={loginImg}
          alt=""
        />
        <section className="relative w-[600px] rounded-xl flex flex-col items-center p-[60px] gap-10 mt-[100px]">
          <img src={imagenLogin} alt="" />
          <form
            onSubmit={handleSubmit}
            className="gap-5 flex flex-col items-center"
          >
            <div className="w-[352px] h-[58px] relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? "text" : "password"}
                className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
                placeholder=""
                name="password"
                id="username"
              />
              <span
                className="absolute top-6 right-5"
                onClick={handleTogglePassword}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>

              <label
                className="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
                for="username"
              >
                Usuario
              </label>
              <img className="absolute top-6 left-4" src={iconUser} />
            </div>
            <div className="w-[352px] h-[58px] relative rounded-[50px]">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                type={showConfirmPassword ? "text" : "password"}
                className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
                placeholder=""
                name="username"
                id="username"
              />
              <span
                className="absolute top-6 right-5"
                onClick={handleToggleConfirmPassword}
              >
                {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
              </span>

              <label
                className="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
                for="username"
              >
                Contraseña
              </label>
              <img className="absolute top-6 left-4" src={iconPasword} />
            </div>
            <button
              type="submit"
              className="bg-secondary0 w-[150px] rounded-xl h-[50px] hover:bg-secondary0Hover text-background"
            >
              Iniciar sesión
            </button>
            <Link to="/restablecer-contraseña">
              <p className="text-background underline">
                ¿Olvidó su contraseña?
              </p>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
}

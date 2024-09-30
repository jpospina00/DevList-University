import imagenLogin from "../assets/imagenLogin.png";
import loginImg from "../assets/FondoLogin.png";
import iconPasword from "../assets/icon pasword.svg";
import iconUser from "../assets/icon user.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/header";

export default function Login2() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    console.log(user, password);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <main className="flex justify-center items-center relative">
        <Header />
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
            <div className="bg-background flex gap-2 items-center p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-full w-[350px]">
              <img src={iconUser} />
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                type="text"
                name="text"
                className="flex-1 focus:outline-none"
                placeholder="User"
              />
            </div>
            <div className="bg-background flex gap-2 items-center p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-full w-[350px]">
              <img src={iconPasword} />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? "text" : "password"}
                name="text"
                className="flex-1 focus:outline-none"
                placeholder="password"
              />
              <span onClick={handleTogglePassword}>
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
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

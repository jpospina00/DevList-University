import imagenLogin from "../assets/imagenLogin.png";
import loginImg from "../assets/FondoLogin.png";
import iconPasword from "../assets/icon pasword.svg";
import iconUser from "../assets/icon user.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login2() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    console.log(user, password);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="flex justify-center items-center">
      <img
        className="h-screen w-screen absolute top-0 left-0"
        src={loginImg}
        alt=""
      />

      <section className="relative w-[600px] rounded-xl flex flex-col items-center p-[60px] gap-10">
        <img src={imagenLogin} alt="" />
        <form
          onSubmit={handleSubmit}
          className="gap-5 flex flex-col items-center"
        >
          <div className="bg-background flex gap-2 items-center p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-full w-[350px]">
            {/* <svg
              className="group-hover:rotate-[360deg] duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <path d="M22 6l-10 7L2 6"></path>
            </svg> */}
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
            {/* <svg
              className="group-hover:rotate-[360deg] duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <path d="M22 6l-10 7L2 6"></path>
            </svg> */}
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
            className="bg-secondary0 w-[150px] rounded-xl h-[50px] text-background"
          >
            Iniciar sesión
          </button>
          <Link to="/restablecer-contraseña">
            <p className="text-background">¿Olvidó su contraseña?</p>
          </Link>
        </form>
      </section>
    </main>
  );
}

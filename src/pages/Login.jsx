import imagenLogin from "../assets/imagenLogin.png";
import iconPasword from "../assets/icon pasword.svg";
import iconUser from "../assets/icon user.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Header from "../components/header";
import { useState } from "react";

export default function Login() {
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
    <main className=" h-screen w-screen">
      <Header />
      <div style={{height: "calc(100% - 100px)"}} className="flex items-center justify-center  w-screen">
        <section className="w-[600px] bg-secondary2 rounded-xl flex flex-col items-center p-[60px] gap-10">
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
            <p className="text-background">
              ¿Olvidó su nombre de usuario o contraseña?
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

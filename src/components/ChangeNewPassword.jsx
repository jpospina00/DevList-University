import { useRef, useState } from "react";
import iconPasword from "../assets/icon pasword.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Swal from "sweetalert2";
import axios from "axios";
import Api from "../Api";

export default function ChangeNewPassword({ token }) {

  const newPassword = useRef();
  const confirmPassword = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const submit = () => {
    const data = { password: newPassword.current.value?.trim() }
    const header = { headers: { 'Authorization': `Bearer ${token}` } }
    console.log(data);
    console.log(header);

    if (newPassword.current.value?.trim() == confirmPassword.current.value?.trim()) {
      axios.post(`${Api}auth/recovery-password`, data, header).then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "!Se cambio la contraseña correctamente¡",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.replace("/");
        }, 1000)
      });
      return;
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "!Las contraseñas no coinciden¡"
    });
    return;
  }
  return (
    <div className="w-full flex flex-col items-center justify-around h-[50%]">
      <div className="flex flex-col justify-center gap-9 ">
        <h1 className="text-secondary1 font-semibold text-[36px] font-montserrat w-[975px] h-[44px]">
          Digite su nueva contraseña
        </h1>
        <p className="text-primary0 font-semibold text-[26px] font-montserrat w-[975px] h-[150px]">
          Crea una contraseña de al menos 8 caracteres, usando letras
          mayúsculas, minúsculas, números y símbolos. Evita información personal
          para mayor seguridad.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="w-[352px] h-[58px] relative">
          <input
            ref={newPassword}
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
            Nueva contraseña
          </label>
          <img className="absolute top-6 left-4" src={iconPasword} />
        </div>
        <div className="w-[352px] h-[58px] relative rounded-[50px]">
          <input
            ref={confirmPassword}
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
            Confirmar nueva contraseña
          </label>
          <img className="absolute top-6 left-4" src={iconPasword} />
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <button
            type="button"
            onClick={() => submit()}
            className="bg-secondary0 w-[192px] rounded-xl h-[50px] hover:bg-secondary0Hover text-background font-montserrat rounder-[10px]"
          >
            Cambiar contraseña
          </button>
        </div>
      </div>
    </div>
  );
}

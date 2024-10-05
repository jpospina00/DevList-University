import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../Api";
import axios from "axios";
import Swal from "sweetalert2";

export default function DigitarCorreo({ setShow, show }) {
  const email = useRef();
  const [loader, setLoader] = useState(false);
  const submit = () => {
    setLoader(!loader);
    const data = {
      email: email.current.value?.trim()
    }
    console.log(data);
    axios.post(`${Api}auth/send-email-recovery`, data).then((res) => {
      setLoader(false);
      console.log(res);
      setShow(!show);
    }).catch((err) => {
      setLoader(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "!El usuario no existe¡"
      });
    })
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-9">
        <h1 className="text-secondary1 font-semibold text-[36px] font-montserrat w-[428px] h-[44px]">
          ¿Olvidó su contraseña?
        </h1>
        <div className="flex flex-col justify-center mb-20 ">
          <p className="text-primary1 font-semibold text-[24px] font-montserrat w-[975px] h-[58px]">
            Introduzca su dirección de correo electrónico a continuación le
            enviaremos un e-mail con un enlace para restablecer tu contraseña
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <input ref={email}
          disabled={loader}
          placeholder="Ejemplo@Erika.gmail.com "
          className="w-[860px] h-[33px] rounded-[50px] px-3"
        ></input>
        <div className="flex flex-col justify-center items-center gap-10">
          <button
            type="button"
            disabled={loader}
            className={
              loader ?
              "flex items-center justify-center bg-secondary0 w-[192px] rounded-xl h-[50px] text-background font-montserrat rounder-[10px]" :
              "flex items-center justify-center bg-secondary0 w-[192px] rounded-xl h-[50px] hover:bg-secondary0Hover text-background font-montserrat rounder-[10px]"
            }
            onClick={() => {
              submit();
            }}
          >
            {
              loader ? <div
                class="z-50 w-10 h-10 border-4 border-t-primary0 border-dark rounded-full animate-spin"
              ></div> : "Aceptar"
            }
          </button>
          <Link to="/">
            <button type="button" className="text-background font-montserrat underline">Cancelar</button>
          </Link>
        </div>
      </div>
    </>
  );
}

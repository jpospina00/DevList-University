import Header from "./Header.jsx";

export default function DigitarCorreo({ setShow, show }) {
  return (
    <>
      <Header/>
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
        <input
          placeholder="Ejemplo@Erika.gmail.com "
          className="w-[860px] h-[33px] rounded-[50px] px-3"
        ></input>
        <div className="flex flex-col justify-center items-center gap-10">
          <button
            type="submit"
            className="bg-secondary0 w-[192px] rounded-xl h-[50px] text-background font-montserrat rounder-[10px]"
            onClick={() => {
              setShow(!show);
            }}
          >
            Aceptar
          </button>
          {/* <Link to="/cancelar"> */}
          <p className="text-background font-montserrat">Cancelar</p>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

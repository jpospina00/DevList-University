export default function SendEmail({setToken}) {
    return(
        <>
        <div className="flex flex-col justify-center gap-9">
          <h1 className="text-secondary1 font-semibold text-[36px] font-montserrat w-[975px] h-[44px]">
            Correo electrónico enviado
          </h1>
          <div className="flex flex-col justify-center mb-20 ">
            <p className="text-primary1 font-semibold text-[24px] font-montserrat w-[975px] h-[44px]">
              Gracias por operar con DevList University. Hemos enviado un
              correo con las instrucciones para que pueda restablecer su
              contraseña.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <button
              type="submit"
              className="bg-secondary0 w-[192px] rounded-xl h-[50px] text-background font-montserrat rounder-[10px]"
              onClick={() => {
                setToken("123");
              }}
            >
              Volver
            </button>
          </div>
        </div>
      </>
    )
}
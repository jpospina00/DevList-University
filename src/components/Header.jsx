import logo from "../assets/LogoSinFondo.svg"

export default function Header() {
    return(
        <header className="bg-transparent w-screen h-[100px] absolute top-0 z-50 flex px-20 items-center gap-10">{/**Colocar la imagen en los assets, importarla aca */}
          <img src={logo} width={"90px"} height={"94px"}/>  
          <h1 className="text-secondary1 font-semibold text-[36px] font-montserrat w-[428px] h-[44px]">DevList University</h1>
        </header>
    )
}

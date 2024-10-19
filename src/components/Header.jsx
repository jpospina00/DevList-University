import logo from "../assets/LogoSinFondo.svg"

export default function Header() {
    return(
        <header className="bg-transparent w-screen h-[100px] absolute top-0 z-50 flex px-20 items-center gap-3">{/**Colocar la imagen en los assets, importarla aca */}
          <img src={logo} width={"90px"} height={"94px"}/>  
          <h1 className="text-secondary0 font-semibold text-[36px] font-montserrat  h-[44px]">DevList</h1>
          <h2 className="text-primary font-semibold text-[36px] font-montserrat h-[44px]">University</h2>
        </header>
    )
}

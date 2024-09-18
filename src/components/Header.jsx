import logo from '../assets/Logo.svg';

export default function Header() {
    return (
        <header className="font-montserrat bg-primary0 w-screen h-[100px] absolute top-0 left-0 flex justify-around text-[#FFFFFF]">
            <div className="w-[20%] flex items-center justify-around">
                <img className='w-12 h-12' src={logo} alt="Logo" />
                <h1 className="text-2xl"> DevList University </h1>
            </div>
            <div className="flex w-[50%] justify-around items-center">
                <p className='cursor-pointer w-[100px] h-[50px] flex items-center justify-center hover:bg-disable hover:text-dark rounded-lg'> Inicio </p>
                <p className='cursor-pointer w-[100px] h-[50px] flex items-center justify-center hover:bg-disable hover:text-dark rounded-lg'> Categorías </p>
                <p className='cursor-pointer w-[100px] h-[50px] flex items-center justify-center hover:bg-disable hover:text-dark rounded-lg'> Reportes </p>
                <p className='cursor-pointer w-[100px] h-[50px] flex items-center justify-center hover:bg-disable hover:text-dark rounded-lg'> Perfil </p>
                <p className='cursor-pointer w-[100px] h-[50px] flex items-center justify-center hover:bg-disable hover:text-dark rounded-lg'> Volver </p>
            </div>
        </header>
    )
}

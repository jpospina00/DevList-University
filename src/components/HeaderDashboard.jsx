import logo from '../assets/LogoSinFondo.svg';

export default function HeaderDashboard() {
    return(
        <header className='flex items-center justify-around w-screen bg-primary0 h-[150px] absolute'>
            <div className='flex w-[40%] justify-around'>
                <img className='w-[110px] h-[95px]' src={logo} alt="Logo" />
                <div className='flex w-[400px] justify-around items-center text-5xl font-lilita'>
                    <p className='text-secondary0'> DevList </p>
                    <p className='text-[#92d6fe]'> University </p>
                </div>
            </div>
            <div className='flex w-[40%] justify-around text-disable items-center'>
                <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Inicio </p>
                <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Categorias </p>
                <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Reportes </p>
                <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Perfil </p>
                <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Volver </p>
            </div>
        </header>
    )
}
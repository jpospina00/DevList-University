import { useState } from 'react';
import logo from '../assets/LogoSinFondo.svg';
import ButtonNav from './ButtonNav';


export default function HeaderDashboard() {

    const [options, setOptions] = useState([
        {
            name: "Inicio",
            selected: false,
            to: "/home"
        },
        {
            name: "Administrar",
            selected: false,
            to: "/inventory"
        },
        {
            name: "Reportes",
            selected: false,
            to: "/home"
        },
        {
            name: "Perfil",
            selected: false,
            to: "/home"
        },
        {
            name: "Cerrar Sesión",
            selected: false,
            to: "/home"
        }
    ]);

    return (
        <header className='flex items-center justify-around w-full bg-primary0 h-[110px] fixed z-20'>
            <div className='flex w-[40%] justify-around'>
                <img className='w-[110px] h-[95px]' src={logo} alt="Logo" />
                <div className='flex w-[400px] justify-around items-center text-5xl font-lilita'>
                    <p className='text-secondary0'> DevList </p>
                    <p className='text-[#92d6fe]'> University </p>
                </div>
            </div>
            <div className='flex w-[40%] justify-around text-disable items-center'>
                {options.map((option, index) => <ButtonNav key={index} name={option.name} selected={option.selected} to={option.to}/>)}
                {/* <Link to="/home" >
                    <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Inicio </p>
                </Link>
                <Link to="/inventory" >
                    <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Inventario </p>
                </Link>
                <Link to="/" >
                    <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Reportes </p>
                </Link>
                <Link to="/" >
                    <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Perfil </p>
                </Link>
                <Link to="/" >
                    <p className='hover:text-dark hover:bg-[#6ddbd8] w-[100px] h-[50px] flex items-center justify-center rounded-lg'> Volver </p>
                </Link> */}
            </div>
        </header>
    )
}
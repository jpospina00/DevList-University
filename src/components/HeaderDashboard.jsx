import { useEffect, useState } from 'react';
import logo from '../assets/LogoSinFondo.svg';
import ButtonNav from './ButtonNav';


export default function HeaderDashboard() {

    const [options, setOptions] = useState([{
        name: "Inicio",
        selected: false,
        to: "/home"
    }, {
        name: "Administrar",
        selected: false,
        to: "/inventory"
    }, {
        name: "Devoluciones",
        selected: false,
        to: "/return-devices"
    }, {
        name: "Perfil",
        selected: false,
        to: "/home"
    }, {
        name: "Cerrar Sesión",
        selected: false,
        to: "/",
        onClick: () => {
            localStorage.removeItem("token");
            window.location.reload();
        }
    }]);

    const updateSelected = (option) => {
        let optionsSelected = [];
        for (let i = 0; i < options.length; i++) {
            let optionFor = options[i];
            if (optionFor.name == option.name) {
                options[i].selected = true;
            } else {
                options[i].selected = false;
            }
            optionsSelected.push(optionFor);
        }
        setOptions(optionsSelected);
    }

    return (
        <header className='flex items-center justify-around w-full bg-primary0 h-[15%]'>
            <div className='flex w-[40%] justify-around'>
                <img className='w-[110px] h-[95px]' src={logo} alt="Logo" />
                <div className='flex w-[400px] justify-around items-center text-5xl font-lilita'>
                    <p className='text-secondary0'> DevList </p>
                    <p className='text-[#92d6fe]'> University </p>
                </div>
            </div>
            <div className='flex w-[40%] justify-around text-disable items-center'>
                {options.map((option, index) => <ButtonNav key={index} name={option.name} selected={option.selected} to={option.to} updateSelected={updateSelected} onClick={option.onClick} />)}
            </div>
        </header>
    )
}
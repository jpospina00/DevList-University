import imgDevice from '../assets/IconDevices.svg';
import addDevice from '../assets/IconAddDevice.svg';
import iconUser from '../assets/User.svg';
import IconReport from '../assets/IconReport.svg';
import { useState } from 'react';
import ButtonSidebar from './ButtonsSidebar';

export default function Siderbar() {

    const [options, setOptions] = useState([{
        title: "Usuarios",
        img: iconUser,
        selected: false,
        to: "/users"
    }, {
        title: "Dispositivos",
        img: imgDevice,
        selected: false,
        to: "/inventory"
    }, {
        title: "Añadir dispositivo",
        img: addDevice,
        selected: false,
        to: "/add-device"
    }, {
        title: "Reportes",
        img: IconReport,
        selected: false,
        to: "/inventory"
    }]);

    const updateSelected = (option) => {
        let optionsSelected = [];
        for (let i = 0; i < options.length; i++) {
            let optionFor = options[i];
            if (optionFor.title == option.title) {
                options[i].selected = true;
            } else {
                options[i].selected = false;
            }
            optionsSelected.push(optionFor);
        }
        setOptions(optionsSelected);
    }

    return (
        <div className="text-disable gap-20 flex flex-col items-center bg-[#18333F] pt-5">
            {options.map((options, index) => <ButtonSidebar key={index} title={options.title} img={options.img} to={options.to} selected={options.selected} updateSelected={updateSelected} />)}
        </div>
    )
}
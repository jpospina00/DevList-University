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
        to: "/inventory"
    }, {
        title: "Dispositivos",
        img: imgDevice,
        to: "/inventory"
    }, {
        title: "Añadir dispositivo",
        img: addDevice,
        to: "/add-device"
    }, {
        title: "Reportes",
        img: IconReport,
        to: "/request-devices"
    }]);

    return (
        <div className="text-disable gap-20 flex flex-col items-center bg-[#18333F] h-[100%] pt-5">
            { options.map((options, index) => <ButtonSidebar key={index} title={options.title} img={options.img} to={options.to} />) }
        </div>
    )
}
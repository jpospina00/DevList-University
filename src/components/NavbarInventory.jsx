import imgDevice from '../assets/DeviceIcon.svg';
import addDevice from '../assets/AddDevice.svg';
import RemoveDevice from '../assets/RemoveDevice.svg';
import activarDesactivar from '../assets/Activar-Desactivar-Device.svg';
import notifications from '../assets/Notifications-icon.svg';

export default function NavbarInventory() {

    return (
        <div className="text-disable justify-around flex flex-col items-center bg-[#18333F] h-[87%] w-[130px] top-[110px] left-0 fixed">
            <div className='hover:cursor-pointer flex flex-col items-center text-center'>
                <img className='w-8 h-8' src={imgDevice} alt="Device" />
                <p> Dispositivos </p>
            </div>
            <div className='hover:cursor-pointer flex flex-col items-center text-center'>
                <img className='w-8 h-8' src={addDevice} alt="AddDevice" />
                <p> Añadir Dispositivo </p>
            </div>
            <div className='hover:cursor-pointer flex flex-col items-center text-center'>
                <img className='w-8 h-8' src={RemoveDevice} alt="RemoveDevice" />
                <p> Quitar Dispositivo </p>
            </div>
            <div className='hover:cursor-pointer flex flex-col items-center text-center'>
                <img className='w-8 h-8' src={activarDesactivar} alt="activarDesactivar" />
                <p> Activar/Desactivar Dispositivo </p>
            </div>
            <div className='hover:cursor-pointer flex flex-col items-center text-center'>
                <img className='w-8 h-8' src={notifications} alt="notifications" />
                <p> Notificaciones </p>
            </div>
        </div>
    )
}
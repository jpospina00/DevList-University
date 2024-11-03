import CardInventory from "../components/CardInventory";
import Siderbar from "../components/Siderbar";
import imagen1 from '../assets/Images/Images1.png';

export default function Inventory() {
    const data = [
        {
            img: imagen1,
            title: "Laptop Dell Inspiron 15",
            referencia: "23445",
            bodega: 1,
            tipo: "PC",
            fecha: "11/03/2024",
            activo: true
        },
        {
            img: imagen1,
            title: "Laptop Dell Inspiron 15",
            referencia: "23445",
            bodega: 1,
            tipo: "PC",
            fecha: "11/03/2024",
            activo: false
        },
        {
            img: imagen1,
            title: "Laptop Dell Inspiron 15",
            referencia: "23445",
            bodega: 1,
            tipo: "PC",
            fecha: "11/03/2024",
            activo: true
        },
        {
            img: imagen1,
            title: "Laptop Dell Inspiron 15",
            referencia: "23445",
            bodega: 1,
            tipo: "PC",
            fecha: "11/03/2024",
            activo: false
        }
    ];
    return (
        <div className="w-full h-[100%] overflow-hidden flex flex-col gap-5 items-center">
            <div className="flex w-[90%] gap-5">
                <div className="flex items-center w-full">
                    <input
                        placeholder="Search..."
                        className="pl-[40px] input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-full transition-all focus:w-full outline-none"
                        name="search"
                        type="search"
                    />
                </div>
                <button className="border-2 w-[200px] border-dark text-dark px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-primary0 active:bg-primary1 focus:outline-none">
                    Buscar
                </button>
            </div>
            <div className="flex flex-col w-[90%] h-[100%] gap-5 overflow-scroll">
                {
                    data.map((device, i) => <CardInventory key={i} activo={device.activo} bodega={device.bodega} fecha={device.fecha} img={device.img} referencia={device.referencia} tipo={device.tipo} title={device.title} />)
                }
            </div>
            <div className="pb-20 w-[90%] flex justify-between items-center text-secondary0">
                <p> Página 1 de 30 </p>
                <div className="w-[30%] flex justify-around">
                    <button className="w-[100px] h-[30px] border border-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Volver </button>
                    <button className="w-[100px] h-[30px] border border-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Siguiente </button>
                </div>
            </div>
        </div>
    )
}
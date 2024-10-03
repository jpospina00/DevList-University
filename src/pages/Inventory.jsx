import CardInventory from "../components/CardInventory";
import NavbarInventory from "../components/NavbarInventory";
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
        <div className="relative top-[105px] h-full">
            <NavbarInventory />
            <div className="w-[86%] h-[700px] left-[130px] relative ml-16 flex flex-col gap-8 pt-8">
                <h1 className="text-[25px] font-bold"> Agregar los equipos que deseas incluir en tu inventario </h1>
                <div className="flex w-full gap-5">
                    <div className="flex items-center w-full">
                        <svg
                            className="size-6 absolute left-3 text-dark"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                        <input
                            placeholder="Search..."
                            className="pl-[40px] input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-full transition-all focus:w-full outline-none"
                            name="search"
                            type="search"
                        />
                    </div>
                    <button className="mr-[20px] border-2 w-[200px] border-dark text-dark px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-primary0 active:bg-primary1 focus:outline-none">
                        Buscar
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    {
                        data.map((device, i) => <CardInventory key={i} activo={device.activo} bodega={device.bodega} fecha={device.fecha} img={device.img} referencia={device.referencia} tipo={device.tipo} title={device.title} />)
                    }
                </div>
            </div>
        </div>
    )
}
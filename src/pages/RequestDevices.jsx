import CardDeviceRequest from "../components/CardDeviceRequest";

export default function RequestDevices() {
    return (
        <div className="w-full h-full pt-5 flex flex-col items-center">
            <div className="flex w-[90%] justify-between pb-5">
                <h1 className="font-montserrat font-semibold text-4xl"> Equipos Solicitados </h1>
                <div className="flex w-3/6 justify-end gap-5">
                    <button className="w-[145px] h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Volver </button>
                    <button className="w-[145px] h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Pedir equipo </button>
                    <button className="w-[145px] h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable"> Historial </button>
                </div>
            </div>
            <hr className="border w-[90%] border-secondary0" />
            <div className="w-[90%] h-full flex flex-col pt-5">
                <h2 className="font-montserrat font-bold text-2xl pb-5"> Dispositivos </h2>
                <div className="w-full h-[70%] overflow-scroll flex flex-col gap-5">
                    <CardDeviceRequest />
                    <CardDeviceRequest />
                    <CardDeviceRequest />
                    <CardDeviceRequest />
                </div>
                <h2 className="font-montserrat font-bold text-2xl pt-5"> Total de dispositivos 4 </h2>
            </div>
        </div>
    )
}
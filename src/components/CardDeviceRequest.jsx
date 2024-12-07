import CheckedIcon from "../assets/Checked.svg";

export default function CardDeviceRequest({ setShow, device }) {

    return (
        <div className="flex items-center gap-5 p-2">
            <div className="w-full h-[200px] bg-[#cfd7dc] rounded-3xl flex justify-around items-center border border-dark">
                <img className="h-[90%] w-[20%] border border-dark rounded-3xl" src={"https://drive.google.com/thumbnail?id=" + device.urlPicture} alt="Imagen1" />
                <div className="flex flex-col w-[50%] h-[90%] justify-center gap-4">
                    <p className="font-montserrat font-medium text-base"> Nombre: {device.name} </p>
                    <p className="font-montserrat font-medium text-base"> N° Referencia: {device.deviceId} </p>
                    <p className="font-montserrat font-medium text-base"> Tipo de dispositivo: {device.brand} </p>
                    <p className="font-montserrat font-medium text-base"> N° Bodega: {device.warehouseId} </p>
                    <p className="font-montserrat font-medium text-base"> Nombre Bodega: {device.warehouseName} </p>
                </div>
                <div className="w-[15%] h-[80%] flex flex-col items-end justify-between">
                    <button onClick={() => setShow(true)} className="group w-full h-[40px] border-2 border-[#9B2C2C] bg-[#F56565] hover:bg-[#c20000] rounded-lg text-disable flex justify-center items-center gap-5">
                        <p> Eliminar </p>
                        <div className="relative overflow-hidden h-[100%] flex flex-col justify-center">
                            <svg viewBox="0 0 1.625 1.625" className="absolute -top-7 fill-disable delay-100 group-hover:top-4 group-hover:animate-[spin_1.4s] group-hover:duration-1000" height={15} width={15}>
                                <path d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195" />
                                <path d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033" />
                                <path d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016" />
                            </svg>
                        </div>
                    </button>
                    <div className="flex items-center w-full justify-center gap-2">
                        <p className="font-montserrat font-semibold text-2xl"> Cantidad </p>
                        <p className="font-montserrat font-semibold text-2xl"> {device.quantity} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
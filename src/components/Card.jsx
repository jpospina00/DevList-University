export default function Card({ img, title, available, stock }) {
    return (
        <div className="text-disable w-[260px] h-[290px] bg-secondary0 rounded-3xl flex flex-col items-center gap-3 shadow-md shadow-dark">
            <img className="rounded-3xl w-full h-[190px]" src={img} alt="DeviceImg" />
            <h1> {title} </h1>
            <div className="w-full flex justify-around">
                <div className="flex flex-col text-[14px]">
                    <div className="flex items-center gap-5">
                        <p> Disponible </p>
                        {
                            available ? <div className="bg-[#23FFD3] w-3 h-3 rounded-full"></div> :
                                <div className="bg-[#FF0D0D] w-3 h-3 rounded-full"></div>
                        }
                    </div>
                    <p> Cantidad: {stock} </p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="rounded-xl bg-disable hover:bg-primary0 hover:text-disable text-primary0 w-[120px] h-[30px] text-[12px]">
                        Pedir Dispositivo
                    </button>
                </div>
            </div>
        </div>
    )
}
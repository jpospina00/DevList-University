export default function Card({ img, title, available, stock }) {
    return (
        <div className="text-disable w-[350px] h-[370px] bg-secondary0 rounded-3xl flex flex-col items-center gap-3 shadow-md shadow-dark">
            <img className="rounded-3xl w-full h-[250px]" src={img} alt="DeviceImg" />
            <h1> {title} </h1>
            <div className="w-full flex justify-around">
                <div className="flex flex-col">
                    <div className="flex items-center gap-5">
                        <p> Disponible </p>
                        {
                            available ? <div className="bg-[#23FFD3] w-5 h-5 rounded-full"></div> :
                                <div className="bg-[#FF0D0D] w-5 h-5 rounded-full"></div>
                        }
                    </div>
                    <p> Cantidad: {stock} </p>
                </div>
                <div className="flex items-center justify-center">
                    <button className="rounded-xl bg-disable hover:bg-primary0 hover:text-disable text-primary0 w-[150px] h-[30px]">
                        Pedir Dispositivo
                    </button>
                </div>
            </div>
        </div>
    )
}
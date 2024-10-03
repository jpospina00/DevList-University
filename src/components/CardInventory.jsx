export default function CardInventory({ img, title, referencia, bodega, tipo, fecha, activo }) {
    return (
        <div className='flex items-center w-full gap-4'>
            <div class="dark:bg-black/10">
                <label class="text-white">
                    <input class="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10" type="checkbox" />
                </label>
            </div>
            <div className="border flex w-[90%] rounded-3xl bg-secondary2">
                <img className='border rounded-lg w-[200px] h-[200px] m-3' src={img} alt="Card" />
                <div className='flex items-center justify-between w-full m-5 font-bold text-[16px]'>
                    <div className='flex h-full flex-col justify-around'>
                        <h1>Nombre: {title} </h1>
                        <p> N° Referencia: {referencia} </p>
                        <p> N° Bodega: {bodega} </p>
                    </div>
                    <div className='flex h-full flex-col justify-around'>
                        <p> {fecha} </p>
                        <p> Tipo de dispositivo: {tipo} </p>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" value="" defaultChecked={activo} />
                            <div
                                class="group peer rounded-full duration-300 w-16 h-8 ring-2 ring-[#FF0D0D] after:duration-300 after:bg-[#FF0D0D] peer-checked:after:bg-[#23FFD3] peer-checked:ring-[#23FFD3] after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"
                            ></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
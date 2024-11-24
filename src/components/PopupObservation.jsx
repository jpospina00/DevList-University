export default function PopupObservation({ setShow }) {
    return (
        <div className="fixed w-screen h-screen bg-dark flex items-center justify-center bg-opacity-50 z-50 top-0">
            <div className="flex flex-col bg-disable w-[478px] h-[357px] items-center justify-center gap-5 rounded-3xl">
                <div className='flex flex-col justify-around w-4/5 relative'>
                    <h1 className="font-montserrat font-bold text-[24px]">
                        Observación
                    </h1>
                    <textarea
                        placeholder="Escriba su observación"
                        className="text-start h-32 max-h-32 min-h-10 p-2 border border-dark rounded">
                    </textarea>
                </div>
                <div className='flex w-[50%] justify-around'>
                    <button onClick={() => setShow(false)}  
                        className="p-2 mt-5 border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                        Cancelar
                    </button>
                    <button className="p-2 mt-5 border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}
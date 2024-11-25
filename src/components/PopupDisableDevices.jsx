export default function PopupDisableDevices({ setShow, handleActiveChange }) {

    
  return (
    <div className="fixed w-screen h-screen bg-dark flex items-center justify-center bg-opacity-50 z-50 top-0 left-0">
      <div className="flex flex-col bg-disable w-[478px] h-[400px] items-center justify-center gap-5 rounded-3xl">
        <div className="flex flex-col justify-around w-4/5 relative gap-1">
          <h1 className="font-montserrat font-bold text-[24px]">Motivo</h1>
          <textarea
            placeholder="Escriba su observación"
            className="text-start h-28 max-h-32 min-h-10 p-2 border border-dark rounded"
          ></textarea>
         <div className="w-[352px] h-[58px] relative">
            <input
              type="text"
              className="peer text-start h-20 max-h-10 p-2 w-full pb-12 border rounded mt-3 border-dark pt-6  pr-4 "
              placeholder=""
              name="firma"
            />
            <label
              className="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-8 z-10 origin-[0] right-[85%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
              htmlFor="firma"
            >
              Firma
            </label>
          </div>
        </div>
        <div className="flex w-[50%] justify-around">
          <button
            onClick={() => setShow(false)}
            className="p-2 mt-5 border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable w-[40%] h-[75%]"
          >
            Cancelar
          </button>
          <button
            onClick={handleActiveChange}
            className="p-2 mt-5 border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable w-[40%] h-[75%]"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

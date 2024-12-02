export default function PopupDisableDevices({ setShow, handleActiveChange }) {

    
  return (
    <div className="fixed w-screen h-screen bg-dark flex items-center justify-center bg-opacity-50 z-50 top-0 left-0">
      <div className="flex flex-col bg-disable w-[478px] h-[400px] items-center justify-center gap-5 rounded-3xl">
        <div className="flex flex-col justify-around w-4/5 relative gap-3">
          <h1 className="font-montserrat font-bold text-[24px]">Motivo</h1>
          <textarea
            placeholder="Escriba su observación"
            className=" h-28 max-h-32 min-h-10 p-3 border border-dark rounded"
          ></textarea>
         <div className="w-[383px] h-[58px] relative">
            <input
              type="text"
              // className="peer text-start h-20 max-h-10 p-2 w-full pb-12 border rounded mt-3 border-dark pt-6  pr-4 "
              className="peer w-full p-4 pt-6  pr-4 bg-inherit border-2 rounded outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
              placeholder=""
              name="firma"
            />
            <label
              className="absolute text-base transform top-1 z-10 origin-[0] left-[3.5%] opacity-50"
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

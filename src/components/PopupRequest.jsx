import DatePicker from "./DatePicker";

export default function PopupRequest() {
  return (
    <div className="fixed w-screen h-screen bg-dark flex items-center justify-center bg-opacity-50 z-50 top-0">
      <div className="flex flex-col bg-disable w-[478px] h-[357px] items-center justify-center gap-5 rounded-3xl">
        <h3>Fecha programada:</h3>
        <div className="">
            <DatePicker/>
          <h3>hola</h3>
        </div>
        <div className="flex justify-center gap-7 w-full">
            <button className="w-1/5 h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">Cancelar</button>
            <button className="w-1/5 h-[30px] border border-secondary0 text-secondary0 rounded-lg hover:bg-secondary0Hover hover:text-disable">Aceptar</button>
        </div>
      </div>
    </div>
  );
}

import iconAlert from "../assets/IconAlert.svg";
import Swal from "sweetalert2";

export default function PopupDelete({ show, setShow }) {
    const confirmDelete = () => {
        setShow(false);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Dispositivo eliminado correctamente",
            showConfirmButton: false,
            timer: 1500
          });
    }

    return (
        <div className="fixed w-screen h-screen bg-dark flex items-center justify-center bg-opacity-50 z-50 top-0">
            <div className="flex flex-col bg-disable w-[478px] h-[357px] items-center justify-center gap-5 rounded-3xl">
                <h1 className="font-montserrat font-bold text-2xl text-center w-[80%]">¿Deseas eliminar la solicitud de tu préstamos?</h1>
                <img className="w-[35%] h-[35%]" src={iconAlert} alt="" />
                <div className="flex w-full h-[10%] items-center justify-center gap-5">
                    <button onClick={() => setShow(false)}
                        className="w-[30%] h-[100%] rounded-xl bg-[#DDDDDD] hover:bg-[#b2b2b2] text-dark font-bold" >
                        Cancelar
                    </button>
                    <button onClick={confirmDelete} className="w-[30%] h-[100%] rounded-xl bg-[#FF726D] hover:bg-[#c20000] text-disable font-bold" >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}
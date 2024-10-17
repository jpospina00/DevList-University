import Header from "./Header";
import IconUserRegister from "../assets/IconUserRegister.svg";

export default function UserRegister() {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-screen pt-20">
        <Header />
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="font-bold text-center text-2xl mb-4 ">
            Registre el Usuario
          </h1>
        </div>
        <div>
          <div>
            <img className="w-24 h-24 mb-8" src={IconUserRegister}></img>
            <div className="flex justify-start font-bold">
              <p className="text-left w-[500px]">Nombre</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

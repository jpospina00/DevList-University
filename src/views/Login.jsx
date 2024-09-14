import { LuUser2 } from "react-icons/lu";
import { MdLock } from "react-icons/md";
import imagenLogin from "../assets/imagenLogin.png";

export default function Login() {
  return (
    <main className="flex justify-center items-center h-screen bg-black">
      <section>
        <form>
          <img src={imagenLogin} />
          <div>
            <LuUser2 />
            <input type="text" />
          </div>
          <div>
            <MdLock />
            <input type="text" />
          </div>
          <button type="submit">Iniciar sesión</button>
          <p>Recuperar contraseña</p>
          <p>¿Olvidó su nombre de usuario o contraseña?</p>
        </form>
      </section>
    </main>
  );
}

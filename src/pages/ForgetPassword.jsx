import { useState } from "react";
import loginImg from "../assets/FondoLogin.png";
import DigitarCorreo from "../components/DigitarCorreo";
import SendEmail from "../components/SendEmail";
import ChangeNewPassword from "../components/ChangeNewPassword";
export default function ForgetPassword() {
  const [show, setShow] = useState(true);
  const [token, setToken] = useState("");

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      <img
        className="h-screen w-screen absolute top-0 left-0 -z-10"
        src={loginImg}
        alt=""
      />
      {token ? (
        <ChangeNewPassword/>
      ) : show ? (
       <DigitarCorreo setShow={setShow} show={show}/>
      ) : (
       <SendEmail setToken={setToken}/>
      )}
    </main>
  );
}

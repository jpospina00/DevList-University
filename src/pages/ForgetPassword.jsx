import { useState } from "react";
import loginImg from "../assets/FondoLogin.png";
import DigitarCorreo from "../components/DigitarCorreo";
import SendEmail from "../components/SendEmail";
import ChangeNewPassword from "../components/ChangeNewPassword";
import { useParams } from "react-router-dom";
export default function ForgetPassword() {

  const params = useParams();
  const token = params.token;
  const [show, setShow] = useState(true);

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      <img
        className="h-screen w-screen absolute top-0 left-0 -z-10"
        src={loginImg}
        alt=""
      />
      {token.localeCompare("null") ? (
        <ChangeNewPassword token={token}/>
      ) : show ? (
       <DigitarCorreo setShow={setShow} show={show}/>
      ) : (
       <SendEmail />
      )}
    </main>
  );
}

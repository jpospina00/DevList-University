import logo from "../assets/LogoSinFondo.svg"
import locationIcon from '../assets/location.svg';
import phone from '../assets/phone.png';
import printer from '../assets/printer.png';

export default function Footer() {
  return (
    <footer className="w-full h-[500px] bg-secondary0 p-24">
      <hr className="border w-full border-disable opacity-25" />
      <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="w-full flex flex-col justify-around">
          <div className="flex items-center justify-center h-[50%]">
            <img className="h-[100%]" src={logo} alt="LOGO" />
          </div>
          <div className="text-disable h-[25%] flex flex-col items-center justify-center gap-5">
            <div className="flex w-full justify-start">
              <img src={locationIcon} alt="Location" />
              <p> 345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345 </p>
            </div>
            <div className="flex w-full justify-start gap-36">
              <div className="flex">
                <img src={phone} alt="Phone" />
                <p> (123) 456-7890 </p>
              </div>
              <div className="flex">
                <img src={printer} alt="Printer" />
                <p> (123) 456-7890 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-disable flex items-center justify-end">
          <div className="flex gap-5">
            <p className="cursor-pointer hover:border-b hover:border-disable"> Sobre nosotros </p>
            <p className="cursor-pointer hover:border-b hover:border-disable"> Ayuda </p>
            <p className="cursor-pointer hover:border-b hover:border-disable"> Politicas de privacidad </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col ">
        <hr className="border w-full border-disable opacity-25" />
        <p className="text-whiteColor self-end"> Copyright © 2018 • Lift Media Inc. </p>
      </div>
    </footer>
  );
}
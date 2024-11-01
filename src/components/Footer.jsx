import logoHeader from "../assets/logoHeader.png";
//import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <footer className="bg-secondary0 text-whiteColor py-8">
    <div className="flex flex-col items-center space-y-4 w-[40%]">

      {/* Logo */}
      <img src={logoHeader} alt="Devlist University Logo" className="h-20 mb-4" />

      {/* Dirección y contacto */}
      <div className="text justify-between">
        <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
        <p>(123) 456-7890</p>
        <p>(123) 456-7890</p>
      </div>

      {/* Enlaces */}
      <div className="text-center space-y-2">
        <a href="#about" className="hover:underline">Sobre nosotros</a>
        <a href="#help" className="hover:underline">Ayuda</a>
        <a href="#privacy" className="hover:underline">Políticas de privacidad</a>
      </div>

      {/* Copyright */}
      <p className="text-sm mt-4">&copy; 2018 • Lift Media Inc.</p>
    </div>
  </footer>
  );
}

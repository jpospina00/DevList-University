import logoHeader from "../assets/logoHeader.png";
//import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16 border-t border-neutral-100 bg-secondary0">
      <div className="w-[70%] max-w-7xl mx-auto">
        <div className="border-b border-neutral-100 pb-8 lg:pb-16 flex justify-between flex-col lg:flex-row items-center lg:items-start">
          <div className="space-y-8 pb-8 border-b border-neutral-100 lg:pb-0 lg:border-none w-full flex flex-col lg:block items-center ">
            <img src={logoHeader} alt="logo" class="w-fit" />
            <ul class="flex gap-x-8 text-xs text-gray-500 flex-col lg:flex-row gap-y-6 text-center lg:text-start text-whiteColor">
              <li>
                <a href="#" class="hover:text-cyan-600">
                  Products & Service
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-cyan-600">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-cyan-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-cyan-600">
                  About
                </a>
              </li>
            </ul>

            <div class="flex items-center gap-x-4 text-gray-700"></div>
          </div>
        </div>
        <div class="pt-8 flex justify-between flex-col lg:flex-row gap-y-4 items-center">
          {/* <ul class="flex gap-x-8 text-xs text-gray-500 text-whiteColor">
            <li>
              <a href="#" class="hover:text-cyan-600">
                English
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-cyan-600">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-cyan-600">
                Legal
              </a>
            </li>
          </ul> */}
          <p class="flex gap-x-8 text-xs text-gray-500 text-gray-400 text-whiteColor">
            © 2024 Cadet UI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

//  <footer className="bg-secondary0 text-whiteColor py-8">
//     <div className="flex flex-col items-center space-y-4 w-[40%]">

//       {/* Logo */}
//       <img src={logoHeader} alt="Devlist University Logo" className="h-20 mb-4" />

//       {/* Dirección y contacto */}
//       <div className="text justify-between">
//         <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
//         <p>(123) 456-7890</p>
//         <p>(123) 456-7890</p>
//       </div>

//       {/* Enlaces */}
//       <div className="text-center space-y-2">
//         <a href="#about" className="hover:underline">Sobre nosotros</a>
//         <a href="#help" className="hover:underline">Ayuda</a>
//         <a href="#privacy" className="hover:underline">Políticas de privacidad</a>
//       </div>

//       {/* Copyright */}
//       <p className="text-sm mt-4">&copy; 2018 • Lift Media Inc.</p>
//     </div>
//   </footer>

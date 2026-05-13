import {FaEnvelope } from "react-icons/fa";



export default function Header() {

    return (
        <>

        <div className="bg-black text-white text-sm py-2">
                 <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
            
                   <FaEnvelope className="text-[#8c8020] text-sm shrink-0" />
                     <a href="mailto:irshadiyyawomenscollege@gmail.com" className="text-white font-light tracking-widest font-[Raleway] hover:underline">
                     irshadiyyawomenscollege@gmail.com
                       </a>
        
                   </div>
                </div>
              {/* Header Main */}
              <div className="bg-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
                  
                  {/* Logo + Title */}
                 <div className="flex items-center gap-3 py-2 justify-start text-left">
                    
                    <img
                      src="https://media.raihsuite.com/RS0004/web/home/logo-irshadiyya.png"
                      alt="logo"
                      className="w-16 sm:w-18 h-auto object-contain shrink-0"
                    />
        
                    <div className="flex-1 min-w-0">
                     <h1 className="font-[Raleway] text-sm sm:text-lg md:text-xl font-extrabold text-[#8c8020] tracking-wide leading-snug">
                        IRSHADIYYA WOMEN'S COLLEGE
                      </h1>
        
                      <hr className="border-t border-[#8c8020] my-2" />
        
                      <p className="text-[10px] sm:text-xs font-light text-gray-700 tracking-normal">
                        KARAYA, PANDIKKAD P.O, PANDIKKAD, MALAPPURAM, 676523
                      </p>
                    </div>
                  </div>
        
                  {/* Button */}
                 <a href="/admissionenquiry"
                     className="hidden sm:block bg-white border-2 border-[#8c8020] text-[#8c8020] px-5 py-2 rounded text-md font-semibold hover:bg-[#8c8020] hover:text-white  transition duration-300 animate-[fadeIn_1s_ease-out]"
>
                    Register for Admission
                  </a>
                </div>
              </div>
              </>

    );
}
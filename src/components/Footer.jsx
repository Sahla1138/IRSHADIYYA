import {
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Social Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#8c8020]">
              Social
            </h3>

            <div className="flex items-center gap-4">
              
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c8020] transition duration-300"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c8020] transition duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c8020] transition duration-300"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/irshadiyya_union._"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c8020] transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8c8020] transition duration-300"
              >
                <FaYoutube size={18} />
              </a>

            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#8c8020]">
              Contact Info
            </h3>

            <div className="space-y-5">
              
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#8c8020] mt-1" />
                <p className="text-gray-300 font-[Raleway] text-sm sm:text-base">
                  Irshadiyya Women's College, Karaya, Pandikkad
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#8c8020]" />
                <p className="text-gray-300 font-[Raleway]  text-sm sm:text-base">
                  irshadiyyawomenscollege@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#8c8020]" />
                <p className="text-gray-300 font-serif text-sm sm:text-base ">
                  +91 8547 069 129
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left */}
          <p className="text-sm font-serif text-gray-400 text-center md:text-left">
            © 2025 Irshadiyya Womens College. All Rights Reserved.
            Designed & Developed by{" "}
            <a
              href="https://www.raihsoft.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#8c8020] hover:underline"
            >
              raihsoft
            </a>
          </p>

          {/* Back to Top */}
          <a
            href="#top"
            className="flex items-center gap-2 text-sm text-[#8c8020] hover:text-white transition"
          >
            Back to top
            <FaArrowUp size={14} />
          </a>

        </div>
      </div>
    </footer>
  );
}
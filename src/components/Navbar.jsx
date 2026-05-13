import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

   const [menuOpen, setMenuOpen] = useState(false);
     const [aboutOpen, setAboutOpen] = useState(false);
    return (

        <>
         <nav className="bg-[#8c8020] shadow-md sticky top-0 z-50 ">
              <div className="max-w-7xl mx-auto px-4">
                
                {/* Navbar Container */}
                <div className="flex items-center justify-between h-14 max-w-7xl mx-auto px-4 ">
                  
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-white font-bold "
                  >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                  </button>
        
                  {/* Desktop Menu */}
                  <ul className="hidden lg:flex items-center justify-center w-full gap-8 text-white font-bold text-md">
                    
                    <li>
                      <Link to="/" className="hover:text-gray-300 transition">
                        Home
                      </Link>
                    </li>
        
                    {/* Dropdown */}
                    <li className="relative group">
                      <button className="flex items-center gap-1 hover:text-gray-300 transition">
                        About Us
                        <ChevronDown size={16} />
                      </button>
        
                      {/* Dropdown Menu */}
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-[#8c8020] text-white min-w-56 shadow-lg rounded-md py-2 z-50">
                        
                        <li>
                          <a
                            href="/administration"
                            className="block px-4 py-2 hover:text-gray-300 transition"
                          >
                            Administration
                          </a>
                        </li>
        
                        <li>
                          <Link to="/missionandvision" className="block px-4 py-2 hover:text-gray-300 transition">
                            Mission & Vision
                          </Link>
                        </li>
        
                        <li>
                          <Link to="/affiliations" className="block px-4 py-2 hover:text-gray-300 transition">
                            Affiliations & Accreditations
                          </Link>
                        </li>
        
                        <li>
                          <Link to="/admission" className="block px-4 py-2 hover:text-gray-300 transition">
                            Admission
                          </Link>
                        </li>
                      </ul>
                    </li>
        
                    <li>
                      <Link to="/courses" className="hover:text-gray-300 transition">
                        Courses
                      </Link>
                    </li>
        
                    <li>
                      <Link to="/gallery" className="hover:text-gray-300 transition">
                        Gallery
                      </Link>
                    </li>
        
                    <li>
                      <Link to="/contact" className="hover:text-gray-300 transition">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
        
                {/* Mobile Menu */}
                {menuOpen && (
                  <div className="lg:hidden bg-[#8c8020] pb-4">
                    <ul className="flex flex-col gap-2 text-white  font-semibold text-sm">
                      
                      <li>
                        <a href="/" className="block py-2 hover:text-gray-300 transition">
                          Home
                        </a>
                      </li>
        
                      {/* Mobile Dropdown */}
                      <li>
                        <button
                          onClick={() => setAboutOpen(!aboutOpen)}
                          className="flex items-center justify-between hover:text-gray-300 w-full py-2"
                        >
                          About Us
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              aboutOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
        
                        {aboutOpen && (
                          <ul className="pl-4 mt-2 flex flex-col gap-2 text-white text-xs">
                            <li>
                              <Link to="/administration" className="hover:text-gray-300 transition">
                                Administration
                              </Link>
                            </li>
        
                            <li>
                              <Link to="/missionandvision" className="hover:text-gray-300 transition">
                                Mission & Vision
                              </Link>
                            </li>
        
                            <li>
                              <Link to="/affiliations" className="hover:text-gray-300 transition">
                                Affiliations & Accreditations
                              </Link>
                            </li>
        
                            <li>
                              <Link to="/admission" className="hover:text-gray-300 transition">
                                Admission
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
        
                      <li>
                        <Link to="/courses" className="block py-2 hover:text-gray-300 transition">
                          Courses
                        </Link>
                      </li>
        
                      <li>
                        <Link to="/gallery" className="block py-2 hover:text-gray-300 transition">
                          Gallery
                        </Link>
                      </li>
        
                      <li>
                        <Link to="/contact" className="block py-2 hover:text-gray-300 transition">
                          Contact
                        </Link  >
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>
        </>
    );
}
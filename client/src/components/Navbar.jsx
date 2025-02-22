import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll to add shadow effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <nav className="border-gray-200">
                <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
                    <a href="#" className="flex items-center">
                        <img src={logo} alt="logo" className=" h-15 w-15 object-cover rounded-full transition-all duration-300" />
   
                        <span className="text-lg font-semibold whitespace-nowrap">Lưu Thị Em</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        )}
                    </button>

                    {/* Navigation Links */}
                    <div className={`md:flex md:items-center md:w-auto w-full transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
                            <li>
                                <a href="#" className="relative block px-3 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300">
                                    Trang chủ
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="relative block px-3 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300">
                                    Giới thiệu
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="relative block px-3 py-2 text-gray-700 hover:text-blue-700 transition-all duration-300">
                                    Sản phẩm
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

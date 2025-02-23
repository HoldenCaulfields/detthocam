import React, { useState, useEffect } from "react";
import img1 from "../assets/det1.jpg";
import img2 from "../assets/det2.jpg";
import img3 from "../assets/det3.jpg";
import img4 from "../assets/det4.jpg";
import img5 from "../assets/mom.jpg";
import det from "../assets/det.jpg";

const images = [img1, img2, img3, img4, img5];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if screen width is mobile size
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col md:flex-row w-full px-4 md:px-10 py-10 items-center bg-gradient-to-r from-red-50 to-gray-100 gap-6 md:gap-10">
            {/* Right Section: Auto-Changing Slideshow (Centered on Mobile) */}
            <div className="w-full md:w-2/3 min-h-[250px] md:min-h-[500px] flex items-center justify-center relative overflow-hidden">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Dệt Image ${index + 1}`}
                        loading={index === currentImageIndex ? "eager" : "lazy"}
                        className={`absolute w-full h-full object-contain transition-all duration-700 ease-in-out transform ${
                            index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    />
                ))}
            </div>

            {/* Only Render Small Image on Desktop (md and larger) */}
            {!isMobile && (
                <img
                    src={det}
                    alt="Dệt thổ cẩm Chăm"
                    className="w-24 sm:w-32 rounded-lg shadow-lg md:w-1/3 md:relative md:block fixed bottom-4 left-4 md:bottom-auto md:left-auto"
                />
            )}
        </div>
    );
};

export default Home;

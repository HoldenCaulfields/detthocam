import img1 from "../assets/kn1.jpg";
import img2 from "../assets/kn2.jpg";
import img3 from "../assets/kn3.jpg";
import img4 from "../assets/kn4.jpg";
import img5 from "../assets/kn5.jpg";
import img6 from "../assets/kn6.jpg";

import React from "react";

const images = [
  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img3, alt: "Image 3" },
  { id: 4, src: img4, alt: "Image 4" },
  { id: 5, src: img5, alt: "Image 5" },
  { id: 6, src: img6, alt: "Image 6" },
];

const About = () => {
  return (
    <div id="about" className="p-6 flex flex-col items-center bg-gradient-to-r from-gray-100 to-red-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Kỷ Niệm</h2>

      {/* Mobile: Horizontal Scroll | Desktop: Centered Grid */}
      <div className="w-full flex overflow-x-auto md:grid md:grid-cols-3 md:justify-center md:place-items-center gap-6 scrollbar-hide scroll-smooth snap-x snap-mandatory">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="w-64 h-64 flex-shrink-0 md:flex-shrink-0 overflow-hidden rounded-lg shadow-lg flex justify-center items-center transition-transform transform hover:scale-105 snap-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

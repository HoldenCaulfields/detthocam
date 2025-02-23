import React from "react";
import ao from "../assets/ao.jpg";
import khanh from "../assets/khanh.jpg";
import khan from "../assets/khan.jpg";

const products = [
    { id: 1, name: "Khanh", description: "Quá trình làm đầy khó khăn", img: khanh },
    { id: 2, name: "Ao", description: "Áo dệt thủ công", img: ao },
    { id: 3, name: "Khăn", description: "Khăn gió", img: khan },
];

const Products = () => {
    return (
        <section id="projects" className="w-full text-center px-6 py-12 bg-gradient-to-r from-gray-50 to-gray-100">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">✨ Sản Phẩm Nổi Bật ✨</h2>

            {/* Mobile Scrollable Wrapper */}
            <div className="md:hidden flex overflow-x-auto space-x-4 snap-x snap-mandatory pb-4 px-4">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-lg flex-none w-72 snap-center transition-transform duration-300 hover:scale-105 hover:bg-yellow-100"
                    >
                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <img 
                            src={product.img} 
                            alt={`${product.name} image`} 
                            className="mt-4 w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-yellow-100 hover:shadow-yellow-400/50"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 mt-3">{product.description}</p>
                        <img 
                            src={product.img} 
                            alt={`${product.name} image`} 
                            className="mt-6 w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;

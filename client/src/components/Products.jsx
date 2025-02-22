import React from "react";
import ao from "../assets/ao.jpg";
import khanh from "../assets/khanh.jpg";
import khan from "../assets/khan.jpg";

const products = [
    { id: 1, name: "Khanh", description: "Quá trình làm đầy khó khăn", img: khanh },
    { id: 2, name: "Ao", description: "Áo dệt thủ công", img: ao },
    { id: 3, name: "Khăn", description: "Khăn gió ", img: khan },
];

const Products = () => {
    return (
        <section id="projects" className="w-full text-center px-6 py-10 bg-gradient-to-r from-grey-50 to-gray-100">
            <h2 className="text-3xl font-semibold">Sản Phẩm</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-yellow-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <img 
                            src={product.img} 
                            alt={product.name} 
                            className="mt-4 w-full h-60 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;

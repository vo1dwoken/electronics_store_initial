import React from 'react';
import { Inertia } from '@inertiajs/inertia';  // Імпортуємо Inertia з правильного місця
import Header from '../Components/Header';  // Імпортуємо Header
import Footer from '../Components/Footer';

const Product = ({ product }) => {
    const defaultImage = '/images/default-noimage.jpg'; // Відносний шлях
    const productImage = product.image.startsWith('http') ? product.image : `/images/products/${product.image}`;

    const handleAddToCart = (e) => {
        e.preventDefault(); // Перешкоджаємо стандартній поведінці форми (перезавантаження сторінки)
        console.log("Adding to cart...");
        try {
            // Викликаємо метод Inertia для додавання товару в кошик без перезавантаження сторінки
            Inertia.post('/cart/add', { product_id: product.id }, {
                onSuccess: () => {
                    console.log("Product added to cart.");
                },
                onError: (error) => {
                    console.error("Error adding to cart:", error);
                },
                preserveState: true,  // Зберігаємо поточний стан сторінки
            });
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <Header page="product" /> {/* Тепер Header має бути правильно імпортований */}

            <main className="px-6 py-8">
                <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg">
                    <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
                    <img
                        src={productImage}
                        alt={product.name}
                        className="w-full h-64 object-contain mb-6 bg-gray-800 rounded-lg"
                    />

                    <p className="text-gray-400 mb-4">Description: {product.description}</p>

                    {product.type && (
                        <p className="text-gray-400 mb-4">Type: {product.type}</p>
                    )}

                    {product.manufacturer && (
                        <p className="text-gray-400 mb-4">Manufacturer: {product.manufacturer}</p>
                    )}

                    <p className="text-gray-400 mb-4">Stock: {product.stock} items</p>

                    {/* Контейнер для ціни та кнопки */}
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-2xl font-bold">Price: ${product.price}</p>
                        <button
                            onClick={handleAddToCart}
                            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </main>

            <Footer page="home" />
        </div>
    );
};

export default Product;

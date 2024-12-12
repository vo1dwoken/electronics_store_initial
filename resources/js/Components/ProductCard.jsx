import React, { useState, useEffect, useRef } from 'react';

const ProductCard = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setShowModal(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleOverlayClick = (e) => {
        // Закриваємо модальне вікно, якщо клік відбувся на фоні
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShowModal(false);
        }
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 cursor-pointer" onClick={handleOpenModal}>
            {/* Картинка продукту */}
            <img
                src={product.image}
                alt={product.name}
                className="bg-gray-600 h-40 mb-4 rounded-md object-contain w-full"
            />
            <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
            <p className="text-gray-400 mb-2">${product.price}</p>
            <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                Buy
            </button>

            {showModal && (
                <div
                    className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onMouseDown={handleOverlayClick} // Відслідковуємо клік на фон
                >
                    <div
                        className="bg-white p-6 rounded-lg w-1/3 relative text-black"
                        ref={modalRef} // Посилання на модальне вікно
                        onMouseDown={(e) => e.stopPropagation()} // Блокуємо поширення події з модального вікна
                        style={{
                            maxHeight: '80vh', // максимальна висота 80% від висоти екрану
                            overflowY: 'auto' // додаємо прокручування, якщо контент більший
                        }}
                    >
                        <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                        {/* Картинка продукту в модальному вікні */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="mb-4 w-full object-contain rounded-lg"
                            style={{
                                maxHeight: '40vh', // максимальна висота картинки 40% від висоти екрану
                                margin: '0 auto', // вирівнюємо по центру
                            }}
                        />
                        <p className="mb-4">Description: {product.description}</p>

                        {/* Додаткові моменти */}
                        {product.category && <p className="mb-4">Category: {product.category}</p>} {/* Додано категорію */}
                        {product.manufacturer && <p className="mb-4">Manufacturer: {product.manufacturer}</p>} {/* Додано виробника */}
                        <p className="mb-4">Stock: {product.stock} items</p> {/* Додано кількість на складі */}

                        <div className="flex justify-between items-center mt-6">
                            <p className="text-2xl font-bold text-black">Price: ${product.price}</p>
                            <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
                                Buy
                            </button>
                        </div>

                        <button
                            className="absolute top-2 right-2 text-black bg-gray-300 hover:bg-gray-400 rounded-full p-3 w-10 h-10 flex items-center justify-center z-50"
                            onClick={(e) => {
                                e.stopPropagation(); // Забороняємо поширення події
                                handleCloseModal(); // Закриваємо модальне вікно
                            }}
                        >
                            <span className="text-xl font-bold">X</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;

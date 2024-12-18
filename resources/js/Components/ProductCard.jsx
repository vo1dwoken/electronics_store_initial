// import React from 'react';
// import { Link } from '@inertiajs/react';

// const ProductCard = ({ product }) => {

//     // Ваше дефолтне зображення
//     const defaultImage = '/images/default-noimage.jpg'; // Використовуємо відносний шлях

//     // Перевірка наявності картинки в продукті, якщо її немає, використовуємо дефолтну
//     const productImage = product.image ? product.image : defaultImage;

//     console.log("Product Image:", productImage);
//     console.log("Full Product Object:", product);

//     return (
//         <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 cursor-pointer flex flex-col h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
//             {/* Картинка продукту */}
//             <Link href={`/products/${product.id}`}>
//                 <img
//                     src={productImage}
//                     alt={product.name}
//                     className="bg-gray-600 h-40 mb-4 rounded-md object-contain w-full"
//                 />
//                 <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
//                 <p className="text-gray-400 mb-2">${product.price}</p>
//             </Link>

//             {/* Заповнювач, щоб кнопки були внизу */}
//             <div className="flex-grow"></div>

//             {/* Контейнер для кнопок з flex-wrap для адаптації */}
// <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between mt-4 gap-2">
//     {/* Кнопка "Description" - прозора зліва */}
//     <Link
//         href={`/products/${product.id}`}
//         className="bg-transparent border border-gray-500 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-white w-full sm:w-auto sm:px-4 sm:py-2"
//     >
//         Description
//     </Link>

//     {/* Кнопка "Buy Now" - темніша справа */}
//     <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full sm:w-auto sm:px-4 sm:py-2">
//         Buy Now
//     </button>
// </div>
//         </div>
//     );
// };

// export default ProductCard;




import React from 'react';
import { Link } from '@inertiajs/react';

const ProductCard = ({ product, onAddToCart }) => {
    console.log("Image URL:", product.image);
    console.log("Full Product Object:", product);
    // Дефолтне зображення
    const defaultImage = '/images/default-noimage.jpg';
    const productImage = product.image.startsWith('http') ? product.image : `/images/products/${product.image}`;


    return (

        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 cursor-pointer flex flex-col h-full max-w-xs w-full">
            {/* Картинка продукту */}
            <Link href={`/products/${product.id}`}>
                <img
                    src={productImage}
                    alt={product.name}
                    className="bg-gray-600 h-40 mb-4 rounded-md object-contain w-full"
                />
                <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-400 mb-2">${product.price}</p>
            </Link>

            {/* Заповнювач для кнопок */}
            <div className="flex-grow"></div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between mt-4 gap-2">
                {/* Кнопка Description */}
                <Link
                    href={`/products/${product.id}`}
                    className="bg-transparent border border-gray-500 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-white w-full sm:w-auto sm:px-4 sm:py-2"
                >
                    Description
                </Link>

                {/* Кнопка Buy Now */}
                <button
                    onClick={() => onAddToCart(product.id)} // Виклик функції
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto sm:px-4 sm:py-2"
                // className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );

};

export default ProductCard;

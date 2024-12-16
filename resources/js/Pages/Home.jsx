import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import ProductCard from '../Components/ProductCard';
import { useRoute } from '../../../vendor/tightenco/ziggy';
import { Link, Head } from '@inertiajs/react';
import { InertiaLink } from "@inertiajs/inertia-react";

const Home = ({ products, categories }) => {
    const [sortOption, setSortOption] = useState('Recommended');
    const [visibleProductsCount, setVisibleProductsCount] = useState(8); // Стан для кількості видимих продуктів
    const [selectedPartTypes, setSelectedPartTypes] = useState([]); // Фільтри по типу компонентів
    const [minPrice, setMinPrice] = useState(0); // Мінімальна ціна
    const [maxPrice, setMaxPrice] = useState(9999); // Максимальна ціна

    // Функція для вибору типів компонентів
    const togglePartType = (category) => {
        setSelectedPartTypes((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category) // Видаляємо, якщо вже вибрано
                : [...prev, category] // Додаємо новий тип
        );
    };

    // Функція для зміни мінімальної ціни
    const handleMinPriceChange = (e) => {
        const value = Number(e.target.value); // Перетворюємо на число
        if (value <= maxPrice) {
            setMinPrice(value); // Оновлюємо мінімальну ціну тільки якщо вона не перевищує максимальну
        }
    };

    // Функція для зміни максимальної ціни
    const handleMaxPriceChange = (e) => {
        const value = Number(e.target.value); // Перетворюємо на число
        if (value >= minPrice) {
            setMaxPrice(value); // Оновлюємо максимальну ціну тільки якщо вона не менша за мінімальну
        }
    };



    // Фільтрація, сортування і обмеження кількості продуктів
    const filteredProducts = () => {
        let result = products;

        // Фільтр за Part type
        if (selectedPartTypes.length > 0) {
            result = result.filter((product) =>
                selectedPartTypes.includes(product.type)
            );
        }

        // Фільтр за ціною
        result = result.filter((product) => product.price >= minPrice && product.price <= maxPrice);

        // Сортування
        if (sortOption === 'Price: Low to High') {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortOption === 'Price: High to Low') {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        // Обмеження кількості
        return result.slice(0, visibleProductsCount);
    };

    const displayedProducts = filteredProducts();

    // Функція для завантаження наступної порції продуктів
    const loadMoreProducts = () => {
        setVisibleProductsCount(visibleProductsCount + 8); // Завантажуємо ще 8 продуктів
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <Head title="Home" />

            <Header page="home" />

            {/* Main Section */}
            <main className="px-6 py-8">
                <h2 className="text-2xl font-bold mb-6">Computer parts</h2>

                {/* Filters and Sorting */}
                <div className="flex justify-between items-start">
                    {/* Filters */}
                    <aside className="w-1/4 bg-gray-900 p-4 rounded-lg mr-6">
                        <h3 className="text-lg font-bold mb-4">Part type</h3>
                        <ul className="text-sm text-gray-400 mb-6">
                            {categories.map((category) => (
                                <li key={category} className="mb-2">
                                    <label className="flex items-center cursor-pointer hover:text-white">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={selectedPartTypes.includes(category)}
                                            onChange={() => togglePartType(category)}
                                        />
                                        {category}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-lg font-bold mb-4">Filter by Price</h3>
                        <div className="mb-6">
                            <label className="text-sm text-gray-400">Min Price: ${minPrice}</label>
                            <input
                                type="range"
                                min="0"
                                max="9999"
                                value={minPrice}
                                onChange={handleMinPriceChange} // Використовуємо оновлену функцію
                                className="w-full"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="text-sm text-gray-400">Max Price: ${maxPrice}</label>
                            <input
                                type="range"
                                min="0"
                                max="9999"
                                value={maxPrice}
                                onChange={handleMaxPriceChange} // Використовуємо оновлену функцію
                                className="w-full"
                            />
                        </div>

                    </aside>

                    {/* Products Section */}
                    <div className="w-3/4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex space-x-4">
                                {['Top rated', 'Bestsellers', 'New arrivals', 'Sale'].map((category, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                            <select
                                className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 pr-8"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="Recommended">Sort by: Recommended</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {displayedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Load More Button */}
                        {displayedProducts.length < products.length && (
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={loadMoreProducts}
                                    className="bg-gray-800 text-gray-400 px-6 py-3 rounded-lg hover:bg-gray-700 hover:text-white"
                                >
                                    Show more
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer page="home" />
        </div>
    );
};

export default Home;

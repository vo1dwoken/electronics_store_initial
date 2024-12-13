import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import ProductCard from '../Components/ProductCard';
import { useRoute } from '../../../vendor/tightenco/ziggy';
import { Link, Head } from '@inertiajs/react';
import { InertiaLink } from "@inertiajs/inertia-react";

const Home = ({ products, categories }) => {
    const route = useRoute();
    const [sortOption, setSortOption] = useState('Recommended');
    const [visibleProductsCount, setVisibleProductsCount] = useState(8); // Стан для кількості видимих продуктів

    // Функція для сортування продуктів
    const sortedProducts = () => {
        if (sortOption === 'Price: Low to High') {
            return [...products].sort((a, b) => a.price - b.price);
        } else if (sortOption === 'Price: High to Low') {
            return [...products].sort((a, b) => b.price - a.price);
        }
        return products; // Якщо "Recommended", просто відображаємо як є
    };

    // Відображаємо лише потрібну кількість продуктів
    const displayedProducts = sortedProducts().slice(0, visibleProductsCount);

    // Функція для завантаження наступної порції продуктів
    const loadMoreProducts = () => {
        setVisibleProductsCount(visibleProductsCount + 8); // Завантажуємо ще 8 продуктів
    };

// Відображення категорій

    return (
        <div className="bg-black text-white min-h-screen">
            <Head title="Home" />

            <Header page="home" />

            {/* Sub Navbar */}
{/*<nav className="flex justify-center space-x-4 py-4 bg-gray-900 text-gray-400 text-sm">*/}
{/*                {categories.map((category, index) => (*/}
{/*                    <Link key={index}*/}
{/*                        // href={`/category/${category}`}*/}
{/*                        href=route('category', {$type})*/}
{/*                        className="hover:text-white transition-colors">*/}
{/*                        {category.charAt(0).toUpperCase() + category.slice(1)}*/}
{/*                    </Link>*/}
{/*                ))}*/}
{/*            </nav>*/}

            <nav className="flex justify-center space-x-4 py-4 bg-gray-900 text-gray-400 text-sm">
        {categories.map((category, index) => (
        <Link
          key={index}
          href={route('category', { type: category })}
          className="btn-indigo-500"
        >
          {category}
        </Link>
      ))}
                <a class="btn-indigo" href={route('foo')}>foo</a>
            </nav>


            {/* Breadcrumbs */}
            <div className="px-6 py-2 text-gray-400 text-sm">
                <span className="hover:text-white cursor-pointer"><Link href={route('about')}>About</Link></span> /
                <span className="text-white"> Shop</span>
            </div>

            {/* Main Section */}
            <main className="px-6 py-8">
                <h2 className="text-2xl font-bold mb-6">Computer parts</h2>

                {/* Categories Filter */}
                <div className="flex gap-4 mb-6">
                    {['Intel', 'Nvidia', 'Asus', 'Gigabyte', 'MSI'].map((category, index) => (
                        <button
                            key={index}
                            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Filters and Sorting */}
                <div className="flex justify-between items-start">
                    {/* Filters */}
                    <aside className="w-1/4 bg-gray-900 p-4 rounded-lg mr-6">
                        <h3 className="text-lg font-bold mb-4">Part type</h3>
                        <ul className="text-sm text-gray-400 mb-6">
                            <li className="mb-2">
                                <span className="cursor-pointer hover:text-white">Motherboards</span> (999)
                            </li>
                            <li className="mb-2">
                                <span className="cursor-pointer hover:text-white">Proccesors</span> (999)
                            </li>
                            <li className="mb-2">
                                <span className="cursor-pointer hover:text-white">Graphic cards</span> (999)
                            </li>
                            <li className="mb-2">
                                <span className="cursor-pointer hover:text-white">Power supplies</span> (999)
                            </li>
                        </ul>
                        <h3 className="text-lg font-bold mb-4">Filter by</h3>
                        <ul className="text-sm text-gray-400">
                            <li className="mb-2">
                                <span className="cursor-pointer hover:text-white">Price</span> (0-9999)
                            </li>
                            <li className="mb-2">
                                <span className="cursor-pointer hover:text-white">Manufacturers</span> (30)
                            </li>
                        </ul>
                    </aside>

                    {/* Products Section */}
                    <div className="w-3/4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex space-x-4">
                                {['Top rated', 'Bestsellers', 'New arrivals', 'Sale'].map(
                                    (category, index) => (
                                        <button
                                            key={index}
                                            className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white"
                                        >
                                            {category}
                                        </button>
                                    )
                                )}
                            </div>
                            <select
                                className="bg-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 pr-8"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option>Sort by: Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
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

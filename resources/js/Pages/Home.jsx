
import React from 'react';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import { Link, Head } from '@inertiajs/react';

const Home = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Head title="Home" />

            <Header page="home" />

            {/* Sub Navbar */}
            <nav className="flex justify-center space-x-4 py-4 bg-gray-900 text-gray-400 text-sm">
                {['Processors', 'Motherboards', 'Memory', 'Storage', 'Graphics', 'Power Supplies'].map((item, index) => (
                    <Link
                        key={index}
                        href="#"
                        className="hover:text-white transition-colors"
                    >
                        {item}
                    </Link>
                ))}
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
                            >
                                <option>Sort by: Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {Array(8)
                                .fill(0)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
                                    >
                                        <div className="bg-gray-600 h-40 mb-4 rounded-md"></div>
                                        <h4 className="text-lg font-semibold mb-2">
                                            Product Name
                                        </h4>
                                        <p className="text-gray-400 mb-2">$24</p>
                                        <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                                            Buy
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer page="home" />

        </div>
    );
};

export default Home;

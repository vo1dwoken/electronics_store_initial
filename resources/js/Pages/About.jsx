import React from 'react';
import { Link, Head } from '@inertiajs/react';

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen p-6">
            <Head title="About Us" />
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-3xl font-bold">eKomponenty</h1>
                <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
                    Authenticate
                </button>
            </header>

            <main>
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">
                        Find, compare and buy computer parts from top
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Shop from a wide range of computer parts and accessories
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href={route('register')}
                            className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200"
                        >
                            Register
                        </Link>
// fdsfsdf
                        <Link
                            href={route('login')}
                            className="bg-black border-2 border-white font-semibold text-white px-4 py-2 rounded-md hover:bg-gray-800"
                        >
                            Log in
                        </Link>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="flex justify-center gap-16 text-center mb-16">
                    <div>
                        <h3 className="text-2xl font-bold">10K+</h3>
                        <p className="text-gray-400">Products</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">500</h3>
                        <p className="text-gray-400">Manufacturers</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">1M+</h3>
                        <p className="text-gray-400">Active Users</p>
                    </div>
                </section>

                {/* Top-rated products */}
                <section>
                    <h3 className="text-xl font-bold mb-4">Top-rated products this month</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition"
                                >
                                    <div className="h-24 bg-gray-600 rounded-lg mb-4"></div>
                                    <p className="font-semibold mb-2">Product {index + 1}</p>
                                    <button className="bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-600">
                                        Add to cart
                                    </button>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="mt-16 bg-gray-900 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        Subscribe to our newsletter and stay up-to-date
                    </h3>
                    <p className="text-gray-400 mb-4">
                        Stay updated with the latest tech releases and exclusive deals!
                    </p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-2/3 md:w-1/3 p-3 rounded-l-lg"
                        />
                        <button className="bg-red-600 px-6 py-3 rounded-r-lg text-white hover:bg-red-500">
                            Subscribe
                        </button>
                    </div>
                </section>
            </main>

            <footer className="mt-16 flex justify-between items-center text-gray-400">
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white">
                        Instagram
                    </a>
                    <a href="#" className="hover:text-white">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-white">
                        Discord
                    </a>
                </div>
                <p>&copy; eKomponenty, 2024</p>
            </footer>
        </div>
    );
};

export default About;

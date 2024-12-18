import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react'; // Head вже імпортовано разом із Link
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";


const About = ({ products }) => { // Передаємо продукти через пропси

    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const onAddToCart = (product) => {
        // Логіка додавання товару в кошик (можна тут використовувати Redux, Context API, або зберігати в localStorage)
        console.log("Added to cart:", product);
    };

    const handleSubscribe = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setSuccessMessage('You have successfully subscribed to our newsletter!');
            setErrorMessage('');
            setEmail('');
        } else {
            setErrorMessage('Please enter a valid email address.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="bg-black text-white min-h-screen p-6">
            <Head title="About Us" />

            <Header page="about" />

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
                        <h3 className="text-2xl font-bold">100+</h3>
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
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={onAddToCart} // Передаємо функцію як пропс
                            />
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
                    <div className="flex flex-col items-center">
                        <div className="flex w-full md:w-2/3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email here"
                                className="w-full p-3 rounded-l-lg text-black"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-red-600 px-6 py-3 rounded-r-lg text-white hover:bg-red-500"
                            >
                                Subscribe
                            </button>
                        </div>
                        {successMessage && (
                            <p className="text-green-500 mt-4">{successMessage}</p>
                        )}
                        {errorMessage && (
                            <p className="text-red-500 mt-4">{errorMessage}</p>
                        )}
                    </div>
                </section>
            </main>
            <Footer page="about" />
        </div>
    );
};

export default About;

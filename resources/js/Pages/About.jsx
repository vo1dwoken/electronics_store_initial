
import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const About = () => {
    return (
        <div className="text-center p-6">
            {/* Set the page title */}
            <Head title="About Us - Computer Parts Store" />

            <h1 className="text-3xl font-bold mt-6">About Us</h1>
            <p className="mt-4 text-lg">
                Welcome to our Computer Parts Store! We are dedicated to providing the best components for building and upgrading your PC.
            </p>
            <p className="mt-4 text-lg">
                Whether you're a gamer, a developer, or just someone who loves tinkering with technology, we have everything you need.
            </p>
            <p className="mt-4 text-lg">
                Our mission is to offer top-quality products at competitive prices, paired with excellent customer service.
            </p>
        </div>
    );
};

export default About;

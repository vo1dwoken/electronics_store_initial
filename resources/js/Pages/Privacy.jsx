import React from 'react';
import { Head } from '@inertiajs/react';
import Footer from '../Components/Footer';
import Header from "../Components/Header";

const Privacy = () => {
    return (
        <div className="bg-black text-white min-h-screen p-6">
            <Head title="Privacy" />

            <Header page="privacy" />
            <main>
                {/* Privacy Policy Block */}
                <section className="bg-gray-800 p-8 rounded-lg shadow-md mt-8 max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-lg mb-4">
                        At eKomponenty, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your information when you interact with our website or use our services.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
                    <p className="text-lg mb-4">
                        When you interact with eKomponenty, we may collect the following information:
                    </p>
                    <ul className="list-disc pl-8 mb-4">
                        <li>Personal information such as your name, email address, phone number, and physical address.</li>
                        <li>Account credentials, including username and password, to provide you with a personalized experience.</li>
                        <li>Order history and payment details to facilitate your purchases securely.</li>
                        <li>Technical data such as IP address, browser type, and device information for site analytics and security.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
                    <p className="text-lg mb-4">
                        We use your information for the following purposes:
                    </p>
                    <ul className="list-disc pl-8 mb-4">
                        <li>To process and fulfill your orders efficiently.</li>
                        <li>To communicate with you regarding your orders, updates, and promotional offers.</li>
                        <li>To improve our website's functionality and enhance your browsing experience.</li>
                        <li>To ensure the security of our services and protect against unauthorized access.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">How We Protect Your Data</h2>
                    <p className="text-lg mb-4">
                        We implement industry-standard security measures to protect your personal information. This includes encrypted payment processing, secure servers, and restricted access to sensitive data.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
                    <p className="text-lg mb-4">
                        You have the right to access, modify, or delete your personal information at any time. If you wish to exercise these rights, please contact our support team for assistance.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Services</h2>
                    <p className="text-lg mb-4">
                        We may share your information with trusted third-party services to process payments, deliver orders, or analyze website traffic. These third parties are obligated to handle your data securely and in compliance with applicable laws.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to this Privacy Policy</h2>
                    <p className="text-lg mb-4">
                        We reserve the right to update this privacy policy as needed to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this page periodically to stay informed about how we handle your information.
                    </p>
                    <p className="text-lg mb-4">
                        Thank you for trusting eKomponenty. Your privacy is our priority, and we are committed to ensuring your satisfaction with our services.
                    </p>
                </section>
            </main>
            <Footer page="about" />
        </div>
    );
};

export default Privacy;

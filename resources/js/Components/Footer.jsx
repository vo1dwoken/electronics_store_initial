import React from 'react';

const Footer = ({ page }) => {
    const footerClasses = page === 'home'
        ? "mt-16 bg-gray-900 text-gray-400 py-6 px-6"
        : "";

    return (
        <footer className={footerClasses}>
            <div className={page === 'home' ? 'flex justify-between items-center' : 'mt-16 flex justify-between items-center text-gray-400'}>
                <div className={page === 'home' ? 'flex space-x-6' : 'flex justify-between flex gap-4'}>
                    <a href="/privacy" className="hover:text-white pr-6">
                        Privacy
                    </a>
                    <a href="/about" className="hover:text-white pr-6">
                        O nas
                    </a>
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
            </div>
        </footer>
    );
};

export default Footer;
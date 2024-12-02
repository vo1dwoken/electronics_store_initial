import React from 'react';

const Footer = ({ pageStyle }) => {
    const footerClasses = pageStyle === 'home'
        ? "mt-16 bg-gray-900 text-gray-400 py-6 px-6"
        : "";

    return (
        <footer className={footerClasses}>
            <div className={pageStyle === 'home' ? 'flex justify-between items-center' : 'mt-16 flex justify-between items-center text-gray-400'}>
                <div className={pageStyle === 'home' ? 'flex space-x-6' : 'flex justify-between flex gap-4'}>
                    <a href="#" className="hover:text-white pr-6">
                        Privacy
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


// const Footer = () => {
//     return (
//         <footer className="mt-16 flex justify-between items-center text-gray-400">
//             <div className="flex gap-4">
//                 <a href="#" className="hover:text-white">Privacy</a>
//                 <a href="#" className="hover:text-white">Instagram</a>
//                 <a href="#" className="hover:text-white">Twitter</a>
//                 <a href="#" className="hover:text-white">Discord</a>
//             </div>
//             <p>&copy; eKomponenty, 2024</p>
//         </footer>
//     );
// };

// export default Footer;


/* <footer className="mt-16 bg-gray-900 text-gray-400 py-6 px-6">
    <div className="flex justify-between items-center">
        <div className="flex space-x-6">
            <a href="#" className="hover:text-white pr-6">
                Privacy
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
        <p>&copy; E-componenty 2024</p>
    </div>
</footer> */
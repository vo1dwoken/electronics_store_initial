import { Link } from '@inertiajs/react';

const Header = ({ page }) => {

    if (page === "home") {
        return (
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                <Link to="/" className="text-xl font-bold">
                    E-componenty
                </Link>

                <div className="flex items-center gap-6">
                    <input
                        type="text"
                        placeholder="Search components"
                        className="px-4 py-2 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                    <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
                        View Cart
                    </button>
                </div>
            </header>
        );
    }

    if (page === "about") {
        return (
            <header className="flex justify-between items-center mb-12">
                <Link href={route('home')} className="text-3xl font-bold">
                    E-componenty
                </Link>
                <Link
                    href={route('register')}
                    className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                >
                    Register
                </Link>
            </header>
        );
    }

    if (page === "privacy") {
        return (
            <header className="flex justify-between items-center mb-12">
                <Link href={route('home')} className="text-3xl font-bold">
                    E-componenty
                </Link>
                <Link
                    href={route('register')}
                    className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                >
                    Register
                </Link>
            </header>
        );
    }



    return null;
};

export default Header;


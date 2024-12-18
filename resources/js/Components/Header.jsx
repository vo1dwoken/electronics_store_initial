import { Link } from '@inertiajs/react';

const Header = ({ page, searchQuery, setSearchQuery, toggleSidebar }) => {
    if (page === "home") {
        return (
            <header>
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                    <Link href={route('home')} className="text-xl font-bold">
                        E-componenty
                    </Link>

                    <div className="flex items-center gap-6">
                        <input
                            type="text"
                            placeholder="Search components"
                            className="px-4 py-2 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            onClick={toggleSidebar} // Викликаємо toggleSidebar при натисканні
                            className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                            View Cart
                        </button>
                    </div>
                </div>
                {/* Інші частини Header */}
            </header>
        );
    }

    // Інші варіанти для "product", "about", "privacy"
    // вони не змінилися
    if (page === "product") {
        return (
            <header>
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                    <div className="flex items-center">
                        <Link href={route('home')} className="text-xl font-bold">
                            E-componenty
                        </Link>
                        <Link href={route('home')} className="flex items-center text-xl font-bold ml-2">
                            <span className="text-2xl">/ &#8701;</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <input
                            type="text"
                            placeholder="Search components"
                            className="px-4 py-2 rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                            value={searchQuery} // Передаємо значення пошуку
                            onChange={(e) => setSearchQuery(e.target.value)} // Оновлюємо searchQuery
                        />
                        <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
                            View Cart
                        </button>
                    </div>
                </div>
                <div className="px-6 py-2 text-gray-400 text-sm bg-gray-800">
                    <span className="hover:text-white cursor-pointer"><Link href={route('about')}>Home</Link></span> /
                    <span className="hover:text-white cursor-pointer"><Link href={route('home')}> Shop </Link></span>
                    <span className="text-white">/ Product</span>
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
            <header>
                <div className="flex justify-between items-center mb-12">
                    <Link href={route('home')} className="text-3xl font-bold">
                        E-componenty
                    </Link>
                    <Link
                        href={route('register')}
                        className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
                    >
                        Register
                    </Link>
                </div>
                <div className="px-6 py-2 text-gray-400 text-sm bg-gray-800 rounded">
                    <span className="hover:text-white cursor-pointer"><Link href={route('about')}>Home</Link></span> /
                    <span className="hover:text-white cursor-pointer"><Link href={route('home')}> Shop </Link></span>
                    <span className="text-white">/ Privacy</span>
                </div>
            </header>
        );
    }

    return null;
};

export default Header;

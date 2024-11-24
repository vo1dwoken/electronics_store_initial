
import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Dropdown from '../Components/Dropdown';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Your page title</title>
                <meta name="description" content="Your page description" />
            </Head>
            <div className='text-center'>
                <h1 className="text-sky-400">Welcome to the Store</h1>
                <p>This is the home page of your computer parts store.</p>
                <Link href="/products" className="btn btn-primary">
                    View Products
                </Link>
            </div>
            {/* Login and Register Links */}
            <div className="mt-8">
                <Link
                    href={route('login')}
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Log in
                </Link>
                <Link
                    href={route('register')}
                    className="inline-block ml-4 px-4 py-2 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Register
                </Link>
            </div>
            <p>This is the home page of your computer parts store.</p>
            <Link href="/products" className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-md text-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                View Products
            </Link>
        </div>

            <div className="mt-8 flex justify-center">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Open Menu
                        </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Link href="/profile">Profile</Dropdown.Link>
                        <Dropdown.Link href="/settings">Settings</Dropdown.Link>
                        <Dropdown.Link href="/logout">Logout</Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
};

export default Home;

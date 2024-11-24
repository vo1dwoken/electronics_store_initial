
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

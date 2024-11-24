
import React from 'react';
import { Link, Head } from '@inertiajs/react';

const Home = () => {
    return (
        <div>
           <Head>
            <title>Your page title</title>
            <meta name="description" content="Your page description" />
            </Head>
        <h1>Welcome to the Store</h1>
            <p>This is the home page of your computer parts store.</p>
            <Link href="/products" className="btn btn-primary">
                View Products
            </Link>
        </div>
    );
};

export default Home;

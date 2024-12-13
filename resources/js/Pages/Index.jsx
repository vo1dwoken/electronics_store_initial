import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { useRoute } from '../../../vendor/tightenco/ziggy';
import { Link } from '@inertiajs/react';

const Products = () => {
    const route = useRoute();
    const { products, filters } = usePage().props;
    const [filterParams, setFilterParams] = useState(filters);

    const handleFilterChange = (e) => {
        setFilterParams({
            ...filterParams,
            [e.target.name]: e.target.value,
        });
    };

    const applyFilters = () => {
        Inertia.get('/products', filterParams);
    };

    return (
        <div>
            <h1>Product Listing</h1>

            <div className="filters">
                <label>
                    Type:
                    <select
                        name="type"
                        value={filterParams.type || ''}
                        onChange={handleFilterChange}
                    >
                        <option value="">All</option>
                        <option value="CPU">CPU</option>
                        <option value="GPU">GPU</option>
                        {/* Add more types as needed */}
                    </select>
                </label>

                <label>
                    Min Price:
                    <input
                        type="number"
                        name="price_min"
                        value={filterParams.price_min || ''}
                        onChange={handleFilterChange}
                    />
                </label>

                <label>
                    Max Price:
                    <input
                        type="number"
                        name="price_max"
                        value={filterParams.price_max || ''}
                        onChange={handleFilterChange}
                    />
                </label>

                <button onClick={applyFilters}>Apply Filters</button>
            </div>

            <div className="product-list">
                {products.data.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div>
                {products.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={link.active ? 'font-bold' : ''}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;

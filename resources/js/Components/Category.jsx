import React from '@inertiajs/react';

const Category = ({ products, type }) => {
    return (
        <div className="container mt-5">
            <h4>Products in "{type.charAt(0).toUpperCase() + type.slice(1)}"</h4>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}₴</p>
                                    <a
                                        href={`/products/${product.id}`}
                                        className="btn btn-primary"
                                    >
                                        View Product
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Category;

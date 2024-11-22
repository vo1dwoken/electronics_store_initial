import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Categories = ({ categories }) => {
  const handleCategoryClick = (categoryId) => {
    Inertia.get(`/categories/${categoryId}`);
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;


import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Filters = ({ filters }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    manufacturer: '',
    price: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    Inertia.get('/products', selectedFilters);
  };

  return (
    <div>
      <h2>Filters</h2>
      <select name="manufacturer" onChange={handleFilterChange}>
        <option value="">Select Manufacturer</option>
        {filters.manufacturers.map((manufacturer) => (
          <option key={manufacturer.id} value={manufacturer.id}>
            {manufacturer.name}
          </option>
        ))}
      </select>
      <select name="price" onChange={handleFilterChange}>
        <option value="">Select Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;

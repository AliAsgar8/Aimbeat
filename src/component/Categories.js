import React from 'react';
import Data from '../api/Data.json';
import Card from './Card';

const Categories = ({ selectedCategories }) => {
    const filteredProducts = Data.Products.filter(product => {
        const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        return isCategoryMatch;
    });

    return (
        <div className="flex-1">
            <div className="all-filter flex flex-col gap-2 md:flex-row items-center justify-between pb-8">
                <div className="menu-img flex items-center gap-3">
                    <p className="text-sm sm:text-[14px] text-gray-500">
                        Showing {filteredProducts.length} results
                    </p>
                </div>

                <div className="filter flex flex-col sm:flex-row gap-5">
                    <select className='border-2 border-gray-300 text-sm px-2 py-2 sm:py-0'>
                        <option value="relevant">Sort by : Releavant</option>
                        <option value="low-high">Sort by : Low to High</option>
                        <option value="High-low">Sort by : High to Low</option>
                    </select>
                    <button className="bg-black text-white px-8 py-2 rounded-md">Filter</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {filteredProducts.map((product) => (
                    <Card
                        key={product._id}
                        name={product.name}
                        id={product._id}
                        image={require(`../assets/images/png/${product.image}`)}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;

import React, { useState } from 'react';
import Categories from './Categories';
import arrow from '../assets/images/png/down-arrow.png';

const Collections = () => {
    const [min, setMin] = useState(95);
    const [max, setMax] = useState(2500);
    const [showFilter, setShowFilter] = useState(true);
    const [category, setCategory] = useState([]);

    const handleCategoryToggle = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const handleShowFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleReset = () => {
        setMin(95);
        setMax(2500);
        setCategory([]);
    };

    return (
        <div className="collections flex flex-col md:flex-row gap-4 pt-5 px-10 md:px-14 lg:px-20">
            {/* Filter Option Left side */}
            <div className="min-w-60">
                <div className="left-sidebar pb-3 flex items-center gap-2">
                    <div>
                        <h1 className="text-2xl font-bold">Shop Grid</h1>
                        <p className="text-gray-400">Home Shop Grid</p>
                    </div>
                    <img
                        src={arrow}
                        alt="title"
                        className={`h-5 w-5 md:hidden ${showFilter ? '' : 'rotate-[270deg]'}`}
                        onClick={handleShowFilter}
                    />
                </div>
                <div className={`p-4 max-w-sm mx-auto ${showFilter ? '' : 'hidden'} md:block`}>
                    <h2 className="text-lg font-semibold mb-4">Price Filter</h2>
                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            value={min}
                            onChange={(e) => setMin(Number(e.target.value))}
                            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
                        />
                        <input
                            type="range"
                            min="0"
                            max="2500"
                            value={max}
                            onChange={(e) => setMax(Number(e.target.value))}
                            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
                        />
                        <div className="h-2 bg-gray-200 rounded">
                            <div
                                className="h-2 bg-blue-500 rounded"
                                style={{
                                    marginLeft: `${(min / 2500) * 100}%`,
                                    width: `${((max - min) / 2500) * 100}%`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="mt-2 text-gray-700">
                            ${min} - ${max}
                        </div>
                        <button
                            onClick={handleReset}
                            className="mt-4 px-2 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                <div className={`categories section border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} md:block`}>
                    <p className="text-sm font-medium mb-3">Product Status</p>
                    <div className="flex flex-col text-sm text-gray-700">
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3"/> On scale
                        </label>
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3"  />In stock
                        </label>
                    </div>
                </div>

                <div className={`categories section border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} md:block`}>
                    <p className="text-sm font-medium mb-3">CATEGORIES</p>
                    <div className="flex flex-col text-sm text-gray-700">
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3" value="Men" onChange={handleCategoryToggle} /> Men
                        </label>
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3" value="Women" onChange={handleCategoryToggle} /> Women
                        </label>
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3" value="Kids" onChange={handleCategoryToggle} /> Kids
                        </label>
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3" value="Shoes" onChange={handleCategoryToggle} /> Shoes
                        </label>
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3" value="Bags" onChange={handleCategoryToggle} /> Bags
                        </label>
                        <label className="flex gap-3 py-2">
                            <input type="checkbox" className="w-3" value="Watch" onChange={handleCategoryToggle} /> Watch
                        </label>
                    </div>
                </div>
                <div className={`categories section border border-gray-300 pl-5 py-3 mt-3 ${showFilter ? '' : 'hidden'} md:block`}>
                    <p className="text-sm font-medium mb-3">Filter By Color</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-700 ">

                        <div className='flex items-center gap-2'>
                            <p className='bg-black h-4 w-4 rounded-full'></p>
                            <p>Black</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className='bg-blue-600 h-4 w-4 rounded-full'></p>
                            <p>Blue</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right Side */}
            <Categories
                selectedCategories={category}

            />
        </div>
    );
};

export default Collections;

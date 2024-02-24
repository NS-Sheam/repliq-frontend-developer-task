import { useState } from 'react';
import SearchBar from './SearchBar';
import SlicedCategories from './SlicedCategories';
import AllCategories from './AllCategories';

const SearchSection = ({ setBgBlur }) => {
    const [visibleCategories, setVisibleCategories] = useState(false)
    const categories = [
        "All Categories", "Electronics", "Home and Lifestyle", "Men Fashion", "Women Fashion", "Clothes", "Shoes", "Books", "Home & Kitchen", "Beauty & Health", "Sports", "Toys", "Grocery", "Stationery", "Others"
    ]
    return (
        <>
            <SearchBar />
            <SlicedCategories categories={categories} setVisibleCategories={setVisibleCategories} setBgBlur={setBgBlur} />

            <div
                className={`${visibleCategories ? "" : "hidden"} absolute bg-white right-0 top-0 h-screen px-4 z-10`}
            >
                <AllCategories categories={categories} setVisibleCategories={setVisibleCategories} setBgBlur={setBgBlur} />
            </div>
        </>
    );
};

export default SearchSection;
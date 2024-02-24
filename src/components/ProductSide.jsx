
import SearchBar from "./SearchBar";
import { useState } from "react";
import AllCategories from "./AllCategories";
import ProductCards from "./ProductCards";
import SlicedCategories from "./SlicedCategories";
const ProductSide = () => {
    const [visibleCategories, setVisibleCategories] = useState(false)
    const categories = [
        "All Categories", "Electronics", "Home and Lifestyle", "Men Fashion", "Women Fashion", "Clothes", "Shoes", "Books", "Home & Kitchen", "Beauty & Health", "Sports", "Toys", "Grocery", "Stationery", "Others"
    ]
    return (
        <div
            className=""
        >
            <SearchBar />
            <SlicedCategories categories={categories} setVisibleCategories={setVisibleCategories} />

            <div
                className={`${visibleCategories ? "" : "hidden"} absolute bg-white right-0 top-0 h-screen px-4 z-10`}
            >
                <AllCategories categories={categories} setVisibleCategories={setVisibleCategories} />
            </div>
            <ProductCards />


        </div>
    );
};

export default ProductSide;
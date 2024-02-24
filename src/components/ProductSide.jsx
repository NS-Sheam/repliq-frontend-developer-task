import { Button, Flex } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AllCategories from "./AllCategories";
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
            <Flex
                justify="center"
                align="center"
                gap={16}
                className="relative"

            >
                {
                    categories.slice(0, 4).map((category, index) => {
                        return (
                            <div
                                key={index}>
                                <Button

                                >{category}</Button>
                            </div>
                        )
                    })
                }
                <div>
                    <BsThreeDotsVertical
                        onClick={() => setVisibleCategories(true)}
                        className="cursor-pointer"
                    />
                </div>
            </Flex>

            <div
                className={`${visibleCategories ? "" : "hidden"} absolute bg-white right-0 top-0 h-screen px-4`}
            >
                <AllCategories categories={categories} setVisibleCategories={setVisibleCategories} />
            </div>

        </div>
    );
};

export default ProductSide;
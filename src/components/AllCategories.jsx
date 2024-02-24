import { Button, Flex } from "antd";

import { ImCross } from "react-icons/im";

const AllCategories = ({ categories, setVisibleCategories }) => {
    return (
        <div>
            <ImCross
                onClick={() => setVisibleCategories(false)}
                className="absolute cursor-pointer left-0 md:-left-7 top-4 text-black text-lg"
            />
            <h3
                className="text-lg font-semibold text-center py-3"
            >Categories</h3>
            <Flex
                justify="start"
                align="center"
                wrap="wrap"
                gap={6}
            >
                {
                    categories.map((category, index) => {
                        return (
                            <div
                                key={index}>
                                <Button

                                >{category}</Button>
                            </div>
                        )
                    })
                }
            </Flex>
        </div>
    );
};

export default AllCategories;
import { Button, Flex } from 'antd';
import { BsThreeDotsVertical } from 'react-icons/bs';

const SlicedCategories = ({ categories, setVisibleCategories, setBgBlur }) => {
    return (
        <Flex
            justify="end"
            align="center"
            wrap="wrap"
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
                    onClick={() => {
                        setVisibleCategories(true)
                        setBgBlur(true)
                    }}
                    className="cursor-pointer"
                />
            </div>
        </Flex>
    );
};

export default SlicedCategories;
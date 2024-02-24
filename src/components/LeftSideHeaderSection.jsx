import { Button, Col, Flex, Row } from 'antd';
import { FaPlus, FaUserAlt } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlNote } from 'react-icons/sl';
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

const LeftSideHeaderSection = () => {
    const menuItems = [
        {
            title: "Note",
            icon: <SlNote />,
        },
        {
            title: "Shipping",
            icon: <LiaShippingFastSolid />,
        },
        {
            title: "Hold Order",
            icon: <HiOutlineArrowPathRoundedSquare />,
        },
        {
            title: "New Item",
            icon: <FaPlus
                className="p-1 text-[#f0f3fc] rounded-full bg-[#364ea3]"
            />,
        }

    ]
    return (
        <>
            <Flex
                justify="start"
                align="center"
                wrap="wrap"
                gap={6}
            >
                <RxHamburgerMenu
                    className="text-2xl"
                />
                {
                    menuItems.map((item, index) => {
                        return (
                            <div
                                key={index}>
                                <Button
                                    style={{
                                        backgroundColor: "#f0f3fc",
                                        color: "#364ea3"
                                    }}
                                    size="large"
                                    className="font-semibold flex items-center justify-center gap-2"

                                    icon={item.icon}
                                >{item.title}</Button>
                            </div>
                        )
                    })
                }
            </Flex>
            <Row
                justify="space-between"
                align="center"
                className="py-3 my-2 px-2 bg-[#f0f3fc]"
            >
                <Col
                    span={12}
                    className="flex items-center gap-2"
                >
                    <FaUserAlt
                        style={{
                            border: "1px solid #364ea3"
                        }}
                        className="text-3xl p-1 text-[#364ea3] rounded-full bg-[#f0f3fc] " />
                    <span
                        className="text-lg font-semibold text-[#364ea3]"
                    >Steve Jobs</span>
                </Col>
                <Col
                    span={12}
                    className="flex justify-end items-center "
                >
                    <FaPlus
                        style={{
                            border: "1px solid #364ea3"
                        }}
                        className="text-2xl p-1 text-[#364ea3] rounded-full bg-[#f0f3fc] " />
                </Col>
            </Row>
        </>
    );
};

export default LeftSideHeaderSection;
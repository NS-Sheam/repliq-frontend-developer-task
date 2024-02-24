import { Button, Flex } from "antd";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHandBackFist } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { TbDiscountCheck } from "react-icons/tb";

const FooterSection = () => {

    const footerMenuItems = [
        {
            title: "Cancel",
            icon: <ImCross />,
        },
        {
            title: "Hold",
            icon: < FaHandBackFist />,
        },
        {
            title: "Discount",
            icon: <TbDiscountCheck />,
        },
        {
            title: "Pay Now",
            icon: <FaMoneyBillWave />,
        }

    ]

    return (
        <Flex
            justify="start"
            align="center"
            wrap="wrap"
            gap={6}
        >
            {
                footerMenuItems.map((item, index) => {
                    return (
                        <div
                            key={index}>
                            <Button
                                size="large"
                                style={{
                                    backgroundColor: item.title === "Cancel" ? "#fcbab6" : "#f0f3fc",
                                    color: item.title === "Cancel" ? "#fc4c3f" : "#364ea3"
                                }}
                                className="font-semibold flex items-center justify-center gap-2 text-xl"

                                icon={item.icon}
                            >{item.title}</Button>
                        </div>
                    )
                })
            }
        </Flex>
    );
};

export default FooterSection;
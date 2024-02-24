import { Col, Divider, Row } from "antd";
import { useSelector } from "react-redux";

const TotalSection = () => {
    const { products } = useSelector(state => state.product);

    return (
        <>
            <Row
                className='w-1/2 ms-auto mt-4'
            >
                <Divider
                    style={{
                        margin: "10px 0",
                    }}
                />
                <Col span={24}
                    className="flex items-center justify-between"
                >
                    <p>Sub Total</p>
                    <p
                        className='text-xl font-semibold'
                    >$ &nbsp;
                        {
                            products.reduce((acc, item) => {
                                return acc + (item.price * item.quantity)
                            }, 0).toFixed(2)
                        }

                    </p>
                </Col>
                <Divider
                    style={{
                        margin: "10px 0",
                    }}
                />
                <Col span={24}
                    className="flex items-center justify-between"
                >
                    <p>TAX</p>
                    <p
                        className='text-xl font-semibold'
                    >$ 25.50</p>
                </Col>
                <Divider
                    style={{
                        margin: "10px 0",
                    }}
                />
                <Col span={24}
                    className="flex items-center justify-between"
                >
                    <p>Shipping</p>
                    <p
                        className='text-xl font-semibold'
                    >$ 5.50</p>
                </Col>
                <Divider
                    style={{
                        margin: "10px 0",
                    }}
                />
                <Col span={24}
                    className="flex items-center justify-between"
                >
                    <p
                        className="font-semibold text-[#364ea3]"
                    >Discount on Cart</p>
                    <p
                        className='text-xl font-semibold'
                    >$ 10.00</p>
                </Col>
            </Row>
            <Row
                justify="space-between"
                align="center"
                className="py-3 my-2 px-2 bg-[#f0f3fc] text-[#364ea3]"
            >
                <Col
                    span={12}
                    className="flex items-center gap-2"
                >
                    <p>Product count ({products?.length})</p>
                </Col>
                <Col
                    span={12}
                    className="flex justify-end items-center "
                >
                    <p
                        className='text-xl font-semibold flex items-center gap-3'
                    >
                        <span>Total </span>
                        <span>
                            $ &nbsp;
                            {
                                (products.reduce((acc, item) => {
                                    return acc + (item.price * item.quantity)
                                }, 0) + 25.50 + 5.50 - 10.00).toFixed(2)
                            }
                        </span>
                    </p>

                </Col>
            </Row>
        </>
    );
};

export default TotalSection;
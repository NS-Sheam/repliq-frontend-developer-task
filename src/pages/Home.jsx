import { Col, Row } from "antd";
import SearchSection from "../components/SearchSection";
import TableSection from "../components/TableSection";
import ProductCards from "../components/ProductCards";
import LeftSideHeaderSection from "../components/LeftSideHeaderSection";
import { useState } from "react";

const Home = () => {
    const [bgBlur, setBgBlur] = useState(false)
    return (
        <>
            {
                bgBlur && <div
                    className="absolute z-10 top-0 right-0 bg-black bg-opacity-50 h-screen w-screen"
                ></div>
            }
            <Row
                gutter={[16, 16]}
                className="inner-container py-4"
                justify="center" align="start" style={{ height: "100%" }}>

                <Col
                    span={24}
                    md={{ span: 12 }}
                >
                    <LeftSideHeaderSection />
                </Col>
                <Col
                    span={24}
                    md={{ span: 12 }}
                >
                    <SearchSection setBgBlur={setBgBlur} />
                </Col>
                <Col
                    span={24}
                    order={4}
                    md={{ span: 12, order: 3 }}

                >
                    <TableSection />
                </Col>
                <Col
                    order={3}
                    span={24}
                    md={{ span: 12, order: 4 }}
                >
                    <ProductCards />
                </Col>

            </Row>
        </>
    );
};

export default Home;
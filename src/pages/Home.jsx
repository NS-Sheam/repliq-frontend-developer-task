import { Col, Row } from "antd";
import ProductSide from "../components/ProductSide";
import LeftContainer from "../components/LeftContainer";

const Home = () => {
    return (
        <Row
            gutter={[16, 16]}
            className="inner-container py-4"
            justify="center" align="start" style={{ height: "100%" }}>
            <Col
                span={24}
                order={2}
                md={{ span: 12, order: 1 }}
            >
                <LeftContainer />
            </Col>
            <Col
                order={1}
                span={24}
                md={{ span: 12, order: 2 }}
            >
                <ProductSide />
            </Col>
        </Row>
    );
};

export default Home;
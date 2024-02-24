import { Col, Row } from "antd";
import ProductSide from "../components/ProductSide";

const Home = () => {
    return (
        <Row
            className="inner-container py-4"
            justify="center" align="middle" style={{ height: "100%" }}>
            <Col
                span={24}
                md={{ span: 12 }}
            >
                <h1 style={{ textAlign: "center" }}>Welcome to the Home Page</h1>
            </Col>
            <Col
                span={24}
                md={{ span: 12 }}
            >
                <ProductSide />
            </Col>
        </Row>
    );
};

export default Home;
import { Col, Row } from "antd";

const Home = () => {
    return (
        <Row justify="center" align="middle" style={{ height: "100%" }}>
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
                <h1 style={{ textAlign: "center" }}>Welcome to the Home Page</h1>
            </Col>
        </Row>
    );
};

export default Home;
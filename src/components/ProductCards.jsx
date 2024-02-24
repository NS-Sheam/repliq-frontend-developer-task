import { Card, Col, Divider, Row } from 'antd';
import { useEffect, useState } from 'react';

const ProductCards = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("./productData.json")
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [products])
    return (
        <Row
            className="mt-4"
            gutter={[16, 16]}
        >
            {
                products.map((product, index) => {
                    return (
                        <Col key={index} span={12} md={{ span: 6 }}>
                            <Card
                                hoverable
                                cover={<img
                                    style={{ width: "100%", height: "140px" }}
                                    alt={product?.name} src={product?.image} />}
                            >
                                <h4>{product.name}</h4>
                                <Divider
                                    style={{ margin: "10px 0" }}
                                />
                                <p>{product.price}</p>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default ProductCards;
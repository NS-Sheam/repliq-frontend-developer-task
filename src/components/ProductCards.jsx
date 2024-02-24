import { Card, Col, Divider, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/features/product/product.slice';
import { toast } from 'sonner';

const ProductCards = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product)

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch("./productData.json")
            .then(res => res.json())
            .then(data => setAllProducts(data))


    }, [products])

    const handleAddProduct = (product) => {
        const toastId = toast.loading("Adding product to cart");
        if (products.find(p => p.id === product.id)) {
            toast.error("Product already added to cart", { id: toastId, duration: 2000 });
            return;
        }
        dispatch(addProduct(product))
        toast.success("Product added to cart", { id: toastId, duration: 2000 });
    }
    return (
        <Row
            className="mt-4"
            gutter={[16, 16]}
        >
            {
                allProducts.map((product, index) => {
                    return (
                        <Col key={index} span={12} md={{ span: 6 }}>
                            <Card
                                onClick={() => handleAddProduct(product)}
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
import { Table } from 'antd';
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeProduct, updateQuantity } from '../redux/features/product/product.slice';

const LeftContainer = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(state => state.product);


    const columns = [
        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'index',
            render: () => <FaEdit />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (item) => <p>{item.toFixed(2)}</p>,
        },

        {
            title: 'Quantity',
            key: 'quantity',
            dataIndex: 'quantity',
            render: (item, record) => (
                <p
                    className='flex justify-center items-center gap-2'
                >
                    <FaMinus
                        onClick={() => dispatch(updateQuantity({ id: record.id, quantity: record.quantity - 1 }))}
                        className='bg-gray-500 text-white rounded-full p-1 text-lg cursor-pointer'
                    />
                    {item}
                    <FaPlus
                        onClick={() => dispatch(updateQuantity({ id: record.id, quantity: record.quantity + 1 }))}
                        className='bg-gray-500 text-white rounded-full p-1 text-lg cursor-pointer'
                    />
                </p>
            ),
        },
        {
            title: 'Total Price',
            key: 'index',
            render: (_, record) => (
                <p>{(record.price * record.quantity).toFixed(2)}</p>
            ),
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'index',
            render: (_, record) => <RiDeleteBinLine
                onClick={() => dispatch(removeProduct(record.id))}
                className='text-red-500 cursor-pointer'
            />,
        },
    ];
    return (
        <div>
            <Table
                showHeader={false}
                columns={columns} dataSource={products}
                pagination={false}
                scroll={{ x: 500 }}
            />
        </div>
    );
};

export default LeftContainer;
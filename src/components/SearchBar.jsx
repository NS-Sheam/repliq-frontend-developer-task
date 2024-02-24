import { Input, Tooltip } from "antd";
import { CiBarcode } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <Input
            className="p-2 shadow-md mb-3"
            placeholder="Search Products..."
            prefix={<FaSearch className="site-form-item-icon" />}
            suffix={
                <Tooltip title="Extra information">
                    <CiBarcode style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
            }
        />
    );
};

export default SearchBar;
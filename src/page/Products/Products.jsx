import { Outlet } from 'react-router-dom';
import './Products.scss';
function Products(props) {
    return (
        <div className="">
            <Outlet />
        </div>
    );
}

export default Products;

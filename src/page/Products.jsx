import { Link, useLocation, Outlet } from 'react-router-dom';

function Products(props) {
    return (
        <div>
            Products
            <Link to="product/:id">Helo</Link>
            <Outlet />
        </div>
    );
}

export default Products;

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, Outlet } from 'react-router-dom';
Products.propTypes = {};

function Products(props) {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            Products
            <Link to="product/:id">Helo</Link>
            <Outlet />
        </div>
    );
}

export default Products;

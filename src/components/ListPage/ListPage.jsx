import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import productApi from '../../api/productApi';
ListPage.propTypes = {};

function ListPage(props) {
    useEffect(() => {
        async function fetchProducts() {
            // const data = await productApi.getAll();
            // console.log(data);
        }
        fetchProducts();
    }, []);
    return <div>ListPage</div>;
}

export default ListPage;

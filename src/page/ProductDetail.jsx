import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import procductApi from '../api/productApi';
ProductDetail.propTypes = {};

function ProductDetail(props) {
    const params = useParams();
    console.log(params.id);
    useEffect(() => {
        async function fetchProduct() {
            const data = await procductApi.get(1);
            console.log(data);
        }
        fetchProduct();
    }, []);
    return (
        <div>
            <h1>gaw</h1>
        </div>
    );
}

export default ProductDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import procductApi from '../../api/productApi';

function ProductDetail(props) {
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function fetchProduct() {
            const data = await procductApi.get(params.id);
            setProduct(data);
        }
        fetchProduct();
    }, [params.id]);
    console.log(product);
    return (
        <div className="product-detail">
            <div className="product-detail__wrapimg">
                <img className="product-detail__img" src={product?.image} alt="" />
            </div>
            <div className="product-detail__info">
                <h2>{product?.title}</h2>
                <p className="product-detail__rating">
                    <span>{product?.rating?.count}</span>
                </p>
                <p className="product-detail__price">{product?.price}</p>
            </div>
        </div>
    );
}

export default ProductDetail;

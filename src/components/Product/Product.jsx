import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Product.scss';
import React from 'react';

function Product({ product }) {
    const navigate = useNavigate();
    const truncString = (str, number) => {
        if (str.length > number) {
            return str.slice(0, number);
        } else {
            return str;
        }
    };
    const renderRatingStars = (rating) => {
        const rate = Math.round(rating);
        const arr = [1, 2, 3, 4, 5];

        return (
            <>
                {arr.map((item, index) => {
                    return <FontAwesomeIcon key={index} icon={rate >= index + 1 ? faStar : starRegular} />;
                })}
            </>
        );
    };
    return (
        <div className="l-3 m-4 col c-12 product" onClick={() => navigate(`/products/${product.id}`)}>
            <div className="product__imgwrap">
                <img src={product.image} className="product__img" alt="" />
            </div>
            <h3 className="product__title">{truncString(product.title, 20)}</h3>
            <span className="product__rating">{renderRatingStars(product.rating.rate)}</span>
            <div className="product__price">${product.price}</div>
        </div>
    );
}

export default Product;

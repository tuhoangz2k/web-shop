import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import procductApi from '../../api/productApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import './ProductDetail.scss';
function ProductDetail(props) {
    const [quantity, setQuantity] = useState(1);
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function fetchProduct() {
            const data = await procductApi.get(params.id);
            setProduct(data);
        }
        fetchProduct();
    }, [params.id]);
    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };
    const handleDecrease = () => {
        setQuantity((prev) => prev - 1);
    };
    const handleSetQuantity = (e) => {
        setQuantity(e.target.value);
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
    console.log(product);
    return (
        <div className="product-detail row">
            <div className="product-detail__wrapimg col l-5">
                <img className="product-detail__img" src={product?.image} alt="" />
            </div>
            <div className="product-detail__info col l-7">
                <h2>{product?.title}</h2>
                <p className="product-detail__rating">
                    {renderRatingStars(product?.rating?.rate)}
                    <span className="product-detail__count">{product?.rating?.count} rated</span>
                </p>
                <p className="product-detail__price">${product?.price}</p>
                <p className="product-detail__des hide-on-mobile ">{product.description}</p>
                <div className="quantity">
                    <p className="quantity__label">Quantity</p>
                    <button className="quantity__btn">
                        <FontAwesomeIcon icon={faChevronLeft} onClick={handleDecrease} />
                    </button>
                    <input type="text" value={quantity} onChange={handleSetQuantity} className="quantity__input" />
                    <button className="quantity__btn">
                        <FontAwesomeIcon icon={faChevronRight} onClick={handleIncrease} />
                    </button>
                </div>
                <button className="product-detail__buy">Buy</button>
            </div>
        </div>
    );
}

export default ProductDetail;

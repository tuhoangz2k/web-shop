import React from 'react';
import './ralatedProducts.scss';
import Product from '../Product';
function RalatedProducts({ items }) {
    return (
        <>
            <div className="row">
                <div className="c-12 m-12 l2 ralated-header">
                    <h3>Related Products</h3>
                    <p>View more</p>
                </div>
            </div>
            <div className="row">
                {items?.map((item) => (
                    <Product product={item} key={item.id} />
                ))}
            </div>
        </>
    );
}

export default RalatedProducts;

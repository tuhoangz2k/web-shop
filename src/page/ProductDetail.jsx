import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const params = useParams();
    console.log(params.id);

    return (
        <div>
            <h1>gaw</h1>
        </div>
    );
}

export default ProductDetail;

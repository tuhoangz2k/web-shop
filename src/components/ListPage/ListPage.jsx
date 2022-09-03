import { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import Category from '../Category';

function ListPage() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            const data = await productApi.getAll();
            setProductList(data);
        }
        fetchProducts();
    }, []);
    console.log(productList);
    return (
        <div className="row">
            <div className="l-3">
                <Category />
            </div>
            <div className="l-9">ListPage</div>
        </div>
    );
}

export default ListPage;

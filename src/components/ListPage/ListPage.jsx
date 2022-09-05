import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productListSelector } from '../../redux/selectors';
import { setProducts } from './productsSlice';
import productApi from '../../api/productApi';
import Category from '../Category';
import Product from '../Product';
import './ListPage.scss';
function ListPage() {
    // const [productLists, setProductLists] = useState([]);
    const productList = useSelector(productListSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchProducts() {
            const data = await productApi.getAll();
            dispatch(setProducts(data));
        }
        fetchProducts();
    }, []);

    // console.log(productList);
    return (
        <div className="row">
            <div className="l-3 m-3 c-0">
                <Category />
            </div>
            <div className="l-9 m-9 c-12">
                <div className="row">
                    {productList?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListPage;

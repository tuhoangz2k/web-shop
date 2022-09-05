import { useEffect, useState } from 'react';
import procductApi from '../../api/productApi';
import categoryApi from '../../api/categoryApi';
import { useDispatch } from 'react-redux';
import { setProducts } from '../ListPage/productsSlice';
import './Category.scss';
function Category(props) {
    const [sort, setSort] = useState('asc');
    const [category, setCategory] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchProductSort() {
            const data = await procductApi.sort(sort);
            dispatch(setProducts(data));
        }
        fetchProductSort();
    }, [sort]);
    useEffect(() => {
        async function fetchProductSort() {
            const data = await categoryApi.getAll();
            setCategory(data);
        }
        fetchProductSort();
    }, []);
    const getCategoryItem = async (category) => {
        const data = await categoryApi.get(category);
        dispatch(setProducts(data));
    };
    const getAllCategory = async () => {
        const data = await procductApi.getAll();
        dispatch(setProducts(data));
    };
    return (
        <div className="category">
            <select
                className="category__sort"
                value={sort}
                onChange={(e) => {
                    setSort(e.target.value);
                }}
            >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
            <h3 className="category__title">Category</h3>
            <ul className="category__list">
                <li className="category__item" onClick={getAllCategory}>
                    All
                </li>
                {category.map((category, index) => (
                    <li className="category__item" key={index} onClick={() => getCategoryItem(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;

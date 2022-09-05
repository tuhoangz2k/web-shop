import { useEffect, useState } from 'react';
import procductApi from '../../api/productApi';

function Category(props) {
    const [sort, setSort] = useState('asc');
    useEffect(() => {
        async function fetchProductSort() {
            const data = await procductApi.sort(sort);
            console.log(data);
        }
        fetchProductSort();
    }, [sort]);
    return (
        <div className="category">
            <select
                value={sort}
                onChange={(e) => {
                    setSort(e.target.value);
                }}
            >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
        </div>
    );
}

export default Category;

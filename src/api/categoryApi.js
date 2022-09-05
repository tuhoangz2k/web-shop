import axiosClient from './axiosClient';
const categoryApi = {
    getAll() {
        const url = '/products/categories';
        return axiosClient.get(url);
    },
    get(category) {
        const url = `/products/category/${category}`;
        return axiosClient.get(url);
    },
};

export default categoryApi;

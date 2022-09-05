import axiosClient from './axiosClient';
const procductApi = {
    getAll() {
        const url = '/products';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    sort(sort) {
        const url = `/products/`;
        return axiosClient.get(url, {
            params: { sort },
        });
    },
};

export default procductApi;

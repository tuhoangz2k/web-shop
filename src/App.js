import './App-grid.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import ListPage from './components/ListPage/ListPage';
function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/products" replace={true} />} />
                <Route path="products" element={<Products />}>
                    <Route index element={<ListPage />} />
                    <Route path=":id" element={<ProductDetail />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import ListPage from './components/ListPage/ListPage';
import Cart from './page/Cart';
function App() {
    return (
        <div className="App">
            <Header />
            <main className="grid wide">
                <div className="m-t-header">
                    <Routes>
                        <Route path="/" element={<Navigate to="/products" replace={true} />} />
                        <Route path="products" element={<Products />}>
                            <Route index element={<ListPage />} />
                            <Route path=":id" element={<ProductDetail />} />
                        </Route>
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;

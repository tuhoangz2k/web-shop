import { useState } from 'react';
import { faCartShopping, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Header.scss';
import Register from '../Auth/components/Register';
import Login from '../Auth/components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginSelector } from '../../redux/selectors';
import { logout } from '../Auth/components/Login/loginSlice';
function Header(props) {
    const [hasProduct, setProduct] = useState(1);
    const [showMenu, setShowMenu] = useState(false);
    const [showRigister, setShowRigister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const isLogin = useSelector(isLoginSelector);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    console.log(isLogin);
    return (
        <div className="header">
            <div className="grid wide">
                <div className="header__container row">
                    <Link to="/" className="header__logo">
                        <img
                            className="header__image"
                            src="https://phuongnam24h.com/img_data/images/logo-shop-quan-ao-nu.jpg"
                            alt="logo"
                        />
                    </Link>

                    <ul className={`header__list ${showMenu ? '' : 'hidden'}`}>
                        <li className="header__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/products">Product</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/">Contact</Link>
                        </li>
                        {!isLogin && (
                            <>
                                <li
                                    className="header__item"
                                    onClick={() => {
                                        setShowLogin(!showLogin);
                                        setShowMenu(false);
                                    }}
                                >
                                    Login
                                </li>
                                <li
                                    className="header__item"
                                    onClick={() => {
                                        setShowRigister(!showRigister);
                                        setShowMenu(false);
                                    }}
                                >
                                    Rigister
                                </li>
                            </>
                        )}

                        {isLogin && (
                            <li className="header__item account">
                                <FontAwesomeIcon icon={faUser} />
                                <ul className="account__list">
                                    <li className="account__item">My Account</li>
                                    <li className="account__item" onClick={handleLogout}>
                                        logout
                                    </li>
                                </ul>
                            </li>
                        )}
                    </ul>
                    <Link to="/cart" className="header__cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        {hasProduct > 0 && <span className="header__quantity">{hasProduct}</span>}
                    </Link>
                    <span className="header__menu l-0" onClick={() => setShowMenu((prev) => !prev)}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
            </div>

            {showRigister && <Register onClick={setShowRigister} />}
            {showLogin && <Login onClick={setShowLogin} />}
        </div>
    );
}

export default Header;

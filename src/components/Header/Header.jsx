import { useState } from 'react';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Header.scss';
import Register from '../Auth/components/Register';

function Header(props) {
    const [hasProduct, setProduct] = useState(1);
    const [showMenu, setShowMenu] = useState(false);
    const [showRigister, setShowRigister] = useState(false);
    return (
        <div className="header">
            <div className="grid wide">
                <div className="header__container row">
                    <div className="header__logo">
                        <img
                            className="header__image"
                            src="https://phuongnam24h.com/img_data/images/logo-shop-quan-ao-nu.jpg"
                            alt="logo"
                        />
                    </div>

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
                        <li className="header__item">Login</li>
                        <li className="header__item" onClick={() => setShowRigister(!showRigister)}>
                            Rigister
                        </li>
                    </ul>
                    <span className="header__cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        {hasProduct > 0 && <span className="header__quantity">{hasProduct}</span>}
                    </span>
                    <span className="header__menu l-0" onClick={() => setShowMenu((prev) => !prev)}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
            </div>

            {showRigister && <Register onClick={setShowRigister} />}
        </div>
    );
}

export default Header;

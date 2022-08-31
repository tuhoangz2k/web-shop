import { useState } from 'react';
import PropTypes from 'prop-types';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
    const [hasProduct, setProduct] = useState(1);

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

                    <nav className="header__menu">
                        <ul className="header__list">
                            <li className="header__item">Home</li>
                            <li className="header__item">Product</li>
                            <li className="header__item">Contact</li>
                            <li className="header__item">Login</li>
                            <li className="header__item">Rigister</li>
                            <li className="header__item">
                                <span className="header__cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    {hasProduct > 0 && <span className="header__quantity">{hasProduct}</span>}
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;

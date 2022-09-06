import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart, removeAll } from './cartSlice';
import { cartQuantity, cartItems } from '../../redux/selectors';
import { faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nocart from '../../asset/img/nocart.png';
import './Cart.scss';
function Cart(props) {
    const productsQuantity = useSelector(cartQuantity);
    const cartList = useSelector(cartItems);
    console.log(cartList);
    return (
        <div className="row cart">
            {productsQuantity > 0 ? (
                <>
                    <h3 className="c-12 l-12 m-12 ">Cart</h3>
                    <div className="col l-9 m-9">
                        {cartList.map((item) => (
                            <div className="cart__container" key={item.id}>
                                <div className="cart__item">
                                    <img src={item.product.image} alt="" />
                                    <div className="cart__item-info">
                                        <p>{item.product.title}</p>
                                        <p>{item.product.category}</p>
                                    </div>
                                </div>
                                <p className="cart__price">{item.product.price}$</p>
                                <div className="cart__action">
                                    <button className="quantity__btn">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <input type="text" className="quantity__input" />
                                    <button className="quantity__btn">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                                <p className="cart__total">${item.product.price * item.quantity}</p>

                                <div>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col l-3 m-3 c-0 min-h">
                        <div className="cart__wrap-buy">
                            <p>Subtotal</p>
                            <p className="cart__subtotal">130$</p>
                        </div>
                        <button className="cart__btn cart__btn--buy ">Buy</button>
                    </div>
                </>
            ) : (
                <div className="cart__container-nocart">
                    <div className="cart__wrapimg">
                        <img src={nocart} className="cart__nocart" alt="" />
                    </div>
                    <p className="cart__noti">Your cart is empty</p>
                    <button className="cart__btn cart__btn--back">Go back to shopping</button>
                </div>
            )}
        </div>
    );
}

export default Cart;

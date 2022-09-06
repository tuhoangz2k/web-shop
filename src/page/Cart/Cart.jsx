import { useDispatch, useSelector } from 'react-redux';
import { removeCart, removeAll, setCartQuantity, increaseCartQuantity, decreaseCartQuantity } from './cartSlice';
import { cartQuantity, cartItems, subtotalCartSelector } from '../../redux/selectors';
import { faTrash, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nocart from '../../asset/img/nocart.png';
import './Cart.scss';
function Cart(props) {
    const productsQuantity = useSelector(cartQuantity);
    const cartList = useSelector(cartItems);
    const subtotal = useSelector(subtotalCartSelector);
    const dispatch = useDispatch();

    const handleSetQuantity = (e, id) => {
        const value = parseInt(e.target.value);
        if (typeof value !== 'number') return;
        dispatch(setCartQuantity({ quantity: value, id }));
    };

    const handleIncrease = (id) => {
        dispatch(increaseCartQuantity(id));
    };
    const handleDecrease = (id) => {
        dispatch(decreaseCartQuantity(id));
    };
    const handleRemoveItem = (id) => {
        dispatch(removeCart(id));
    };

    const handleRemoveAll = () => {
        dispatch(removeAll());
    };

    return (
        <div className="row cart">
            {productsQuantity > 0 ? (
                <>
                    <div className="c-12 l-12 m-12">
                        <div className="cart__header">
                            <h3>Cart</h3>
                            <p onClick={handleRemoveAll}>Remove All</p>
                        </div>
                    </div>

                    <div className="col l-9 m-9 c-12">
                        {cartList.map((item) => (
                            <div className="cart__container" key={item.id}>
                                <div className="cart__item">
                                    <img src={item.product.image} alt="" />
                                    <div className="cart__item-info">
                                        <p>{item.product.title}</p>
                                        <p>{item.product.category}</p>
                                    </div>
                                </div>
                                <p className="cart__price hideOnMobile">${item.product.price}</p>
                                <div className="cart__action">
                                    <button className="quantity__btn" onClick={() => handleDecrease(item.id)}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <input
                                        type="text"
                                        value={item.quantity}
                                        className="quantity__input"
                                        onChange={(e) => {
                                            handleSetQuantity(e, item.id);
                                        }}
                                    />

                                    <button className="quantity__btn" onClick={() => handleIncrease(item.id)}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                                <p className="cart__total">${item.product.price * item.quantity.toFixed(2)}</p>

                                <div class="cart__delete hideOnMobile" onClick={() => handleRemoveItem(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col l-3 m-3 c-0 min-h">
                        <div className="cart__wrap-buy">
                            <p>Subtotal</p>
                            <p className="cart__subtotal">${subtotal.toFixed(2)}</p>
                        </div>
                        <button className="cart__btn cart__btn--buy ">Buy</button>
                    </div>
                    <div className="cart__action-mobile hideTablet">
                        <p>${subtotal.toFixed(2)}</p>
                        <button className="cart__btn cart__btn--buy">Buy</button>
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

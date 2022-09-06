import React from 'react';
import './Footer.scss';
import appStore from '../../asset/img/Appstore.png';
import googlePlay from '../../asset/img/GooglePlay.png';
import logo from '../../asset/img/logo.jpg';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container grid wide">
                <div className="row">
                    <div className="col l-4">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and iOS mobile phone</p>
                        <div className="footer__download">
                            <img src={appStore} alt="" />
                            <img src={googlePlay} alt="" />
                        </div>
                    </div>
                    <div className="col l-5">
                        <div className="footer__logo">
                            <img src={logo} alt="" />
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever
                        </p>
                    </div>
                    <div className="col l-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>
                                <a href="#">Coupons</a>
                            </li>
                            <li>
                                <a href="#">Blog Post</a>
                            </li>
                            <li>
                                <a href="#">Return Policy</a>
                            </li>
                            <li>
                                <a href="#">Join Affiliate</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-3">
                        <h3>Follow us</h3>
                        <ul>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

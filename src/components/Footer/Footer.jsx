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
                    <div className="col l-4 m-4 c-12">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and iOS mobile phone</p>
                        <div className="footer__download">
                            <img src={appStore} alt="" />
                            <img src={googlePlay} alt="" />
                        </div>
                    </div>
                    <div className="col l-5 m-5 c-12">
                        <div className="footer__logo">
                            <img src={logo} alt="" />
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever
                        </p>
                    </div>
                    <div className="col l-3 m-3 c-12">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="col l-3 m-3 c-12">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

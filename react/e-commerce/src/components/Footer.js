import { Facebook, Google, Instagram, Twitter } from "@styled-icons/boxicons-logos/";
import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from 'styled-components';

export const BlackFacebook = styled(Facebook)`
    color: black;
    height: 24px;
    width: 24px;
    margin-right: 5px;
    margin-bottom: 6px;
`
export const BlackInstagram = styled(Instagram)`
    color: black;
    height: 24px;
    width: 24px;
    margin-right: 5px;
    margin-bottom: 6px;
`
export const BlackTwitter = styled(Twitter)`
    color: black;
    height: 24px;
    width: 24px;
    margin-right: 5px;
    margin-bottom: 6px;
`
export const BlackGoogle = styled(Google)`
    color: black;
    height: 24px;
    width: 24px;
    margin-bottom: 6px;
`

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer section">
                <div className="footer__container bd-grid">
                    <div className="footer__box">
                        <h3 className="footer__title">Yash</h3>
                        <p className="footer__description">New collection of shoes 2023.</p>
                    </div>
                    <div className="footer__box">
                        <h3 className="footer__title">EXPLORE</h3>
                        <ul>
                            <li><HashLink to={"/#home"} className="footer__link">Home</HashLink></li>
                            <li><HashLink to={"/#featured"} className="footer__link">Featured</HashLink></li>
                            <li><HashLink to={"/#women"} className="footer__link">Women</HashLink></li>
                            <li><HashLink to={"/#new"} className="footer__link">New</HashLink></li>
                        </ul>
                    </div>

                    <div className="footer__box">
                        <h3 className="footer__title">SUPPORT</h3>
                        <ul>
                            <li><a href="/" className="footer__link">Product Help</a></li>
                            <li><a href="/" className="footer__link">Customer Care</a></li>
                            <li><a href="/" className="footer__link">Authorized service</a></li>
                        </ul>
                    </div>

                    <div className="footer__box">
                        <a href="www.facebook.com" className="footer__social"><BlackFacebook className='bx'/></a>
                        <a href="www.instagram.com" className="footer__social"><BlackInstagram className='bx'/></a>
                        <a href="www.twitter.com" className="footer__social"><BlackTwitter className='bx'/></a>
                        <a href="www.google.com" className="footer__social"><BlackGoogle className='bx'/></a>

                    </div>
                </div>
                <p className="footer__copy">&#169; 2023 Siddhu Jootewala. All rights reserved.</p>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            </footer>
        );
    }
}

export default Footer;
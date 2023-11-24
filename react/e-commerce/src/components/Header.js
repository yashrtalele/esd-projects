import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from 'styled-components';
import { ShoppingBag } from "@styled-icons/boxicons-regular/";
import { Grid } from"@styled-icons/fluentui-system-regular/";
import { NavLink } from "react-router-dom";

export const BlackBag = styled(ShoppingBag)`
    color: black;
    height: 21px;
    width: 21px;
    margin-bottom: 9px;
`
export const BlackGrid = styled(Grid)`
    color: black;
    height: 21px;
    width: 21px;
    margin-bottom: 9px;
`

class Header extends React.Component {
    render() {
        return <Head />
    }
}

function Head() {
    const showMenu = (toggleId, navId)=>{
        const toggle=document.getElementById(toggleId),
        nav=document.getElementById(navId)
    
        if(toggle && nav) {
            toggle.addEventListener('click', ()=> {
                nav.classList.toggle('show')
            })
        }
    }
    
    const navLink = document.querySelectorAll('.nav__link'),
        navMenu=document.getElementById('nav-menu')
    
    function linkAction() {
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
    
    return (
        <header className="l-header" id="header">
        <nav className="nav bd-grid">
            <div className="nav__toggle" id="nav-toggle">
                <button className="toggle-button" onClick={() => {showMenu('nav-toggle', 'nav-menu')}}><BlackGrid className='bx' /></button>
            </div>
            <a href="/profile" className="nav__logo">Yash</a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><HashLink to={"/#home"} className="nav__link">Home</HashLink></li>
                    <li className="nav__item"><HashLink to={"/#featured"} className="nav__link">Featured</HashLink></li>
                    <li className="nav__item"><HashLink to={"/#women"} className="nav__link">Women</HashLink></li>
                    <li className="nav__item"><HashLink to={"/#new"} className="nav__link">New</HashLink></li>
                    <li className="nav__item"><HashLink to="/Shop" className="nav__link">Shop</HashLink></li>
                </ul>
            </div>
            <div className="nav__shop">
                <NavLink to="/cart"><BlackBag /></NavLink>
            </div>
        </nav>
    </header>
    );
}

export default Header;
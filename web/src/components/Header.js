import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '~images/logo.svg'
import 'hamburgers/dist/hamburgers.min.css'
import styles from './header.module.css'

const Header = () => {
    const [isActive, setActive] = useState(false)

    return (
        <header id="header" className={`${styles.header} `}>
            <button
                onClick={() => setActive(!isActive)}
                className={`hamburger hamburger--3dy ${
                    isActive ? 'is-active' : ''
                } ${styles.hamburgerContainer}`}
                type="button"
            >
                <span className="hamburger-box">
                    <span
                        className={`hamburger-inner ${styles.hamburgerInner}`}
                    ></span>
                </span>
            </button>
            <nav className={`${styles.nav} ${isActive ? 'block' : 'hidden'}`}>
                <ul>
                    <li className="only-mobile">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="only-desktop">
                        <Link to="/">
                            <img className="h-10 mx-1" src={Logo} alt="Logo" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

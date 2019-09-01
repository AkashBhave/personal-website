import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'
import styles from './header.module.css'

const Header = () => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
)

export default Header

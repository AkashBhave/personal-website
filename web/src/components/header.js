import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'
import 'hamburgers/dist/hamburgers.min.css'
import styles from './header.module.css'

const Header = () => {
    const [isActive, setActive] = useState(false)

    return (
        <header
            id="header"
            className="md:h-20 h-auto md:px-16 px-6 bg-white flex flex-wrap items-center md:py-0 py-6 font-sans w-full border-b-2 border-blue-secondary shadow"
        >
            <button
                onClick={() => setActive(!isActive)}
                className={`hamburger hamburger--collapse ${
                    isActive ? 'is-active' : ''
                } hidden`}
                type="button"
            >
                <span className="hamburger-box cursor-pointer">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div
                className={`md:flex md:items-center md:w-auto w-full mx-auto uppercase ${
                    isActive ? 'block' : 'hidden'
                }`}
                id="menu"
            >
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li className="md:hidden block hover:text-blue-primary">
                            <Link className="md:p-4 py-3 px-0 block" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-blue-primary">
                            <Link
                                className="md:p-4 py-3 px-0 block"
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="hover:text-blue-primary">
                            <Link className="md:p-4 py-3 px-0 block" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="md:block hidden">
                            <Link to="/">
                                <img
                                    className="h-10 px-6 py-1"
                                    src={Logo}
                                    alt
                                    srcset
                                />
                            </Link>
                        </li>
                        <li className="hover:text-blue-primary">
                            <Link
                                className="md:p-4 py-3 px-0 block"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="hover:text-blue-primary">
                            <Link
                                className="md:p-4 py-3 px-0 block md:mb-0 mb-2"
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
